import initStoryShots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getMatchOptions = (_: any) => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  }
}

/**
 * This call automatically runs puppeteer through all stories. It makes screenshot of each story
 * content and compares it against saved copies.
 */
initStoryShots({
  suite: 'Check storybook screenshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:4444',
    getMatchOptions: getMatchOptions as any,
  }),
})

/**
 * puppeteerTest function allows to run assertion right in stories files. As long as we
 * use test files, placed near by components being tested, we don't use this function,
 * but let's leave it here for possible future usages.
 *
 * Code example:
 * initStoryShots({ suite: 'Puppeteer story checks', test: puppeteerTest({ storybookUrl }) })
 */
