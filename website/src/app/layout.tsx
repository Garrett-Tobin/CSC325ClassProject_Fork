'use client'
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import AppTheme from '@/shared-theme/AppTheme';
import AppAppBar from '@/components/AppAppBar';
import Footer from '@/components/Footer';
import { Divider } from '@mui/material';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppTheme {...props}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline enableColorScheme />
            <AppAppBar />
            {props.children}
            <Divider />
            <Footer />
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
