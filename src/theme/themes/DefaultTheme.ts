import { Theme } from '../theme'

export const DefaultTheme: Theme = {
  colors: {
    primary: {
      fill: {
        normal: '#4cbdce',
        hover: '#6fdfef',
        active: '#2c8492',
      },
      text: {
        normal: '#fff',
        hover: '#fff',
        active: '#fff',
      },
    },
    secondary: {
      fill: {
        normal: '#ad8ba0',
        hover: '#d9bbcd',
        active: '#87677b',
      },
      text: {
        normal: '#fff',
        hover: '#fff',
        active: '#fff',
      },
    },
    text: '#444',
    textSecondary: '#aaa',
    success: {
      fill: {
        normal: '#5dcb4e',
        hover: '#7aee6a',
        active: '#348e28',
      },
      text: {
        normal: '#fff',
        hover: '#fff',
        active: '#fff',
      },
    },
    warning: {
      fill: {
        normal: '#ee9519',
        hover: '#f1bb6f',
        active: '#b66604',
      },
      text: {
        normal: '#fff',
        hover: '#fff',
        active: '#fff',
      },
    },
    danger: {
      fill: {
        normal: '#cb2d2d',
        hover: '#f55e5e',
        active: '#a71919',
      },
      text: {
        normal: '#fff',
        hover: '#fff',
        active: '#fff',
      },
    },
    link: {
      fill: {
        normal: 'transparent',
        hover: 'transparent',
        active: 'transparent',
      },
      text: {
        normal: '#59a7e0',
        hover: '#68b5ee',
        active: '#458ec2',
      },
    },
    disabled: {
      fill: '#dbdbdb',
      text: '#a0a0a0',
    },
    error: {
      fill: '#ff7979',
      text: '#ff3c3c',
    },
  },
  fonts: {
    family:
      'haas, pragmatica, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    size: 1,
  },
  borders: {
    radius: 4,
    color: '#eee',
  },
  grid: {
    step: 4,
  },
  base: {
    outline: {
      width: 2,
      style: 'solid',
      color: '#8a8a8a',
    },
  },
  components: {
    button: {
      borderRadius: 4,
      padding: {
        x: 1.3,
        y: .6,
      },
      shadow: '1px 1px 5px rgba(0, 0, 0, .25)',
      fontSize: .9,
    },
  },
}
