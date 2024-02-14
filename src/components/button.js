import './button.css';
import { isNonEmptyString } from '../utils.js';
import { createIcon } from './icon.js';

/**
 * @todo: Write documentation.
 * @param {object} options
 * @returns {HTMLElement|string}
 */
export function createButton (options = {}) {
  const { label, icon, tooltip, id, disabled, onClick, returnAsString }
    = options;

  if (!isNonEmptyString(label) && !isNonEmptyString(icon)) {
    throw new Error('Button requires a label or an icon.');
  }
  if (!isNonEmptyString(label) && !isNonEmptyString(tooltip)) {
    throw new Error('Icon button requires a tooltip.');
  }
  if (typeof onClick === 'function' && returnAsString === true) {
    throw new Error('Button with onClick cannot be returned as string.');
  }

  const domButton = document.createElement('button');
  domButton.classList.add('button');
  if (!isNonEmptyString(label)) {
    domButton.classList.add('icon-button');
  }
  if (isNonEmptyString(id)) {
    domButton.id = id;
  }
  if (isNonEmptyString(tooltip)) {
    domButton.title = tooltip;
  }
  if (disabled === true) {
    domButton.disabled = true;
  }
  domButton.innerHTML = `
    ${icon ? createIcon(icon, true) : ''}
    ${label ? `<span>${label}</span>` : ''}
  `;
  if (typeof onClick === 'function') {
    domButton.addEventListener('click', onClick);
  }

  return (returnAsString === true) ? domButton.outerHTML : domButton;
}