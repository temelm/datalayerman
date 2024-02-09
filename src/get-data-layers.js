function getGlobalVariable (variableName) {
  if (!window.hasOwnProperty(variableName)) {
    return null;
  }

  return window[variableName];
}

function getDataLayers () {
  const dataLayerNames = ['digitalData', 'mmoustik'];
  const data
    = dataLayerNames.map(name => JSON.stringify(getGlobalVariable(name)));
  window.postMessage({
    sender: 'DATALAYERMAN',
    data
  });
}

setInterval(getDataLayers, 2000);