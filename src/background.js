chrome.runtime.onInstalled.addListener(details => {
  console.log(details)

  const DEFAULT_OPTIONS = {
    dataLayerNames: ['digitalData', 'dataLayer']
  }

  chrome?.storage?.sync?.get(['DATA_LAYER_NAMES'], result => {
    if (chrome?.runtime?.lastError) {
      console.warn('Error getting DATA_LAYER_NAMES')
    } else {
      if (result?.DATA_LAYER_NAMES) {
        console.log(`DATA_LAYER_NAMES is set to ${result.DATA_LAYER_NAMES}`)
      } else {
        chrome?.storage?.sync?.set({
          'DATA_LAYER_NAMES': DEFAULT_OPTIONS.dataLayerNames
        }, () => {
          if (chrome?.runtime?.lastError) {
            console.warn('Error setting DATA_LAYER_NAMES')
          } else {
            console.log(`Set DATA_LAYER_NAMES to ${DEFAULT_OPTIONS.dataLayerNames}`)
          }
        })
      }
    }
  })
})