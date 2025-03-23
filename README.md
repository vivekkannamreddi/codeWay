# CodeWay

CodeWay is a Chrome extension that **automatically saves your LeetCode solutions** to a private GitHub repository named `LeetCode`. It checks if the repository exists, creates it if necessary, and commits your solution files when you solve a problem on LeetCode.

---
## 🚀 Features
- **Automatic GitHub Repo Management**: Creates the `LeetCode` repo if it doesn’t exist.
- **Auto-commit Solutions**: Saves every submitted LeetCode solution automatically.
- **Secure Token Handling**: Uses a `config.json` file to store the GitHub token instead of hardcoding it.

---
## 📌 Installation Guide

### **1️⃣ Download & Extract the Extension**
1. Go to your repository: **[GitHub Repo Link]** (Replace with your repo link)
2. Click on **"Code" → "Download ZIP"**
3. Extract the ZIP file to a **known location** on your laptop.

---
## ⚙️ Setup Instructions

### **2️⃣ Add Your GitHub Token**
1. Open the extracted folder.
2. Locate the file **`config.json`**.
3. Add your GitHub **Personal Access Token** inside:
   ```json
   {
     "GITHUB_TOKEN": "your_personal_access_token_here"
   }
   ```
4. Save the file.

🔹 **(Make sure your GitHub token has `repo` permissions to allow commits.)**

---
## 🔌 Load the Extension in Chrome
### **3️⃣ Enable Developer Mode & Load the Extension**
1. Open **Google Chrome**.
2. Go to **chrome://extensions/**
3. Enable **"Developer Mode"** (top-right corner).
4. Click **"Load Unpacked"**.
5. Select the extracted folder and click **Open**.

✅ The extension is now installed and running!

---
## 🛠️ How to Use CodeWay

### **4️⃣ Use the Extension to Save Code**
1. Solve a problem on **LeetCode**.
2. The extension automatically captures your **submitted solution**.
3. The code is pushed to your **GitHub `LeetCode` repo** in the format: `ProblemName.txt`.
4. You can check your saved solutions on **GitHub**.

---
## 📝 Example Workflow
1. Solve **"Two Sum"** on LeetCode.
2. CodeWay saves `TwoSum.txt` to `LeetCode` repo.
3. Commit message: `Added Two Sum`.
4. Check `https://github.com/your-username/LeetCode` for saved solutions.

---
## ❓ Troubleshooting
- **Repo Not Created?**
  - Ensure your GitHub token has `repo` permissions.
- **No Code Saved?**
  - Ensure `config.json` contains the correct token.
- **Extension Not Working?**
  - Try **removing and reloading** the extension.

---
## 🏆 Credits
- **Developed by**: Vivek Babu Kannamreddi
- **GitHub**: [Your GitHub Profile Link]

🔥 Happy Coding with CodeWay! 🚀

