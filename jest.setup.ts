import { toMatchImageSnapshot } from 'jest-image-snapshot'

beforeAll(async () => {
  expect.extend({ toMatchImageSnapshot });
  jest.setTimeout(35000);
});
