import SC, { css } from 'styled-components'
import { Button } from '../../../Button'

const boxCss = css`
  font-size: ${(p) => p.theme.adzhna.components.pagination.fontSize || p.theme.adzhna.fonts.size}rem;
  ${(p) =>
    p.theme.adzhna.components.pagination.regular.padding
      ? `padding: ${p.theme.adzhna.components.pagination.regular.padding?.y}rem ${p.theme.adzhna.components.pagination.regular.padding.x}rem;`
      : ''}
  background: none !important;
  border: none;
`

export const Box = SC(Button)`${boxCss}
`
