const express = require('express');
const router = express.Router();

// Mock Database of suspicious domains
const BLACKLIST = [
    'phishing.com',
    'fake-bank.net',
    'free-money.org',
    'account-verify.xyz'
];

router.post('/', async (req, res) => {
    try {
        const { url, keywords } = req.body;

        console.log("Analyzing:", url);

        // Simple Domain Extraction
        let domain = '';
        try {
            const urlObj = new URL(url);
            domain = urlObj.hostname;
        } catch (e) {
            domain = url;
        }

        // Check Level 1: Domain Blacklist
        const isBlacklisted = BLACKLIST.some(d => domain.includes(d));

        // Check Level 2: Keyword Severity (if sent from frontend)
        let riskScore = 0;
        if (isBlacklisted) riskScore += 100;
        if (keywords && keywords.length > 0) riskScore += keywords.length * 10;

        let reputation = "SAFE";
        if (riskScore > 80) reputation = "DANGEROUS";
        else if (riskScore > 20) reputation = "SUSPICIOUS";

        res.json({
            url,
            domain,
            reputation,
            riskScore,
            details: isBlacklisted ? "Domain is in the blacklist." : "Domain reputation clean.",
            analysisTimestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error("Analysis Error:", error);
        res.status(500).json({ message: "Analysis failed" });
    }
});

module.exports = router;
