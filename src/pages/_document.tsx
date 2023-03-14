import Document, { Html, Head, Main, NextScript } from 'next/document';
import { isDevelopment } from '@notion-to-mail/utils';
import { DefaultSeo } from 'next-seo';

export const TITLE = 'Notion to Mail';
export const DESCRIPTION = 'Convert Notion pages to emails';
export const SEPARATOR = '–';

export let baseTitle = TITLE;
if (process.env.NEXT_PUBLIC_TYPE !== 'normal') {
  baseTitle += ` [${(process.env.NEXT_PUBLIC_TYPE || '').toUpperCase()}]`;
}
export const assetsFolder = `/shared-assets/${process.env.NEXT_PUBLIC_TYPE}`;
export const defaultTitleTemplate = `%s ${SEPARATOR} ${baseTitle}`;

export const defaultTitleProps = {
  titleTemplate: defaultTitleTemplate,
  defaultTitle: baseTitle,
};

export const themeColor =
  process.env.NEXT_PUBLIC_TYPE === 'dev'
    ? '#10b981'
    : process.env.NEXT_PUBLIC_TYPE === 'beta'
    ? '#ef4444'
    : '#069ccd';

class AppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <DefaultSeo
            {...defaultTitleProps}
            description={DESCRIPTION}
            openGraph={{
              url: process.env.NEXT_PUBLIC_URL,
              type: 'website',
              title: baseTitle,
              description: DESCRIPTION,
              images: [
                {
                  url: `${assetsFolder}/apple-chrome-512x512.png`,
                  alt: baseTitle,
                },
              ],
              site_name: baseTitle,
            }}
            twitter={{
              cardType: 'summary',
              handle: '@maexal_dev',
              site: 'https://maexal.dev',
            }}
          />

          <meta charSet="utf-8" />

          <meta
            name="keywords"
            content="notion,mail,notion mail,notion to mail"
          />
          <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} />

          <meta name="theme-color" content={themeColor} />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="apple-mobile-web-app-title" content={baseTitle} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta name="msapplication-navbutton-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content={themeColor} />
          <meta
            name="msapplication-TileImage"
            content={`${assetsFolder}/mstile-144x144.png`}
          />
          <meta
            name="msapplication-config"
            content={`${assetsFolder}/browserconfig.xml`}
          />

          <meta name="application-name" content={baseTitle} />
          <meta name="msapplication-tooltip" content={baseTitle} />
          <meta name="msapplication-starturl" content="/" />

          <meta name="msapplication-tap-highlight" content="no" />

          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />

          <meta name="screen-orientation" content="any" />

          <link
            href={`${assetsFolder}/favicon-16x16.png`}
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href={`${assetsFolder}/favicon-32x32.png`}
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href={`${assetsFolder}/favicon-48x48.png`}
            rel="icon"
            type="image/png"
            sizes="48x48"
          />
          <link
            href={`${assetsFolder}/favicon-194x194.png`}
            rel="icon"
            type="image/png"
            sizes="194x194"
          />

          <link
            href={`${assetsFolder}/apple-touch-icon.png`}
            rel="apple-touch-icon"
            type="image/png"
          />
          <link
            href={`${assetsFolder}/android-chrome-72x72.png`}
            rel="apple-touch-icon"
            type="image/png"
            sizes="72x72"
          />
          <link
            href={`${assetsFolder}/apple-touch-icon-76x76.png`}
            rel="apple-touch-icon"
            type="image/png"
            sizes="76x76"
          />
          <link
            href={`${assetsFolder}/apple-touch-icon-120x120.png`}
            rel="apple-touch-icon"
            type="image/png"
            sizes="120x120"
          />
          <link
            href={`${assetsFolder}/apple-touch-icon-152x152.png`}
            rel="apple-touch-icon"
            type="image/png"
            sizes="152x152"
          />
          <link
            href={`${assetsFolder}/apple-touch-icon-180x180.png`}
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
          />

          <link
            href={`${assetsFolder}/logo.svg`}
            rel="mask-icon"
            color="#ffffff"
          />

          <link
            href={`${assetsFolder}/android-chrome-192x192.png`}
            type="image/png"
            rel="icon"
            sizes="192x192"
          />

          <link
            href={`${assetsFolder}/favicon.ico`}
            rel="shortcut icon"
            type="image/x-icon"
          />

          <link rel="author" href="/shared-assets/humans.txt" />
          <meta httpEquiv="X-UA-Compatible" content="chrome=1, IE=edge" />
          <meta name="classification" content="Website" />
          <meta name="rating" content="General" />
          <meta name="revisit-after" content="7 days" />
          <meta httpEquiv="Expires" content="0" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Cache-Control" content="no-cache" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <link
            rel="alternate"
            hrefLang="en"
            href={process.env.NEXT_PUBLIC_URL}
          />
          <link
            rel="alternate"
            hrefLang="nl"
            href={`${process.env.NEXT_PUBLIC_URL}/nl`}
          />
          <meta name="author" content="Mæxal <hello@maexal.dev>" />
          <meta name="designer" content="Mæxal" />
          <meta name="owner" content="Mæxal" />

          {!isDevelopment && process.env.NEXT_PUBLIC_ANALYTICS && (
            <script
              async
              defer
              data-website-id={process.env.NEXT_PUBLIC_ANALYTICS}
              src="https://analytics.notion-to-mail.app/umami.js"></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
