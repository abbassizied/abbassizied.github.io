
[🏠 Home](../index.md) | 
[🧩 Projects](../projects.md) | 
[🧪 Mini-Projects](../mini-projects.md) | 
[📰 Posts](../posts.md)

---

# 📰 Blog Post

## 📌 How to Set JAVA_HOME Manually on Windows 10  
🗓️ **Published:** July 25, 2025

---

If you're working with Java applications, setting the `JAVA_HOME` variable correctly is crucial. Here’s how to do it step by step:

### 🔍 Step 1: Find Your Java Installation Path

1. Open **Command Prompt** (press `Win + R`, type `cmd`, hit Enter)
2. Type this command and press Enter:  
   ```cmd
   where java
   ```
3. You’ll see paths like this:  
   ```
   C:\Program Files\Java\jdk-21.0.2\bin\java.exe
   C:\SomeOtherPath\java.exe
   ```
4. **Choose your main JDK path** (e.g., `C:\Program Files\Java\jdk-21.0.2`).  
   → *Remove* `\bin\java.exe` from the path!  
   ✅ Correct path: `C:\Program Files\Java\jdk-21.0.2`

### ⚙️ Step 2: Set JAVA_HOME
1. Press `Win + S` and type **"Environment Variables"**
2. Select **"Edit the system environment variables"**
3. Click **Environment Variables...** at the bottom
4. Under **System variables**:
   - Click **New...**
   - Set:
     - **Variable name:** `JAVA_HOME`
     - **Variable value:** Your JDK path (from Step 1)  
       Example: `C:\Program Files\Java\jdk-21.0.2`

### 🔄 Step 3: Update Your PATH

1. In the same **Environment Variables** window:
   - Find `Path` under **System variables**
   - Click **Edit...**
2. Click **New** and add:  
   ```cmd
   %JAVA_HOME%\bin
   ```
3. Click **OK** → **OK** → **OK** to close all windows.

### ✔️ Step 4: Verify the Setup

1. **Close all open Command Prompt windows** (important!).
2. Open a **new Command Prompt**.
3. Type:
   ```cmd
   echo %JAVA_HOME%
   ```
   You should see your JDK path (e.g., `C:\Program Files\Java\jdk-21.0.2`).
4. Confirm Java works:
   ```cmd
   java -version
   ```
### ⚠️ Troubleshooting Tips
- If changes don’t apply: **Restart your PC**.
- Double-check:
  - No `bin` in `JAVA_HOME` (use parent JDK folder!)
  - `%JAVA_HOME%\bin` exists in `Path`
- Multiple Java installs? Delete unused versions to avoid conflicts.

Done! 🎉 Your Java environment is now set up correctly.

---

