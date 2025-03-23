


document.addEventListener("click", async (e) => {
    if (e.target && e.target.innerText && e.target.innerText.includes("Submit")) {
      setTimeout(() => {
        const codeElement = document.querySelector(".view-lines");
        if (!codeElement) {
          console.error("Error: Code element not found.");
          return;
        }
  
        const code = codeElement.innerText;
        const problemName = document.title.split(" - ")[0].replace(/\s/g, "_");
  
        chrome.runtime.sendMessage({ action: "saveCode", problemName, code });
      }, 2000);
    }
  });
      