export type CardTheme = {
  content: {
    padding: {
      x: number
      y: number
    }
  }
  header: {
    padding: {
      x: number
      y: number
    }
    title: {
      fontSize: number
    }
  }
  borderRadius?: number
  shadow: string
}
