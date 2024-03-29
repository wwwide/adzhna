import SC from 'styled-components'

export const Box = SC.div<{ $maxHeight: number; $visible: boolean }>`
  visibility: ${(p) => (p.$visible ? 'visible' : 'hidden')};
  position: fixed;
  box-shadow: ${(p) => p.theme.adzhna.components.select.dropDown.shadow};
  border-radius: ${(p) => p.theme.adzhna.components.select.borderRadius}px;
  max-height: ${(p) => p.$maxHeight}px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  z-index: 10002;
  background: ${(p) => p.theme.adzhna.colors.bg};
  color: ${(p) => p.theme.adzhna.colors.text};
`
