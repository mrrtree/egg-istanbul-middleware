'use strict';
const fs = require('fs');
const express = require('express');
const imHandle = require('./istanbul-middleware/handlers');

module.exports = app => {
  const rootPath = process.cwd();

  var opts = {
    suffix: process.pid
  };
  imHandle.hookLoader(rootPath, opts);

  const istanbulApp = express();
  istanbulApp.use('/coverage', imHandle.createHandler());
  istanbulApp.listen(5454);

  console.log('start istanbul middleware');
};
