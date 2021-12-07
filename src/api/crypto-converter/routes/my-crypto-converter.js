'use strict';

/**
 * my-crypto-converter router.
 */

 module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/my-crypto-converter/convert',
      handler: 'my-crypto-converter.convert',
    }
  ]
};
