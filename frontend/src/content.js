// Content script
console.log("Fake Resource Detector Content Script Active");

const SUSPICIOUS_KEYWORDS = [
    "free money",
    "lottery winner",
    "claim your prize",
    "bank account details",
    "verify your identity",
    "urgent action required"
];

function checkContent() {
    const text = document.body.innerText.toLowerCase();
    const foundKeywords = SUSPICIOUS_KEYWORDS.filter(keyword => text.includes(keyword));

    // ALWAYS send a message to background to trigger backend check, 
    // even if no keywords are found (URL might be blacklisted)
    chrome.runtime.sendMessage({
        type: "PAGE_CONTENT_ANALYSIS",
        keywords: foundKeywords,
        textLength: text.length
    });
}

// Run check when page loads
checkContent();

// Listen for manual re-checks
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "TRIGGER_CHECK") {
        console.log("Manual check triggered");
        checkContent();
        sendResponse({ status: "started" });
    }
});
