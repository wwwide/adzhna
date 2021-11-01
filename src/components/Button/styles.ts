import SC from 'styled-components'
import { Icon, IconPosition } from '../Icon'

export const ContentWithIcon = SC.span<{ $position?: IconPosition }>`
  display: flex;
  align-items: center;
  flex-direction: ${(p) =>
    p.$position === IconPosition.Right ? 'row-reverse' : 'row'};
`

export const WrappedIcon = SC(Icon)<{ position?: IconPosition }>`
  ${(p) =>
    p.position === IconPosition.Right
      ? `margin-left: ${p.theme.grid.step}rem;`
      : `margin-right: ${p.theme.grid.step}rem;`}
`
