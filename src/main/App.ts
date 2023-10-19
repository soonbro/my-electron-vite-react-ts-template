import { app, shell, BrowserWindow, Tray, nativeImage, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is, platform } from './utils/electronUtils'
//import icon from '../../resources/icon.png'

const { productName } = require(!is.dev ? './app.json' : '../../electron-builder.json')

class AppContext {
  // is mac os
  //readonly IS_MAC = process.platform === 'darwin'

  // electron window
  window: BrowserWindow | null = null

  // resources directory
  readonly RESOURCES_PATH = is.dev
    ? join(process.resourcesPath, 'resources')
    : join(app.getAppPath(), 'resources')

  // native icon
  readonly ICON = nativeImage.createFromPath(
    `${this.RESOURCES_PATH}/icons/${platform.isMacOS ? 'logo@512.png' : 'logo@256.png'}`, //TODO: replace 256.ico
  )

  async bootstrap() {
    await this.initliazeElectron()
    //await this.autoload();
    await this.createWindow()
  }

  async initliazeElectron() {
    const gotTheLock = app.requestSingleInstanceLock()

    if (!gotTheLock) {
      app.quit()
      process.exit(0)
    }

    //app.setAsDefaultProtocolClient(this.PROTOCOL);

    app.on('activate', () => {
      this.createWindow()
    })

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
      if (!platform.isMacOS) {
        app.quit()
      }
      this.window = null
    })
    /*
    app.on('window-all-closed', () => {
      this.window = null
    })
    */

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    await app.whenReady().then(() => {
      // Set app user model id for windows
      electronApp.setAppUserModelId('com.soonbro')

      // Default open or close DevTools by F12 in development
      // and ignore CommandOrControl + R in production.
      app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window)
      })

      this.createWindow()

      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) this.createWindow()
      })
    })

    await this.createTray()
  }

  // Create the browser window.
  async createWindow() {
    if (this.window) {
      if (this.window.isMinimized()) this.window.restore()
      this.window.focus()
      return
    }

    // Create the browser window.
    this.window = new BrowserWindow({
      width: 900,
      height: 670,
      show: false,
      autoHideMenuBar: true,
      ...(platform.isLinux ? {} : {}),
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false,
      },
    })

    this.window.on('ready-to-show', () => {
      this.window?.show()
    })

    this.window.webContents.setWindowOpenHandler(details => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      this.window.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      this.window.loadFile(join(__dirname, '../renderer/index.html'))
    }
  }

  async createTray() {
    let tray = new Tray(this.ICON.resize({ width: 20, height: 20 }))

    const contextMenu = Menu.buildFromTemplate([
      { label: 'App 열기', type: 'normal', click: () => this.createWindow() },
      { type: 'separator' },
      { label: 'Quit', role: 'quit', type: 'normal' },
    ])

    tray.on('double-click', () => this.createWindow())
    tray.setToolTip(productName)
    tray.setContextMenu(contextMenu)
  }
}

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and import them here.

export default AppContext
