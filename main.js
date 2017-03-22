const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const globalShortcut = electron.globalShortcut
const ipcMain = electron.ipcMain

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    // frame:false,
    width: 892,
    height: 676,
    resizable:false,
    useContentSize:true,//默认为 false,true为不包括串口框架
    // alwaysOnTop:true//窗口是否总是显示在其他窗口之前
  })

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/app/index.html')

  //窗口是否总是显示在其他窗口之前
  mainWindow.setAlwaysOnTop(true);

  // mainWindow.openDevTools(true);

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', function(){
  createWindow();
  //重载网页
  globalShortcut.register('f5', function() {
    mainWindow.webContents.reload();
  })
  //调试助手
  globalShortcut.register('f4', function() {
    mainWindow.webContents.toggleDevTools();
  })
})

// 监听刷新事件
ipcMain.on('reload-page', function () {
    mainWindow.reload();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  app.quit();
  // port.close();
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})
