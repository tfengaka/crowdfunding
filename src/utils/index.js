export function classNames(...args) {
  return args
    .reduce((acc, arg) => {
      if (typeof arg === 'string') {
        return acc.concat(arg.split(' '));
      }
      return acc.concat(Object.values(arg));
    }, [])
    .join(' ');
}
