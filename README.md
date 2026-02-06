# SafeSurf - Fake Resource Detector

SafeSurf is a **Browser Extension** and **Web Analytics Platform** designed to protect users from phishing, fake resources, and misleading websites in real-time.

## 🚀 Features

### 🛡️ Browser Extension
- **Real-time Scanning**: Automatically scans every page you visit for suspicious keywords (e.g., "free money", "lottery winner").
- **Instant Alerts**: Displays a warning badge (Popup) if a site is flagged.
- **Backend Verification**: Cross-references suspicious URLs with our backend reputation API.
- **Rescan Capability**: Manually trigger a re-scan of any page.

### 🌐 Web Dashboard (Coming Soon)
- **URL Analytics**: Enter any URL to get a comprehensive security report.
- **Download Hub**: One-click access to download the SafeSurf extension.

---

## 🛠️ Tech Stack

- **Frontend (Extension)**: React.js, Vite, CRXJS (Chrome Extension Manifest V3)
- **Backend (API)**: Node.js, Express.js
- **Database**: MongoDB (Planned for reputation history)
- **Analysis**: Keyword severity matching + Domain Blacklist (Mocked)

---

## 📦 Installation Guide

### 1. Backend Setup (API)
The backend powers the analysis engine.

```bash
cd backend
npm install
node server.js
```
*Server runs on `http://localhost:5000`*

### 2. Extension Installation
Since this is a developer build, you need to "sideload" it into Chrome.

#### Option A: Build from Source
```bash
cd frontend
npm install
npm run build
```
This creates a `dist` folder.

#### Option B: Download & Install (For Users)
1.  **Download** the `safe-surf-extension.zip` from our website.
2.  **Extract** the zip file to a folder.
3.  Open Chrome and go to `chrome://extensions`.
4.  Toggle **Developer mode** (top right).
5.  Click **Load unpacked**.
6.  Select the extracted folder.

---

## 🧪 How to Test

1.  Ensure Backend is running (`node server.js`).
2.  Open the Extension.
3.  Visit our **Test Page**: `test_pages/suspicious.html` (Local file).
    - **Result**: The extension badge should turn **RED**.
    - **Popup**: Should show "DANGEROUS" with list of keywords found.
4.  Visit a Safe Site (e.g., Google).
    - **Result**: Badge stays clear.
    - **Popup**: Shows "SAFE".

---

## 🚢 Deployment

- **Backend**: Deployed on **Render** (e.g., `https://fake-resource-api.onrender.com`).
- **Extension**: Distributed as a downloadable ZIP or published to Chrome Web Store.

---

**Hackathon Project** | Level 2 Implementation
