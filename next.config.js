const { i18n } = require("./next-i18next.config");
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withImages = require("next-images");
const withPWA = require("next-pwa");

const disableSourceMaps = process.env.NEXT_DISABLE_SOURCEMAPS === "true";
if (disableSourceMaps) {
  console.info(
    "Sourcemaps generation have been disabled through NEXT_DISABLE_SOURCEMAPS"
  );
}

const config = withBundleAnalyzer(
  withPWA(
    withImages({
      target: process.env.NEXTJS_BUILD_TARGET || "server",
      reactStrictMode: true,
      webpack5: true,
      productionBrowserSourceMaps: !disableSourceMaps,
      optimizeFonts: true,

      i18n,

      pwa: {
        dest: "public",
        disable: process.env.NODE_ENV === "development",
        register: true,
        sw: "/sw.js",
        dynamicStartUrl: true,
        reloadOnOnline: true,
      },

      images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        disableStaticImages: false,
        domains: [],
      },

      eslint: {
        ignoreDuringBuilds: process.env.NEXTJS_IGNORE_ESLINT === "1" || false,
        dirs: ["src"],
      },

      webpack: (config, { defaultLoaders }) => {
        const resolvedBaseUrl = path.resolve(config.context, "../../");
        config.module.rules = [
          ...config.module.rules,
          {
            test: /\.(tsx|ts|js|jsx|json)$/,
            include: [resolvedBaseUrl],
            use: defaultLoaders.babel,
            exclude: (excludePath) => /node_modules/.test(excludePath),
          },
        ];

        return config;
      },
    })
  )
);

module.exports = config;
