Package.describe({
  name: 'tuul:haikunator',
  version: '0.0.3',
  summary: 'Generate heroku-like names',
  git: 'git@github.com:tuulbox/haikunator-meteor.git',
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
