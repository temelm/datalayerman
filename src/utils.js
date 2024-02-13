/**
 * Checks whether the specified value is a non-empty string.
 * @param {*} value
 * @returns {boolean}
 */
export function isNonEmptyString (value) {
  return typeof value === 'string' && value.length > 0;
}