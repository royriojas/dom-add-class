module.exports = function () {
  return {
    'demo': {
      src: 'src/demo.js',
      dest: 'demo/dist/demo.js'
    },

    'tests-includes': {
      src: 'test-helpers/includes.js',
      dest: 'tests-dist/includes.js'
    },
    'tests': {
      options: {
        beforeTransforms: function ( b ) {
          var istanbul = require( 'browserify-babel-istanbul' );

          // or with some options...
          b.transform( istanbul( {
            // ignore these glob paths (the ones shown are the defaults)
            //ignore: ['**/node_modules/**', '**/bower_components/**', '**/test/**', '**/tests/**', '**/*.json'],
            ignore: [
              '**/specs/**'
            ],
          // by default, any paths you include in the ignore option are ignored
          // in addition to the defaults. set the defaultIgnore option to false
          // to only ignore the paths you specify.
          //defaultIgnore: true
          } ) );
        }
      },
      src: 'tests/all.js',
      dest: 'tests-dist/all.js'
    }
  };
};
