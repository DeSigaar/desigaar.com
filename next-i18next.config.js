const path = require('path');

module.exports = {
  defaultNS: 'common',
  i18n: {
    localeDetection: true,
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/shared-assets/locales'),
};
