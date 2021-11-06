import { IconName } from './IconName'

const mapping = {
  [IconName.Copy]: require('!!raw-loader!./assets/copy.svg'),
  [IconName.Cross]: require('!!raw-loader!./assets/cross.svg'),
  [IconName.DeleteCircle]: require('!!raw-loader!./assets/delete-circle.svg'),
  [IconName.Phone]: require('!!raw-loader!./assets/phone.svg'),
}

export const getIconFile = (name: IconName) => mapping[name]
