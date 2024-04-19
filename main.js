const {app,BrowserWindow} = require('electron')

const path = require('path')

// const {autoUpdater} = require('electron-updater')

const log = require('electron-log')

log.transports.file.resolvePathFn = () => path.join("/home/gurii/electron/autoupdate_riya/last_autoupdate","logs/main.log");

log.info("Hello, log");

let win;

function createWindow() {
    win = new BrowserWindow({width:300,height:400})
    console.log(path.join(__dirname,'index.html'))
    win.loadFile(path.join(__dirname,'index.html'))
}

app.on('ready', () => {
    createWindow()
})