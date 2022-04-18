'use strict';
var method = require('../Method');
module.exports = require('../Resource').extend({
  path: 'merchants/',
  operations: ['create', 'list', 'retrieve', 'update'],
  registerMerchant: method({
    method: 'POST',
    path: '{merchantId}/carrier_accounts/register/new/',
    optPath: '{merchantId}/carrier_accounts/register/new/',
    urlParams: ['merchantId'],
  }),
});
