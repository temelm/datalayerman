const dUtils = {}

/**
 * @returns {object}
 */
dUtils.createTabList = () => {
  const tabList = document.createElement('div')
  tabList.classList.add('tab-list')
  chrome?.storage?.sync?.get(['DATA_LAYER_NAMES'], result => {
    if (chrome?.runtime?.lastError) {
      console.warn('Error getting DATA_LAYER_NAMES')
    } else {
      tabList.innerHTML = result?.DATA_LAYER_NAMES.reduce((html, name) => {
        return html + `<li data-id="${name}">${name}</li>`
      }, '<ul>')
      tabList.innerHTML += '</ul>'
    }
  })
  return tabList
}