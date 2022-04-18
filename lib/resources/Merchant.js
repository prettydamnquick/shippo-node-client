'use strict';
var method = require('../Method');

module.exports = require('../Resource').extend({
  path: 'merchants/',
  operations: ['create', 'list', 'retrieve', 'update'],
  register_master_carrier_account: method({
    method: 'POST',
    path: '{merchantId}/carrier_accounts/register/new/',
    urlParams: ['merchantId'],
  }),
});
