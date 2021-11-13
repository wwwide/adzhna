import { Theme } from '../theme'

export const DefaultTheme: Theme = {
  adzhna: {
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
      light: {
        fill: {
          normal: '#f9f9f9',
          hover: '#ffffff',
          active: '#f0f0f0',
        },
        text: {
          normal: '#444',
          hover: '#666',
          active: '#000',
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
            left: 1.3,
            right: 1.3,
            top: 0.8,
            bottom: 0.8,
          },
        },
        header: {
          padding: {
            left: 1.3,
            right: 1.3,
            top: 0.8,
            bottom: 0.8,
          },
          title: {
            fontSize: 1.2,
          },
        },
        footer: {
          padding: {
            left: 1.3,
            right: 1.3,
            top: 0,
            bottom: 0.8,
          },
          fontSize: 0.8,
        },
        shadow: '0 0 20px rgba(0, 0, 0, .1)',
      },
      dialog: {
        shadow: '1px 1px 5px rgba(0, 0, 0, .25)',
        borderRadius: 4,
        overlay: 'rgba(0, 0, 0, .7)',
      },
      input: {
        borderRadius: 4,
        padding: {
          x: 0.6,
          y: 0.6,
        },
      },
      pagination: {
        regular: {
          padding: {
            x: 0.6,
            y: 0.3,
          },
          borderRadius: 4,
        },
        active: {
          padding: {
            x: 0.6,
            y: 0.3,
          },
          borderRadius: 4,
        },
        fontSize: 0.8,
        itemsGap: 0.5,
      },
      checkBox: {
        width: 1.3,
        height: 1.3,
        borderRadius: 4,
      },
      icon: {
        sizes: {
          XS: '.7rem',
          S: '.8rem',
          M: '1rem',
          L: '1.5rem',
          XL: '2rem',
        }
      }
    },
  },
}
