module.exports = {
  server: {
    command: 'yarn storybook --ci',
    launchTimeout: 60000,
    port: 6006,
    debug: true,
  },
  browserContext: 'default',
}
