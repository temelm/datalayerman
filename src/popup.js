import './base.css';

const domDataLayers = document.createElement('div');
domDataLayers.id = 'data-layers';
document.body.appendChild(domDataLayers);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  domDataLayers.innerText = '';
  domDataLayers.innerText = JSON.stringify(message);
});