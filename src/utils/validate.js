/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isPhone(phone) {
  var patrn = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/
  if (!patrn.exec(phone)) {
    return false
  }
  return true
}
