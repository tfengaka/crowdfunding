export function classNames(...args) {
  return args
    .reduce((acc, arg) => {
      if (typeof arg === 'string') {
        return acc.concat(arg.split(' '));
      }
      if (typeof arg === 'object') {
        return acc.concat(Object.values(arg));
      }
      return acc;
    }, [])
    .join(' ');
}
