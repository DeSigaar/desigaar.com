/* eslint-disable @typescript-eslint/no-var-requires */
const nextBuildId = require("next-build-id");
const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
	withPWA({
		target: "serverless",
		reactStrictMode: true,
		trailingSlash: true,
		pwa: {
			dest: "public",
			disable: process.env.NODE_ENV === "development",
			register: true,
			scope: "/",
		},
		generateBuildId: () => nextBuildId({ dir: __dirname }),
		i18n: {
			locales: ["en", "nl"],
			defaultLocale: "en",
			domains: [
				{
					domain: "desigaar.com",
					defaultLocale: "en",
				},
			],
		},
	})
);
