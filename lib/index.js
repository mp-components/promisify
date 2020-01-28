const promisify = (func) => {
  if (typeof func !== 'function') {
    return;
  }
  return (args = {}) => {
    return new Promise((resolve, reject) => {
      func({
        ...args,
        success: resolve,
        fail: reject,
      });
    });
  };
};

export default promisify;
