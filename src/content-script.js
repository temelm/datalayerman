window.addEventListener('message', (event) => {
  const message = (event && event.data) ? event.data : null;

  if (!message || message.sender !== 'DATALAYERMAN') {
    return;
  }

  chrome.runtime.sendMessage(message);
});

const domScript = document.createElement('script');
domScript.src = chrome.runtime.getURL('./get-data-layers.js');
domScript.defer = true;
domScript.onload = () => {
  domScript.parentElement.removeChild(domScript);
};
document.head.appendChild(domScript);