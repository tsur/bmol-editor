'use strict';

module.exports = {

  core: {

    name: 'core',
    src: true,
    streams: [
      // Console
      {
        stream: process.stdout,
        level: 'debug'
      },
      // File
      {
        path: '/tmp/core.gs.dev.log',
        level: 'debug'
      }
    ]
  }

};