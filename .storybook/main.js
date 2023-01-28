const Path = require('path')

module.exports = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: (config) => {
    config.resolve.alias['hooks'] = Path.resolve(__dirname, '../src/hooks')
    config.resolve.alias['theme'] = Path.resolve(__dirname, '../src/theme')
    return config
  },
}
