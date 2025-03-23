fetch(chrome.runtime.getURL("config.json"))
  .then(response => response.json())
  .then(config => {
    const GITHUB_TOKEN = config.GITHUB_TOKEN;

    chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
      if (message.action === "saveCode") {
        const { problemName, code } = message;
        const repo = "LeetCode";
        const username = "vivekkannamreddi"; 

        try {
          
          const repoResponse = await fetch(`https://api.github.com/repos/${username}/${repo}`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
          });

          const repoExists = repoResponse.ok;

          if (!repoExists) {
            console.log("Creating repository...");
            const createRepoResponse = await fetch(`https://api.github.com/user/repos`, {
              method: "POST",
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ name: repo, private: true })
            });

            if (!createRepoResponse.ok) {
              const errorData = await createRepoResponse.json();
              throw new Error(`GitHub Repo Creation Failed: ${JSON.stringify(errorData)}`);
            }
          }

          const filePath = `${problemName}.txt`;

          const fileResponse = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${filePath}`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
          });

          let sha = null;
          if (fileResponse.ok) {
            const fileData = await fileResponse.json();
            sha = fileData.sha; 
          }

          
          console.log("Committing the code...");
          const commitResponse = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${filePath}`, {
            method: "PUT",
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              message: `Added ${problemName}`,
              content: btoa(code), 
              sha: sha 
            })
          });

          if (!commitResponse.ok) {
            const errorData = await commitResponse.json();
            throw new Error(`GitHub Commit Failed: ${JSON.stringify(errorData)}`);
          }

          console.log(`✅ Successfully committed ${problemName}`);
        } catch (error) {
          console.error("❌ Error:", error);
        }
      }
    });
  })
  .catch(error => console.error("Error loading config.json:", error));
