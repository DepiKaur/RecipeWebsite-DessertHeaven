module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use babel-jest for JS/JSX/TS/TSX files
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/mocks/fileMock.js',
  },
  extensionsToTreatAsEsm: ['.jsx'], // Ensure Jest treats these as ESM
};
