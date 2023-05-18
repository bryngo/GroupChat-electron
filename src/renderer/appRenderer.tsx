import React from 'react'
import { createRoot } from 'react-dom/client'
import WindowFrame from '@misc/window/components/WindowFrame'
import Application from '@components/Application'

// Say something
console.log('[ERWT] : Renderer execution started');

// const asyncPingButton = document.querySelector("#asyncPingButton");
// asyncPingButton.addEventListener('click', (e) => {
//   console.log("Async Ping Clicked");
//   window.electronAPI.asyncPing();
// });

// const syncPingButton = document.querySelector("#syncPingButton");
// syncPingButton.addEventListener('click', (e) => {
//   console.log("Sync Ping Clicked");
//   const response = window.electronAPI.syncPing();
//   console.log(response);
//   const responseElement = document.getElementById("syncPingResponse")
//   responseElement.textContent = response;
// });

// const handlePingButton = document.querySelector("#handlePingButton");
// handlePingButton.addEventListener('click', (e) => {
//   console.log("Handle Ping Clicked");
//   window.electronAPI.handlePing().then((result) => {
//     console.log(result);
//     const responseElement = document.getElementById("handlePingResponse")
//     responseElement.textContent = result;
//   });
// });

// const handlePingWithErrorButton = document.querySelector("#handlePingWithErrorButton");
// handlePingWithErrorButton.addEventListener('click', (e) => {
//   console.log("Handle Ping with Error Clicked");
//   window.electronAPI.handlePingWithError()
//     .then((result) => {
//       console.log("then");
//       console.log(result);
//       const responseElement = document.getElementById("handlePingWithErrorResponse")
//       responseElement.textContent = result;
//     })
//     .catch((err) => {
//       console.log("catch");
//       console.log(err);
//       const responseElement = document.getElementById("handlePingWithErrorResponse")
//       responseElement.textContent = err;
//     })
// })

// Application to Render
const app = (
  <WindowFrame title='ERWT Boilerplate' platform='windows'>
    <Application />
  </WindowFrame>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
