module.exports = {
  server: {
    command: 'yarn storybook --ci',
    launchTimeout: 60000,
    port: 4444,
    debug: true,
  },
  browserContext: 'default',
}
