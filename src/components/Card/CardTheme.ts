export type CardTheme = {
  content: {
    padding: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
  header: {
    padding: {
      top: number
      bottom: number
      left: number
      right: number
    }
    title: {
      fontSize: number
    }
  }
  footer: {
    padding: {
      top: number
      bottom: number
      left: number
      right: number
    }
    fontSize: number
  }
  borderRadius?: number
  shadow: string
}
