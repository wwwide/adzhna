import SC from 'styled-components'
import { CardFace } from './CardFace'
import { getColor } from './colors'

export const Box = SC.section<{ $width?: string }>`
  ${(p) => p.$width && `width: ${p.$width};`}
  border-width: 1px;
  border-style: solid;
  border-radius: ${(p) => p.theme.adzhna.components.card.borderRadius || p.theme.adzhna.borders.radius}px;
  border-color: ${(p) => p.theme.adzhna.borders.color};
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  box-shadow: ${(p) => p.theme.adzhna.components.card.shadow};
  overflow: hidden;
  color: ${(p) => p.theme.adzhna.colors.text};
  background: ${(p) => p.theme.adzhna.colors.bg};
`

export const Header = SC.div<{ $face: CardFace }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(p) => p.theme.adzhna.components.card.header.padding.top}rem;
  padding-bottom: ${(p) => p.theme.adzhna.components.card.header.padding.bottom}rem;
  padding-left: ${(p) => p.theme.adzhna.components.card.header.padding.left}rem;
  padding-right: ${(p) => p.theme.adzhna.components.card.header.padding.right}rem;
  background: ${(p) => getColor(p.$face, p.theme, 'fill')};
  color: ${(p) => getColor(p.$face, p.theme, 'text')};
`

export const Title = SC.span<{ $hasActions: boolean }>`
  flex-grow: 1;
  flex-shrink: 1;
  font-weight: bold;
  font-size: ${(p) => p.theme.adzhna.components.card.header.title.fontSize}rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: ${(p) => (p.$hasActions ? 2 : 0)}rem;
`

export const Actions = SC.span`
  flex:shrink: 0;
  flex-shrink: 0;
`

export const Content = SC.div`
  padding-top: ${(p) => p.theme.adzhna.components.card.content.padding.top}rem;
  padding-bottom: ${(p) => p.theme.adzhna.components.card.content.padding.bottom}rem;
  padding-left: ${(p) => p.theme.adzhna.components.card.content.padding.left}rem;
  padding-right: ${(p) => p.theme.adzhna.components.card.content.padding.right}rem;
  flex: 1;
  overflow-y: auto;
`

export const Footer = SC.div`
  padding-top: ${(p) => p.theme.adzhna.components.card.footer.padding.top}rem;
  padding-bottom: ${(p) => p.theme.adzhna.components.card.footer.padding.bottom}rem;
  padding-left: ${(p) => p.theme.adzhna.components.card.footer.padding.left}rem;
  padding-right: ${(p) => p.theme.adzhna.components.card.footer.padding.right}rem;
  font-size: ${(p) => p.theme.adzhna.components.card.footer.fontSize}rem;
`
