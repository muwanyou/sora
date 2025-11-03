function isObject(obj: any): boolean {
  return Object.getPrototypeOf(obj) === Object.prototype
}
function isArray(obj: any): boolean {
  return Array.isArray(obj)
}
function transformKeys(obj: Record<string, any> | any[], fn: (key: string) => string): Record<string, any> | any[] {
  if (Object.getPrototypeOf(obj) === Object.prototype) {
    const temp = {}
    for (const key in obj) {
      const transformedKey = fn(key)
      const value = obj[key]
      if (value === undefined) {
        continue
      }
      if (Object.getPrototypeOf(value) === Object.prototype || Array.isArray(value)) {
        temp[transformedKey] = transformKeys(value, fn)
      }
      else {
        temp[transformedKey] = value
      }
    }
    return temp
  }
  else if (Array.isArray(obj)) {
    return obj.map((item: Record<string, any> | any[]) => transformKeys(item, fn))
  }
  return obj
}

export {
  isArray,
  isObject,
  transformKeys,
}
