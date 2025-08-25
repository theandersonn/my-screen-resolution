import { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

export function renderWithTheme(ui: ReactNode, options?: RenderOptions) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
}
