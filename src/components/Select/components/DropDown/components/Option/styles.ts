import SC from 'styled-components'

export const Box = SC.div<{ $active?: boolean; $highlighted?: boolean }>`
  padding: ${(p) => p.theme.adzhna.components.select.dropDown.padding.y}rem
    ${(p) => p.theme.adzhna.components.select.dropDown.padding.x}rem;
  cursor: pointer;
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  font-weight: ${(p) => (p.$active ? 'bold' : 'normal')};
  background: ${(p) => {
    if (p.$active) {
      return 'rgba(127, 127, 127, 0.7)'
    }
    if (p.$highlighted) {
      return 'rgba(127, 127, 127, 0.8)'
    }
    return 'transparent'
  }};

  &:hover {
    background: rgba(127, 127, 127, 0.1);
  }
`
