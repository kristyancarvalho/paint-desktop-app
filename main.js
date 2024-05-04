const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 800,
    icon: path.join(__dirname, "icons", "icon.ico"),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
    maximized: true,
    fullscreenable: false,
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
