import { IconName } from './IconName'

const mapping = {
  'check': require('!!raw-loader!./assets/check.svg'),
  'copy': require('!!raw-loader!./assets/copy.svg'),
  'cross': require('!!raw-loader!./assets/cross.svg'),
  'delete-circle': require('!!raw-loader!./assets/delete-circle.svg'),
  'left-arrow': require('!!raw-loader!./assets/left-arrow.svg'),
  'left-double-arrow': require('!!raw-loader!./assets/left-double-arrow.svg'),
  'phone': require('!!raw-loader!./assets/phone.svg'),
  'right-arrow': require('!!raw-loader!./assets/right-arrow.svg'),
  'right-double-arrow': require('!!raw-loader!./assets/right-double-arrow.svg'),
}

export const getIconFile = (name: IconName) => mapping[name]
