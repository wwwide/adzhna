import { IconName } from './IconName'

const mapping = {
  'arrow-down': require('!!raw-loader!./assets/arrow-down.svg'),
  bars: require('!!raw-loader!./assets/bars.svg'),
  calendar: require('!!raw-loader!./assets/calendar.svg'),
  chat: require('!!raw-loader!./assets/chat.svg'),
  check: require('!!raw-loader!./assets/check.svg'),
  client: require('!!raw-loader!./assets/client.svg'),
  comment: require('!!raw-loader!./assets/comment.svg'),
  copy: require('!!raw-loader!./assets/copy.svg'),
  cross: require('!!raw-loader!./assets/cross.svg'),
  'delete-circle': require('!!raw-loader!./assets/delete-circle.svg'),
  download: require('!!raw-loader!./assets/download.svg'),
  exclamation: require('!!raw-loader!./assets/exclamation.svg'),
  info: require('!!raw-loader!./assets/info.svg'),
  'left-arrow': require('!!raw-loader!./assets/left-arrow.svg'),
  'left-double-arrow': require('!!raw-loader!./assets/left-double-arrow.svg'),
  number: require('!!raw-loader!./assets/number.svg'),
  person: require('!!raw-loader!./assets/person.svg'),
  phone: require('!!raw-loader!./assets/phone.svg'),
  ruble: require('!!raw-loader!./assets/ruble.svg'),
  'right-arrow': require('!!raw-loader!./assets/right-arrow.svg'),
  'right-double-arrow': require('!!raw-loader!./assets/right-double-arrow.svg'),
  settings: require('!!raw-loader!./assets/settings.svg'),
  star: require('!!raw-loader!./assets/star.svg'),
  status: require('!!raw-loader!./assets/status.svg'),
  url: require('!!raw-loader!./assets/url.svg'),
}

export const getIconFile = (name: IconName) => mapping[name]
