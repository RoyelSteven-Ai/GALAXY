import { ThemeProvider } from '@RoyelSteven-Ai/ui';
import type { AppProps } from 'next/app';

import './global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themeMode={'auto'}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
