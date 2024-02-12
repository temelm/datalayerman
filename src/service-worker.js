console.log('🐈 Hello from service-worker.js');

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'update') {
    console.log('🐈 Datalayerman updated.');
  }
});