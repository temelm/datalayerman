const dUtils = {}

/**
 * @returns {object}
 * 
 * @todo: Describe.
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

/**
 * @todo: Describe.
 */
dUtils.deactivateAllTabs = () => {
  const tabList = document.querySelectorAll('.tab-list li')
  tabList.forEach(tab => tab.classList.remove('active'))
}

/**
 * @param {string} id
 * 
 * @todo: Describe.
 */
dUtils.activateTab = id => {
  const tab = document.querySelector(`.tab-list li[data-id="${id}"]`)
  if (tab) {
    dUtils.deactivateAllTabs()
    tab.classList.add('active')
  }
}

/**
 * @todo: Describe.
 */
dUtils.handleTabClick = () => {
  const tabList = document.querySelector('.tab-list')
  tabList.addEventListener('click', event => {
    event.preventDefault()
    if (event.target?.dataset.id && !event.target.classList.contains('active')) {
      dUtils.activateTab(event.target.dataset.id)
    }
  })
}