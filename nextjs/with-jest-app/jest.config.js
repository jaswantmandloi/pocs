module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    //'.+\\.(css|styl|less|sass|scss)$':
     // '<rootDir>/node_modules/jest-css-modules-transform'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}
