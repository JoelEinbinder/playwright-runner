const {createSuite} = require('describers');
const suite = createSuite(async () => {
  require('./all.js')
});
suite.tests().then(async tests => {
  tests.map(test => {
    console.log(test.fullName());
  });
});