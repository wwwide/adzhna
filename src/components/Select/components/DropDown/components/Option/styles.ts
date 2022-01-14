import SC, { css } from 'styled-components'

export const Box = SC.div`${css<{ $active?: boolean; $highlighted?: boolean }>`
  padding: ${(p) => p.theme.adzhna.components.select.dropDown.padding.y}rem
    ${(p) => p.theme.adzhna.components.select.dropDown.padding.x}rem;
  cursor: pointer;
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  font-weight: ${(p) => (p.$active ? 'bold' : 'normal')};
  background: ${(p) => {
    if (p.$active) {
      return p.theme.adzhna.colors.light.fill.active
    }
    if (p.$highlighted) {
      return p.theme.adzhna.colors.light.fill.normal
    }
    return 'transparent'
  }};

  &:hover {
    background: ${(p) => p.theme.adzhna.colors.light.fill.normal};
  }
`}`
