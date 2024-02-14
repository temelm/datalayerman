import { isNonEmptyString } from '../utils.js';

/**
 * @todo: Write documentation.
 * @param {string} name
 * @param {boolean} [returnAsString]
 * @returns {HTMLElement|string}
 */
export function createIcon (name, returnAsString = false) {
  if (!isNonEmptyString(name)) {
    throw new Error('Icon requires a name.');
  }

  const domIcon = document.createElement('i');
  name.split(' ').forEach((className) => domIcon.classList.add(className));

  return (returnAsString === true) ? domIcon.outerHTML : domIcon;
}