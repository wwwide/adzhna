import SC, { css } from 'styled-components'

const boxCss = css<{ $centered?: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.$centered ? 'center' : 'flex-start')};
`

export const Box = SC.div`${boxCss}`
