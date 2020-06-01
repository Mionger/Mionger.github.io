// Modules to control application life and create native browser window
// app代表整个application
const {app, BrowserWindow,Menu} = require('electron')
const path = require('path')

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'rm-uf6e211xfx783i58d8o.mysql.rds.aliyuncs.com',
    port:'3306',
    user: 'root',
    password: 'PMJGHZ10b',
    database: 'db'
});

connection.connect();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
// const Menu = electron.Menu
function createWindow () {
  // Create the browser window.
  // Menu.setApplicationMenu(null);
  mainWindow = new BrowserWindow({
    width: 960,
    height: 700,
    backgroundColor:'#e3f9fd',
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      //完整支持node
      nodeIntegration: true 
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./index.html');

  // 设置本地url
  // mainWindow.loadURL('https://127.0.0.1');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    
    logoutAdmin(function () { 
      logoutUser(function () {
          // connectRelease();
          
          // alert("退出成功，即将回到主页");
          // window.location.href = "./index.html";
        
        mainWindow = null;
      });
    });
    
  });
};

app.on('ready', () => {
  console.log("SYSTEM IS READY")
  createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (null == mainWindow)
    createWindow()
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin')
    app.quit()
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
app.commandLine.appendSwitch('ignore-certificate-errors');

// 管理员用户退出，更新管理员用户登录状态
function logoutAdmin(callback) { 
  var sql = 'SELECT aname FROM admin WHERE aonline=1';
  connection.query(sql, (err, data, fields) => {
      console.log(data);
      if (data.length > 0) { 
          const adminname = data[0].aname;
          var usql='UPDATE admin SET aonline=0 WHERE aname=?'
          connection.query(usql, [adminname]);
      }
      callback();
  });
};

// 用户退出，更新在线状态
function logoutUser(callback) { 
  var sql = 'SELECT uname FROM user WHERE uonline=1';
  connection.query(sql, (err, data, fields) => {
      if (data.length > 0) { 
          console.log(data);
          const username = data[0].uname;
          var usql='UPDATE user SET uonline=0 WHERE uname=?'
          connection.query(usql, [username]);
      }      
      callback();
  });
};
