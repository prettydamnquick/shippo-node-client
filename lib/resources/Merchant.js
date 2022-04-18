'use strict';
var method = require('../Method');

module.exports = require('../Resource').extend({
  path: 'merchants/',
  operations: ['create', 'list', 'retrieve', 'update'],
  register: method({
    method: 'POST',
    path: '{id}/carrier_accounts/register/new/',
    urlParams: ['id'],
  }),
});
