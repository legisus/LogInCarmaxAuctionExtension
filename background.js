//background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["dist/assets/content.js"], // Use bundled content script
    });
});