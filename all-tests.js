/* 
 * Copyright 2018-2022 F5 Inc.
 * Licensed under the MIT license, see LICENSE.md for full text.
 */

context = require.context('./tests', true, /\.js$/);
context.keys().forEach(context);
module.exports = context;
