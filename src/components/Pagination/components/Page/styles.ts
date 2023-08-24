import SC from 'styled-components'
import { Button } from '../../../Button'

export const Box = SC(Button)<{ $active?: boolean }>`
  font-size: ${(p) =>
    p.theme.adzhna.components.pagination.fontSize ||
    p.theme.adzhna.fonts.size}rem;
  ${(p) =>
    p.$active && p.theme.adzhna.components.pagination.active.padding
      ? `padding: ${p.theme.adzhna.components.pagination.active.padding?.y}rem ${p.theme.adzhna.components.pagination.active.padding.x}rem;`
      : ''}
  ${(p) =>
    !p.$active && p.theme.adzhna.components.pagination.regular.padding
      ? `padding: ${p.theme.adzhna.components.pagination.regular.padding?.y}rem ${p.theme.adzhna.components.pagination.regular.padding.x}rem;`
      : ''}

  ${(p) =>
    p.$active && p.theme.adzhna.components.pagination.active.borderRadius
      ? `border-radius: ${p.theme.adzhna.components.pagination.active.borderRadius}px;`
      : ''}
  ${(p) =>
    !p.$active && p.theme.adzhna.components.pagination.regular.borderRadius
      ? `border-radius: ${p.theme.adzhna.components.pagination.regular.borderRadius}px;`
      : ''}
  margin: 0 ${(p) =>
    (p.theme.adzhna.components.pagination.itemsGap || 1) / 2}rem;

  &:hover {
    border-bottom: none;
  }
`
