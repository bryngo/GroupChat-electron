import { contextBridge, ipcRenderer } from 'electron';
import { IElectronAPI } from "./IElectronAPI"
import titlebarContext from './titlebarContext';


const electronAPI: IElectronAPI = {
  asyncPing: () => ipcRenderer.send("asyncPing"),
  syncPing: () => ipcRenderer.sendSync("syncPing"),
  handlePing: () => ipcRenderer.invoke("handlePing"),
  handlePingWithError: () => ipcRenderer.invoke("handlePingWithError"),
  joinRoom: () => ipcRenderer.send("joinRoom")
}


contextBridge.exposeInMainWorld('electronAPI', electronAPI)

contextBridge.exposeInMainWorld('electron_window', {
  titlebar: titlebarContext,
});


ipcRenderer.on('asyncPong', (event, args) => {
  console.log("asyncPong received");
  const asyncResponseElement = document.getElementById('asyncPingResponse');
  asyncResponseElement.textContent = args;
})