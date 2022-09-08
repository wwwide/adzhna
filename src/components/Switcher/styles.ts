import styled from 'styled-components'
import { Button } from '../Button'

export const _Switcher = styled.div<{ $direction: 'horizontal' | 'vertical' }>`
  background: ${(p) => p.theme.adzhna.colors.bg};
  border-radius: ${(p) => p.theme.adzhna.borders.radius}px;
  color: ${(p) => p.theme.adzhna.colors.text};
  display: flex;
  flex-direction: ${(p) => (p.$direction === 'horizontal' ? 'row' : 'column')};
  gap: 1px;
  padding: 1px;
  margin: -1px;
  align-items: stretch;
`

export const _ItemButton = styled(Button)<{ $active: boolean }>`
  flex: 1;
  padding: ${(p) => p.theme.adzhna.components.button.padding.y}rem
    ${(p) => p.theme.adzhna.components.button.padding.x}rem;

  ${(p) => !p.$active && `border: 1px solid transparent !important;`}
`
