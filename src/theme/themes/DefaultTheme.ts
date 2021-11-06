import { Theme } from '../theme'

export const DefaultTheme: Theme = {
  colors: {
    primary: {
      fill: {
        normal: '#3D2F64',
        hover: '#5a478d',
        active: '#221632',
      },
      text: {
        normal: '#fff',
        hover: '#fff',
        active: '#f6cf76',
      },
    },
    secondary: {
      fill: {
        normal: '#F9BA2D',
        hover: '#f6cf76',
        active: '#E0A729',
      },
      text: {
        normal: '#000',
        hover: '#555',
        active: '#000',
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
    family: 'haas, pragmatica, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    size: 0.85,
  },
  borders: {
    radius: 4,
    color: '#e0e0e0',
  },
  grid: {
    step: 0.5,
  },
  base: {
    outline: {
      width: 1,
      style: 'solid',
      color: '#444',
    },
  },
  components: {
    button: {
      borderRadius: 4,
      padding: {
        x: 1.3,
        y: 0.6,
      },
      shadow: '1px 1px 5px rgba(0, 0, 0, .25)',
    },
    card: {
      borderRadius: 4,
      content: {
        padding: {
          x: 1.3,
          y: 0.8,
        },
      },
      header: {
        padding: {
          x: 1.3,
          y: 0.6,
        },
        title: {
          fontSize: 1.2,
        },
      },
      shadow: '0 0 20px rgba(0, 0, 0, .1)',
    },
    input: {
      borderRadius: 4,
      padding: {
        x: 0.6,
        y: 0.6,
      },
    },
  },
}
