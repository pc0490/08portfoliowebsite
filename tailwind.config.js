import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 1s ease-in',
        'slideIn': 'slideIn 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeInScale': 'fadeInScale 1.5s ease-out forwards',
        'gradient-xy': 'gradient-xy 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInScale: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95) translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      colors: {
        'custom-black': '#000000',
        dark: {
          DEFAULT: '#0B0B0B',
          'lighter': '#1A1A1A',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(249, 115, 22, 0.3)', // orange-500 with opacity
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#9CA3AF',
            a: {
              color: '#fff',
              '&:hover': {
                color: '#9CA3AF',
              },
            },
          },
        },
      },
      rotate: {
        'y-180': '180deg',
      },
      perspective: {
        'default': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [
    typography(),
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          'perspective': '1000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
      });
    },
  ],
}