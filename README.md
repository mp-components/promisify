# @mp-components/promisify

[![npm](https://img.shields.io/npm/v/@mp-components/promisify?style=flat-square)](https://www.npmjs.com/package/@mp-components/promisify)
[![GitHub issues](https://img.shields.io/github/issues/mp-components/promisify?style=flat-square)](https://github.com/mp-components/promisify/issues)
[![License](https://img.shields.io/github/license/mp-components/promisify?style=flat-square)](https://github.com/mp-components/promisify/blob/master/LICENSE)

使微信小程序的 API Promise 化

## 使用

```js
import promisify from '@mp-components/promisify';

promisify(wx.getSystemInfo)().then(console.log);
```

## 协议

MIT License (c) 2020-preset [pengtikui](https://github.com/pengtikui)
