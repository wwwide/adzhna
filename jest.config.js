module.exports = {
  roots: ['./'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.svg$': 'jest-raw-loader',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!storybook-addon-performance)'],
  verbose: true,
  preset: 'jest-puppeteer-preset',
}
