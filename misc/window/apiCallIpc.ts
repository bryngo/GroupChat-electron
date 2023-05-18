import { BrowserWindow, ipcMain, shell } from 'electron';

let names: string[] = []


export const registerApiCallsIpc = (mainWindow: BrowserWindow) => {
    ipcMain.handle('handlePing', (event, args) => {
        console.log('handlePing received');
        return 'handlePong';
    });
    ipcMain.on('asyncPing', (event, args) => {
        console.log("asyncPing received");
        event.sender.send('asyncPong', 'asyncPong');
    });

    ipcMain.on('syncPing', (event, args) => {
        console.log('syncPing received');
        event.returnValue = 'syncPong';
    });

    ipcMain.handle('handlePingWithError', () => {
        throw new Error("Something Went Wrong");
    });

    ipcMain.on('joinRoom', (event, args) => {
        names.push(args)
        event.sender.send('joinRoomResp', names)
    })
}
