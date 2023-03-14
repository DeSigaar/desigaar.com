/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import dynamic from "next/dynamic";
import NextDocument, { Html, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

const HeadDocument = dynamic(() => import("@/components/Head").then(module => module.HeadDocument) as any);

class Document extends NextDocument {
	static getInitialProps = async (context: DocumentContext): Promise<DocumentInitialProps> => {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = context.renderPage;
		const initialProps = await NextDocument.getInitialProps(context);

		try {
			if (process.env.NODE_ENV !== "production") return initialProps;

			context.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	};

	render(): JSX.Element {
		return (
			<Html>
				<HeadDocument />

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
