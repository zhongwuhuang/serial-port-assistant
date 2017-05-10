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
  // mainWindow.setAlwaysOnTop(true);

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
  //app是否置顶显示
  // globalShortcut.register('f1', function() {
  //   if(mainWindow.isAlwaysOnTop()){
  //     mainWindow.setAlwaysOnTop(false);
  //   }else if(!mainWindow.isAlwaysOnTop()){
  //     mainWindow.setAlwaysOnTop(true);
  //   }
  // })
})

// 打开窗口置顶
ipcMain.on('open-top', function () {
    mainWindow.setAlwaysOnTop(true);
});

// 关闭窗口置顶
ipcMain.on('close-top', function () {
    mainWindow.setAlwaysOnTop(false);
});

// 监听刷新事件
ipcMain.on('reload-page', function () {
    mainWindow.webContents.reload();
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
