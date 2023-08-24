import SC from 'styled-components'

export const Box = SC.div<{ $centered?: boolean }>`
display: flex;
  justify-content: ${(p) => (p.$centered ? 'center' : 'flex-start')};
`
