/* eslint-disable  @typescript-eslint/no-explicit-any */
import { app, BrowserWindow, ipcMain, IpcMainEvent, IpcMainInvokeEvent, session } from 'electron'

export interface Is {
  dev: boolean
}

export interface Platform {
  isWindows: boolean
  isMacOS: boolean
  isLinux: boolean
}

export const platform: Platform = {
  isWindows: process.platform === 'win32',
  isMacOS: process.platform === 'darwin',
  isLinux: process.platform === 'linux',
}

export const is: Is = {
  dev: !app.isPackaged,
}

export interface ElectronApp {
  /**
   * Changes the Application User Model ID to id.
   *
   * The `id` is used only when the applcation is packaged. otherwise use the
   * `process.execPath` value as id.
   *
   * see https://www.electronjs.org/docs/latest/tutorial/notifications#windows
   * @platform — win32
   */
  setAppUserModelId: (id: string) => void
  /**
   * Whether the call succeeded.
   *
   * Set the app open at login or not.
   *
   *  **Note:** `false` always on Linux.
   * @platform — darwin,win32
   */
  setAutoLaunch: (auto: boolean) => boolean
  /**
   * Skip proxy for Electron app.
   */
  skipProxy: () => Promise<void>
}

export const electronApp: ElectronApp = {
  setAppUserModelId(id: string): void {
    if (platform.isWindows) app.setAppUserModelId(is.dev ? process.execPath : id)
  },
  setAutoLaunch(auto: boolean): boolean {
    if (platform.isLinux) return false
    const isOpenAtLogin = (): boolean => {
      return app.getLoginItemSettings().openAtLogin
    }
    if (isOpenAtLogin() !== auto) {
      app.setLoginItemSettings({
        openAtLogin: auto,
        path: process.execPath,
      })
      return isOpenAtLogin() === auto
    } else {
      return true
    }
  },
  skipProxy(): Promise<void> {
    return session.defaultSession.setProxy({ mode: 'direct' })
  },
}

export interface IpcHelper {
  // Docs: https://electronjs.org/docs/api/ipc-main

  /**
   * Adds a handler for an `invoke`able IPC. This handler will be called whenever a
   * renderer calls `ipcRenderer.invoke(channel, ...args)`.
   *
   * If `listener` returns a Promise, the eventual result of the promise will be
   * returned as a reply to the remote caller. Otherwise, the return value of the
   * listener will be used as the value of the reply.
   *
   * The `event` that is passed as the first argument to the handler is the same as
   * that passed to a regular event listener. It includes information about which
   * WebContents is the source of the invoke request.
   *
   * Errors thrown through `handle` in the main process are not transparent as they
   * are serialized and only the `message` property from the original error is
   * provided to the renderer process. Please refer to #24427 for details.
   */
  handle(
    channel: string,
    listener: (event: IpcMainInvokeEvent, ...args: any[]) => Promise<void> | any,
  ): void
  /**
   * Listens to `channel`, when a new message arrives `listener` would be called with
   * `listener(event, args...)`.
   */
  on(channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void): this
  /**
   * Remove all register ipc listeners.
   */
  removeAllListeners(): this
  /**
   * Remove all register ipc handlers.
   */
  removeAllHandlers(): void
  /**
   * Remove ipc listeners.
   */
  removeListeners(channels: string[]): this
  /**
   * Remove ipc handlers.
   */
  removeHandlers(channels: string[]): void
}

let listeners: string[] = []
let handlers: string[] = []

export const ipcHelper: IpcHelper = {
  handle(channel, listener) {
    handlers.push(channel)
    ipcMain.handle(channel, listener)
  },
  on(channel, listener) {
    listeners.push(channel)
    ipcMain.on(channel, listener)
    return this
  },
  removeAllListeners() {
    listeners.forEach(c => ipcMain.removeAllListeners(c))
    listeners = []
    return this
  },
  removeAllHandlers() {
    handlers.forEach(c => ipcMain.removeHandler(c))
    handlers = []
  },
  removeListeners(channels) {
    channels.forEach(c => ipcMain.removeAllListeners(c))
    return this
  },
  removeHandlers(channels) {
    channels.forEach(c => ipcMain.removeHandler(c))
  },
}

export type shortcutOptions = {
  /**
   * Use `ESC` key to close window, default `false`.
   */
  escToCloseWindow: boolean
  /**
   * Zoom in (`Minus + CommandOrControl`) or zoom out(`Equal + Shift + CommandOrControl`), default `false`.
   */
  zoom: boolean
}

export interface Optimizer {
  /**
   * Default open or close DevTools by `F12` in development and
   * ignore `CommandOrControl + R` in production.
   *
   * Use `shortcutOptions` to control more shortcuts.
   */
  watchWindowShortcuts: (window: BrowserWindow, shortcutOptions?: shortcutOptions) => void
  /**
   * If use a frameless window which hide the system's native window controls,
   * we may need to create custom window controls in HTML.
   *
   * The frameless window ipc allow the renderer process to control the
   * browser window.
   *
   * The ipc channel named `win:invoke`.
   *
   * For Example:
   *
   * ```
   * ipcRenderer.send('win:invoke', 'show')
   * ipcRenderer.send('win:invoke', 'showInactive')
   * ipcRenderer.send('win:invoke', 'min')
   * ipcRenderer.send('win:invoke', 'max')
   * ipcRenderer.send('win:invoke', 'close')
   * ```
   */
  registerFramelessWindowIpc: () => void
}

export const optimizer: Optimizer = {
  watchWindowShortcuts(window, shortcutOptions?): void {
    if (!window) return
    const { webContents } = window
    const { escToCloseWindow = false, zoom = false } = shortcutOptions || {}
    webContents.on('before-input-event', (event, input) => {
      if (input.type === 'keyDown') {
        if (!is.dev) {
          // Ignore CommandOrControl + R
          if (input.key === 'r' && (input.control || input.meta)) event.preventDefault()
        } else {
          // Toggle devtool(F12)
          if (input.code === 'F12') {
            if (webContents.isDevToolsOpened()) {
              webContents.closeDevTools()
            } else {
              webContents.openDevTools({ mode: 'undocked' })
              console.log('Open dev tool...')
            }
          }
        }
        if (escToCloseWindow) {
          if (input.code === 'Escape' && input.key !== 'Process') {
            window.close()
            event.preventDefault()
          }
        }
        if (!zoom) {
          // Disable zoom in
          if (input.code === 'Minus' && (input.control || input.meta)) event.preventDefault()
          // Disable zoom out
          if (input.code === 'Equal' && input.shift && (input.control || input.meta))
            event.preventDefault()
        }
      }
    })
  },
  registerFramelessWindowIpc(): void {
    ipcMain.on('win:invoke', (event, action) => {
      const win = BrowserWindow.fromWebContents(event.sender)
      if (win) {
        if (action === 'show') {
          win.show()
        } else if (action === 'showInactive') {
          win.showInactive()
        } else if (action === 'min') {
          win.minimize()
        } else if (action === 'max') {
          const isMaximized = win.isMaximized()
          if (isMaximized) {
            win.unmaximize()
          } else {
            win.maximize()
          }
        } else if (action === 'close') {
          win.close()
        }
      }
    })
  },
}
