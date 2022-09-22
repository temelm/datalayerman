// window.dataLayer = [{"0":"js","1":"2022-09-13T16:11:32.798Z","gtm.uniqueEventId":1},{"0":"set","1":"url_passthrough","2":false},{"0":"set","1":"ads_data_redaction","2":false},{"0":"consent","1":"default","2":{"ad_storage":"denied","analytics_storage":"denied","wait_for_update":0}},{"event":"gtm.dom","gtm.uniqueEventId":5},{"event":"gtm.load","gtm.uniqueEventId":6},{"0":"js","1":"2022-09-13T16:11:32.977Z"},{"0":"event","1":"page_view","2":{"send_to":"AW-1061692377","ecomm_pcat":"","ecomm_pageType":"home"}},{"0":"event","1":"conversion","2":{"allow_custom_scripts":true,"dc_custom_params":{},"send_to":"DC-9427595/arg0jt/hpg_a0+standard"}},{"0":"js","1":"2022-09-13T16:11:32.988Z"},{"0":"consent","1":"update","2":{"analytics_storage":"granted","ad_storage":"granted"}},{"0":"config","1":"UA-50023582-1","2":{"user_id":""}},{"0":"js","1":"2022-09-13T16:11:33.004Z"},{"0":"consent","1":"update","2":{"analytics_storage":"granted","ad_storage":"granted"}},{"0":"config","1":"DC-9427595"},{"0":"js","1":"2022-09-13T16:11:33.248Z"},{"0":"consent","1":"update","2":{"analytics_storage":"granted","ad_storage":"granted"}},{"0":"config","1":"AW-1061692377"}]
// window.digitalData = {"page":{"pageInfo":{"attributes":{"templateTitle":"home","sprintReference":"1.0"},"siteSection":"ar:home:","pageName":"ar:home:"},"attributes":{"channel":"uk:desktop","platform":null,"recommendations":undefined},"category":{"pageType":"home"}},"parallelRun":false,"trackVersion":2.0,"user":[{"profile":[{"profileInfo":{"profileID":""},"attributes":{"globalView":true,"loginStatus":"Non-Registered"}}]}],"currentTrackValue":"hp_initialLoad"}

// const mainContainer = document.querySelector('main .container')

// const dataLayerNames = ['digitalData', 'utag_data', 'dataLayer']

// renderjson.set_show_to_level('all')
// renderjson.set_icons('▸', '▾')

// dataLayerNames.forEach(name => {
//   if (!window[name]) {
//     return
//   }

//   const details = document.createElement('details')
//   details.open =  true
//   details.innerHTML = `
//     <summary>${name}</summary>
//   `
//   details.append(renderjson(window[name]))
//   mainContainer.appendChild(details)
// })

// document.querySelector('.options a').addEventListener('click', event => {
//   event.preventDefault()
//   chrome?.runtime?.openOptionsPage()
// })

const dPopup = {
  domOptionsBtn: document.querySelector('.options a'),
  domMainContainer: document.querySelector('main .container')
}

/* ---------------- Begin: Event Listeners ------------------------------------------------------ */

dPopup.domOptionsBtn.addEventListener('click', event => {
  event.preventDefault()
  chrome?.runtime?.openOptionsPage()
})

/* ---------------- End: Event Listeners -------------------------------------------------------- */

renderjson?.set_icons('▸', '▾')
renderjson?.set_show_to_level('all')

dPopup.domMainContainer.appendChild(dUtils.createTabList())