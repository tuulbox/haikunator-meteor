Package.describe({
  name: 'tuul:haikunator',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Generate heroku-like names',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:tuulbox/haikunator-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('haikunator.js');
  api.export('haikunate');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tuul:haikunator');
  api.addFiles('haikunator-tests.js');
});
