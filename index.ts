export function getPropertiesExcept<
  T extends Record<PropertyKey, unknown>,
  K extends keyof T
>(obj: T, ...properties: K[]): Omit<T, K> {
  return Object.keys(obj).reduce((omittedObj, key) => {
    if (properties.includes(key as K)) {
      return omittedObj;
    }
    const currentProperty = key as Exclude<keyof T, K>;
    omittedObj[currentProperty] = obj[currentProperty];
    return omittedObj;
  }, {} as Omit<T, K>);
}
