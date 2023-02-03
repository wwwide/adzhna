import { IconName } from './IconName'

const mapping = {
  'arrow-down': require('./assets/arrow-down.svg'),
  bars: require('./assets/bars.svg'),
  'bars-left': require('./assets/bars-left.svg'),
  'bars-right': require('./assets/bars-right.svg'),
  bulb: require('./assets/bulb.svg'),
  calendar: require('./assets/calendar.svg'),
  camera: require('./assets/camera.svg'),
  chat: require('./assets/chat.svg'),
  check: require('./assets/check.svg'),
  client: require('./assets/client.svg'),
  comment: require('./assets/comment.svg'),
  copy: require('./assets/copy.svg'),
  cross: require('./assets/cross.svg'),
  'delete-circle': require('./assets/delete-circle.svg'),
  download: require('./assets/download.svg'),
  edit: require('./assets/edit.svg'),
  exclamation: require('./assets/exclamation.svg'),
  filter: require('./assets/filter.svg'),
  'flash-off': require('./assets/flash-off.svg'),
  'flash-on': require('./assets/flash-on.svg'),
  gallery: require('./assets/gallery.svg'),
  info: require('./assets/info.svg'),
  'left-arrow': require('./assets/left-arrow.svg'),
  'left-double-arrow': require('./assets/left-double-arrow.svg'),
  mail: require('./assets/mail.svg'),
  more: require('./assets/more.svg'),
  number: require('./assets/number.svg'),
  person: require('./assets/person.svg'),
  phone: require('./assets/phone.svg'),
  plus: require('./assets/plus.svg'),
  ruble: require('./assets/ruble.svg'),
  'right-arrow': require('./assets/right-arrow.svg'),
  'right-double-arrow': require('./assets/right-double-arrow.svg'),
  settings: require('./assets/settings.svg'),
  star: require('./assets/star.svg'),
  status: require('./assets/status.svg'),
  target: require('./assets/target.svg'),
  telegram: require('./assets/telegram.svg'),
  'trash-can': require('./assets/trash-can.svg'),
  url: require('./assets/url.svg'),
  viber: require('./assets/viber.svg'),
  whatsapp: require('./assets/whatsapp.svg'),
}

export const getIconFile = (name: IconName) => mapping[name]
