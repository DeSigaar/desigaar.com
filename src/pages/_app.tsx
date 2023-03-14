import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import NextNprogress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import { isDevelopment } from '@notion-to-mail/utils';
import {
  theme,
  Chakra,
  ThemeSyncer,
  nextThemesConfig,
  Head,
} from '@notion-to-mail/ui';
import { themeColor } from '@/pages/_document';

import '@fontsource/inter';
import '@fontsource/inter/variable-full.css';
import '@fontsource/fira-code';
import '@fontsource/fira-code/variable.css';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

const publicPages: string[] = [];

const App = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { forcedTheme } = Component;
  const { cookies } = pageProps;

  const { push, pathname, locale } = useRouter();

  const getWebmanifestPath = (): string => {
    switch (locale) {
      case 'nl':
        return '/site-nl.webmanifest';
      case 'en':
      default:
        return '/site.webmanifest';
    }
  };

  const webmanifest = getWebmanifestPath();

  return (
    <>
      <Head>
        <>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <link rel="manifest" href={webmanifest} />
        </>
      </Head>

      <NextNprogress color={themeColor} height={4} showOnShallow={false} />

      <ThemeProvider
        {...nextThemesConfig}
        forcedTheme={forcedTheme || undefined}>
        <Chakra resetCSS theme={theme} cookies={cookies}>
          <ThemeSyncer>
            <ClerkProvider
              frontendApi={clerkFrontendApi}
              navigate={(to) => push(to)}>
              {publicPages.includes(pathname) ? (
                <Component {...pageProps} />
              ) : (
                <>
                  <SignedIn>
                    <Component {...pageProps} />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              )}
            </ClerkProvider>
          </ThemeSyncer>
        </Chakra>
      </ThemeProvider>
    </>
  );
};

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  if (isDevelopment && process.env.NEXT_PUBLIC_LOG_WEBVITALS) {
    console.info('Web Vitals', metric);
  }
};

export default appWithTranslation(App);
