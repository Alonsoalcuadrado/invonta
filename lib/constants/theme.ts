/**
 * Theme configuration constants
 */
export const THEME = {
  colors: {
    primary: '#1C3E72',
    secondary: '#F97316',
    success: '#28C76F',
    warning: '#F97316',
    danger: '#EA5455',
    info: '#00CFE8',
    purple: '#7367F0',
  },
  status: {
    paid: {
      color: 'bg-brand-green/10 text-brand-green',
      textColor: 'text-brand-green',
      icon: '✓',
    },
    pending: {
      color: 'bg-brand-orange/10 text-brand-orange',
      textColor: 'text-brand-orange',
      icon: '⏱',
    },
    overdue: {
      color: 'bg-brand-red/10 text-brand-red',
      textColor: 'text-brand-red',
      icon: '!',
    },
  },
} as const; 