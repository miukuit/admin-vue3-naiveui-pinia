const toString = Object.prototype.toString

export function isNull(val) {
  return val === null
}

export function isUndef(val) {
  return typeof val === 'undefined'
}

export function isNullOrUndef(val) {
  return isNull(val) || isUndef(val)
}