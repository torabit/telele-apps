export function isGrpcDefaultValue(value: unknown) {
  switch (typeof value) {
    case 'string':
      if (value === '') return true;
    case 'number':
      if (value === 0) return true;
    case 'object':
      return !Object.keys(value).length;
    default:
      return false;
  }
}
