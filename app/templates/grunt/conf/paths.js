'use strict';

module.exports = function(grunt) {
  var path = require('path');
  var paths = {};

  // absolute path to project directory
  paths.project = process.cwd();
  // ---
  // relative paths from project directory


  function joinPathAsUrl() {
    var args = Array.prototype.slice.call(arguments, this);
    var normalizedPath = path.join.apply(this, args).split(path.sep).join('/');
    return normalizedPath;
  }

  // where resources live
  paths.htdocs  = 'public';
  // input
  paths.src     = 'src';
  // output
  paths.dest    = joinPathAsUrl(paths.htdocs, 'assets');
  // temporary build directory
  paths.build   = 'build';
  // grunt files
  paths.grunt   = 'grunt';
  // grunt tasks
  paths.tasks   = 'grunt/tasks';
  // grunt config
  paths.config  = 'grunt/conf';

  // deployment base url
  paths.baseUrl = '/';

  paths.assets = {
    images: joinPathAsUrl(paths.dest, 'images'),
    styles: joinPathAsUrl(paths.dest, 'styles'),
    scripts: joinPathAsUrl(paths.dest, 'scripts'),
    webfonts: joinPathAsUrl(paths.dest, 'webfonts')
  };

  return paths;
};
