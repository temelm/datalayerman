chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'update') {
    console.log('Datalayerman updated.');
  }
});