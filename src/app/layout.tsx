import { ReactNode } from 'react';
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Screen Resolution',
  description: 'Next.js App with styled-components theme',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
