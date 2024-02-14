import { createHeader } from './components/header.js';

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

/**
 * @todo: Write documentation.
 */
export function createUserInterface () {
  setColorScheme();
  createHeader();
}