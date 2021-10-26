module.exports = {
  "roots": [
    "./"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testEnvironment": "jsdom",
  moduleNameMapper: {
    "^!!raw-loader!.*": "jest-raw-loader"
  },
  setupFilesAfterEnv: [
    './jest.setup.ts'
  ],
  "verbose": true,
  "preset": "jest-puppeteer-preset"
}
