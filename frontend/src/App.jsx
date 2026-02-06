/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentTabId, setCurrentTabId] = useState(null);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        setCurrentUrl(activeTab.url);
        setCurrentTabId(activeTab.id);
        fetchStatus(activeTab.id);
      }
    });
  }, []);

  const fetchStatus = (tabId) => {
    setLoading(true);
    chrome.runtime.sendMessage(
      { type: "GET_TAB_STATUS", tabId: tabId },
      (response) => {
        if (response) {
          setData(response);
        }
        setLoading(false);
      }
    );
  };

  const handleRescan = () => {
    if (currentTabId) {
      setLoading(true);
      // Ask Content Script to run again
      chrome.tabs.sendMessage(currentTabId, { type: "TRIGGER_CHECK" }, () => {
        // Wait a bit for analysis to complete then fetch status
        setTimeout(() => {
          fetchStatus(currentTabId);
        }, 1000);
      });
    }
  };

  if (loading) return <div className="loading">Analyzing...</div>;
  if (!data) return <div className="popup-container"><div className="content">No Data</div></div>;

  const reputation = data.reputation || "UNKNOWN";
  const isSafe = reputation === "SAFE";
  const isDanger = reputation === "DANGEROUS";
  const isWarn = reputation === "SUSPICIOUS";

  let statusClass = "unknown"; // Default
  if (isSafe) statusClass = "safe";
  if (isDanger) statusClass = "danger";
  if (isWarn) statusClass = "warning";

  return (
    <div className="popup-container">
      <h1 className="title">Security Check</h1>

      <div className="content">
        <p className="url-text" title={currentUrl}>{currentUrl}</p>

        <div className={`alert-box ${statusClass}`}>
          <p className="alert-title">{reputation}</p>
          <p className="alert-message">{data.details || "No analysis data available."}</p>

          {data.riskScore > 0 && (
            <p className="risk-score">Risk Score: {data.riskScore}</p>
          )}

          {data.keywords && data.keywords.length > 0 && (
            <div className="keywords-section">
              <p>Keywords Found:</p>
              <ul className="keyword-list">
                {data.keywords.map((kw, idx) => (
                  <li key={idx}>{kw}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {reputation === "UNKNOWN" && (
          <button className="rescan-btn" onClick={handleRescan}>
            Rescan Page
          </button>
        )}
      </div>

      <div className="footer">
        Powered by SafeSurf
      </div>
    </div>
  );
}

export default App;
