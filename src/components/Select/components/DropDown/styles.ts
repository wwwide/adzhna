import SC, { css } from 'styled-components'

export const Box = SC.div`${css<{ $maxHeight: number; $visible: boolean }>`
  visibility: ${(p) => (p.$visible ? 'visible' : 'hidden')};
  position: fixed;
  box-shadow: ${(p) => p.theme.adzhna.components.select.dropDown.shadow};
  border-radius: ${(p) => p.theme.adzhna.components.select.borderRadius}px;
  max-height: ${(p) => p.$maxHeight}px;
  overflow-x: hidden;
  overflow-y: auto;
`}`
