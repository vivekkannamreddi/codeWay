document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.onMessage.addListener((message) => {
        if (message.status) {
            document.getElementById("status").innerText = message.status;
        }
    });
});
