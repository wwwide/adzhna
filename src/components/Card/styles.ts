import SC from 'styled-components'
import { CardFace } from './CardFace'
import { getColor } from './colors'

export const Box = SC.section<{ $maxWidth?: string }>`
  max-width: ${(p) => p.$maxWidth};
  border-width: 1px;
  border-style: solid;
  border-radius: ${(p) => p.theme.components.card.borderRadius || p.theme.borders.radius}px;
  border-color: ${(p) => p.theme.borders.color};
  font-size: ${(p) => p.theme.fonts.size}rem;
  font-family: ${(p) => p.theme.fonts.family};
  box-shadow: ${(p) => p.theme.components.card.shadow};
  overflow: hidden;
`

export const Header = SC.div<{ $face: CardFace }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(p) => p.theme.components.card.header.padding.top}rem;
  padding-bottom: ${(p) => p.theme.components.card.header.padding.bottom}rem;
  padding-left: ${(p) => p.theme.components.card.header.padding.left}rem;
  padding-right: ${(p) => p.theme.components.card.header.padding.right}rem;
  background: ${(p) => getColor(p.$face, p.theme, 'fill')};
  color: ${(p) => getColor(p.$face, p.theme, 'text')};
`

export const Title = SC.span<{ $hasActions: boolean }>`
  flex-grow: 1;
  flex-shrink: 1;
  font-weight: bold;
  font-size: ${(p) => p.theme.components.card.header.title.fontSize}rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: ${p => p.$hasActions ? p.theme.grid.step * 2 : 0}rem;
`

export const Actions = SC.span`
  flex:shrink: 0;
  flex-shrink: 0;
`

export const Content = SC.div`
  padding-top: ${(p) => p.theme.components.card.content.padding.top}rem;
  padding-bottom: ${(p) => p.theme.components.card.content.padding.bottom}rem;
  padding-left: ${(p) => p.theme.components.card.content.padding.left}rem;
  padding-right: ${(p) => p.theme.components.card.content.padding.right}rem;
`

export const Footer = SC.div`
  padding-top: ${(p) => p.theme.components.card.footer.padding.top}rem;
  padding-bottom: ${(p) => p.theme.components.card.footer.padding.bottom}rem;
  padding-left: ${(p) => p.theme.components.card.footer.padding.left}rem;
  padding-right: ${(p) => p.theme.components.card.footer.padding.right}rem;
  font-size: ${(p) => p.theme.components.card.footer.fontSize}rem;
`
