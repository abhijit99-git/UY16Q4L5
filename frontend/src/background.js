// Background script
console.log("Fake Resource Detector Background Script Running");

// Production API URL
const API_URL = "https://safesurf-vfg8.onrender.com/api/analyze";

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "PAGE_CONTENT_ANALYSIS") {
        const tabId = sender.tab.id;
        const url = sender.tab.url;

        console.log("Analyzing Tab:", tabId, url);

        // Call Backend API
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: url,
                keywords: message.keywords || []
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("API Result:", data);

                const isDangerous = data.reputation === "DANGEROUS";
                const isSuspicious = data.reputation === "SUSPICIOUS";

                const statusData = {
                    reputation: data.reputation, // SAFE, SUSPICIOUS, DANGEROUS
                    riskScore: data.riskScore,
                    details: data.details,
                    keywords: message.keywords // Keep client-side keywords too
                };

                // Store in persistence storage
                chrome.storage.local.set({ [`tab_${tabId}`]: statusData });

                // Set Badge
                if (isDangerous) {
                    chrome.action.setBadgeText({ text: "BAD", tabId: tabId });
                    chrome.action.setBadgeBackgroundColor({ color: "#FF0000", tabId: tabId });
                } else if (isSuspicious) {
                    chrome.action.setBadgeText({ text: "WARN", tabId: tabId });
                    chrome.action.setBadgeBackgroundColor({ color: "#FFA500", tabId: tabId });
                } else {
                    chrome.action.setBadgeText({ text: "OK", tabId: tabId });
                    chrome.action.setBadgeBackgroundColor({ color: "#22c55e", tabId: tabId });
                }
            })
            .catch(err => {
                console.error("API Call Failed:", err);
                // Fallback
                if (message.keywords && message.keywords.length > 0) {
                    const fallbackData = { reputation: "SUSPICIOUS", keywords: message.keywords, details: "API unreachable. Local check only." };
                    chrome.storage.local.set({ [`tab_${tabId}`]: fallbackData });

                    chrome.action.setBadgeText({ text: "!", tabId: tabId });
                    chrome.action.setBadgeBackgroundColor({ color: "#FF0000", tabId: tabId });
                } else {
                    const fallbackData = { reputation: "SAFE", keywords: [], details: "Checked locally (API unreachable)." };
                    chrome.storage.local.set({ [`tab_${tabId}`]: fallbackData });
                    chrome.action.setBadgeText({ text: "", tabId: tabId });
                }
            });

    } else if (message.type === "GET_TAB_STATUS") {
        const requestedTabId = message.tabId;
        // Async read from storage
        chrome.storage.local.get([`tab_${requestedTabId}`], (result) => {
            const data = result[`tab_${requestedTabId}`];
            if (data) {
                sendResponse(data);
            } else {
                // DATA MISSING! 
                // This happens if content script didn't run or hasn't finished.
                // Auto-trigger a check now.
                console.log("Data missing for tab", requestedTabId, "Triggering scan...");
                chrome.tabs.sendMessage(requestedTabId, { type: "TRIGGER_CHECK" });

                // Send a "Loading" state back to popup
                sendResponse({ reputation: "ANALYZING", details: "Scanning page..." });
            }
        });
        return true; // Keep message channel open for async sendResponse
    }
});

// Clean up when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
    chrome.storage.local.remove(`tab_${tabId}`);
});

// Listen for tab updates to clear old data
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading') {
        chrome.storage.local.remove(`tab_${tabId}`);
        chrome.action.setBadgeText({ text: "", tabId: tabId });
    }
});
