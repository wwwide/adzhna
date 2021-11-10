import { IconName } from './IconName'

const mapping = {
  [IconName.Check]: require('!!raw-loader!./assets/check.svg'),
  [IconName.Copy]: require('!!raw-loader!./assets/copy.svg'),
  [IconName.Cross]: require('!!raw-loader!./assets/cross.svg'),
  [IconName.DeleteCircle]: require('!!raw-loader!./assets/delete-circle.svg'),
  [IconName.LeftArrow]: require('!!raw-loader!./assets/left-arrow.svg'),
  [IconName.LeftDoubleArrow]: require('!!raw-loader!./assets/left-double-arrow.svg'),
  [IconName.Phone]: require('!!raw-loader!./assets/phone.svg'),
  [IconName.RightArrow]: require('!!raw-loader!./assets/right-arrow.svg'),
  [IconName.RightDoubleArrow]: require('!!raw-loader!./assets/right-double-arrow.svg'),
}

export const getIconFile = (name: IconName) => mapping[name]
