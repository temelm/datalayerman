import { createHeader } from './components/header.js';

export const DEFAULT_STATE = {
  DATA_LAYER_NAMES: ['dataLayer', 'digitalData']
};

/**
 * Checks whether the specified value is a non-empty string.
 * @param {*} value
 * @returns {boolean}
 */
export function isNonEmptyString (value) {
  return (typeof value === 'string' && value.length > 0);
}

/**
 * @todo: Write documentation.
 * @param {string} [override]
 */
export function setColorScheme (override) {
  let colorScheme
    = (override === 'light' || override === 'dark') ? override : 'auto';
  if (colorScheme === 'auto') {
    if (matchMedia('(prefers-color-scheme: light)').matches) {
      colorScheme = 'light';
    }
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      colorScheme = 'dark';
    }
  }
  document.documentElement.dataset.colorScheme = colorScheme;
}

export function createTabs () {
  let dataLayerNames = DEFAULT_STATE.DATA_LAYER_NAMES;
  chrome.storage.sync.get('DATA_LAYER_NAMES').then(function (result) {
    if (result.DATA_LAYER_NAMES) {
      dataLayerNames = result.DATA_LAYER_NAMES;
      const domUl = document.createElement('ul');
      dataLayerNames.forEach(function () {});
    }
  });
}

/**
 * @todo: Write documentation.
 */
export function createMain () {
  const domMain = document.createElement('main');
  document.body.appendChild(domMain);
  createTabs();
}

/**
 * @todo: Write documentation.
 */
export function createUserInterface () {
  setColorScheme();
  createHeader();
  createMain();
}