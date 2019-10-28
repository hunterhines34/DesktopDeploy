var nw = require('nw.gui');
var fs = require('fs');
var path = require('path');

var clipboard = nw.Clipboard.get();
console.log(clipboard);