const dOptions = {
  dataLayerNameList: [],
  domDataLayerNameList: document.querySelector('.data-layer-name-list'),
  domDataLayerNameInput: document.querySelector('#data-layer-name'),
  domAddDataLayerNameBtn: document.querySelector('#add-data-layer-name')
}

/**
 * @param {string} name
 */
dOptions.createDataLayerName = name => {
  const element = document.createElement('li')
  element.dataset.id = name
  element.innerHTML = `
    <span>${name}</span>
    <a href="#" class="iconbtn remove-data-layer-name" data-id="${name}" title="Remove">
      <i class="fas fa-trash-alt"></i>
    </a>
  `
  dOptions.domDataLayerNameList.append(element)
  const removeBtn = document.querySelector(`.remove-data-layer-name[data-id="${name}"]`)
  removeBtn.addEventListener('click', event => {
    event.preventDefault()
    dOptions.dataLayerNameList
      = dOptions.dataLayerNameList.filter(n => n !== event.target.dataset.id)
    const li = document.querySelector(`li[data-id="${name}"]`)
    li.parentElement.removeChild(li)
    chrome?.storage?.sync?.set({
      'DATA_LAYER_NAMES': dOptions.dataLayerNameList
    })
    if (!dOptions.dataLayerNameList.length) {
      dOptions.domDataLayerNameList.classList.add('empty') // 🐒 patch
    }
  })
}

/**
 * @param {string} name
 */
dOptions.addDataLayerName = name => {
  dOptions.dataLayerNameList.push(name)
  dOptions.createDataLayerName(name)
  dOptions.domDataLayerNameList.classList.remove('empty') // 🐒 patch
}

chrome?.storage?.sync?.get(['DATA_LAYER_NAMES'], result => {
  if (chrome?.runtime?.lastError) {
    console.warn('Error getting DATA_LAYER_NAMES')
  } else {
    result?.DATA_LAYER_NAMES.forEach(name => {
      dOptions.addDataLayerName(name)
    })
  }
})

/**
 * @TODO
 */
dOptions.handleAddDataLayerNameBtn = () => {
  const name = dOptions.domDataLayerNameInput.value
  if (name && !dOptions.dataLayerNameList.includes(name)) {
    dOptions.addDataLayerName(name)
    chrome?.storage?.sync?.set({
      'DATA_LAYER_NAMES': dOptions.dataLayerNameList
    })
    dOptions.domDataLayerNameInput.value = ''
  }
}

dOptions.domAddDataLayerNameBtn.addEventListener('click', dOptions.handleAddDataLayerNameBtn)
dOptions.domDataLayerNameInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    dOptions.handleAddDataLayerNameBtn()
  }
})