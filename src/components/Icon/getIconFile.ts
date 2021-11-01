import { IconName } from './IconName'

const mapping = {
  [IconName.DeleteCircle]: require('!!raw-loader!./assets/delete-circle.svg'),
}

export const getIconFile = (name: IconName) => mapping[name]
