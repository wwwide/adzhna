import { ButtonTheme } from '../components/Button'
import { CardTheme } from '../components/Card'
import { DialogTheme } from '../components/Dialog'
import { InputTheme } from '../components/Input'
import { IconTheme } from '../components/Icon'
import { PaginationTheme } from '../components/Pagination'
import { CheckBoxTheme } from '../components/CheckBox'
import { SelectTheme } from '../components/Select'

export type Theme = {
  adzhna: {
    colors: {
      bg: string
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
      dialog: DialogTheme
      input: InputTheme
      pagination: PaginationTheme
      checkBox: CheckBoxTheme
      icon: IconTheme
      select: SelectTheme
    }
  }
}
