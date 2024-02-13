chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'update') {
    console.log('Datalayerman updated.');
  }
});