import SC from 'styled-components'

export const Box = SC.section<{ $maxWidth?: string }>`
  max-width: ${(p) => p.$maxWidth};
  border-width: 1px;
  border-style: solid;
  border-radius: ${(p) => p.theme.components.card.borderRadius || p.theme.borders.radius}px;
  border-color: ${(p) => p.theme.borders.color};
  font-size: ${(p) => p.theme.fonts.size}rem;
  font-family: ${(p) => p.theme.fonts.family};
  box-shadow: ${(p) => p.theme.components.card.shadow};
`

export const Header = SC.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(p) => p.theme.components.card.header.padding.y}rem ${(p) => p.theme.components.card.header.padding.x}rem;
`

export const Title = SC.span`
  flex-grow: 1;
  flex-shrink: 1;
  font-weight: bold;
  font-size: ${(p) => p.theme.components.card.header.title.fontSize}rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Actions = SC.span`
  flex:shrink: 0;
  flex-shrink: 0;
`

export const Content = SC.div`
  padding: ${(p) => p.theme.components.card.content.padding.y}rem ${(p) =>
  p.theme.components.card.content.padding.x}rem;
`
