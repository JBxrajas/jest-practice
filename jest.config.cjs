module.exports = {
  testEnvironment: 'node',
  transform: {},
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/**/*.spec.js'
  ],
  testMatch: [
    '**/test/**/*.spec.js',
    '**/test/**/*.test.js'
  ]
};
