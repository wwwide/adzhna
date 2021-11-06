import { ButtonTheme } from '../components/Button'
import { CardTheme } from '../components/Card'
import { InputTheme } from '../components/Input'

export type Theme = {
  colors: {
    // Primary color
    primary: {
      // Background
      fill: {
        normal: string
        hover: string
        active: string
      }
      // Foreground
      text: {
        normal: string
        hover: string
        active: string
      }
    }
    // Secondary color
    secondary: {
      // Background
      fill: {
        normal: string
        hover: string
        active: string
      }
      // Foreground
      text: {
        normal: string
        hover: string
        active: string
      }
    }
    // Main text color
    text: string
    // Secondary text color
    textSecondary: string
    // Success colors
    success: {
      // Background
      fill: {
        normal: string
        hover: string
        active: string
      }
      // Foreground
      text: {
        normal: string
        hover: string
        active: string
      }
    }
    // Warning colors
    warning: {
      // Background
      fill: {
        normal: string
        hover: string
        active: string
      }
      // Foreground
      text: {
        normal: string
        hover: string
        active: string
      }
    }
    // Danger colors
    danger: {
      // Background
      fill: {
        normal: string
        hover: string
        active: string
      }
      // Foreground
      text: {
        normal: string
        hover: string
        active: string
      }
    }
    // Light for dark backgrounds
    light: {
      // Background
      fill: {
        normal: string
        hover: string
        active: string
      }
      // Foreground
      text: {
        normal: string
        hover: string
        active: string
      }
    }
    // Disabled state colors
    disabled: {
      // Background
      fill: string
      // Foreground
      text: string
    }
    // Error colors
    error: {
      // Background
      fill: string
      // Foreground
      text: string
    }
    link: {
      // Background
      fill: {
        normal: string
        hover: string
        active: string
      }
      // Foreground
      text: {
        normal: string
        hover: string
        active: string
      }
    }
  }
  // Font settings
  fonts: {
    // Family
    family: string
    // Base font size in "rem"
    size: number
  }
  // Base border settings
  borders: {
    // Border radius in "px"
    radius: number
    // Border color
    color: string
  }
  // Layout grid parameters
  grid: {
    // Base step size in "rem"
    step: number
  }
  base: {
    outline: {
      width: number
      style: string
      color: string
    }
  }
  // Component specific parameters
  components: {
    button: ButtonTheme
    card: CardTheme
    input: InputTheme
  }
}
