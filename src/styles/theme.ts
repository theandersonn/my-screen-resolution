export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: '#f5f5f5',
    text: '#333',
  },
} as const;

export type ThemeType = typeof theme;
