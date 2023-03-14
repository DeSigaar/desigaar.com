import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		box-sizing: border-box;
		display: block;
	}

	body {
		line-height: 1;
	}

	ol,
	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: ${({ theme }) => theme.fonts.DEFAULT};
	}

	html {
		font-family: ${({ theme }) => theme.fonts.DEFAULT};
		scroll-behavior: smooth;
	}

	body {
		font-family: ${({ theme }) => theme.fonts.DEFAULT};
		color: ${({ theme }) => theme.colors.gray[800]};
		background-color: ${({ theme }) => theme.colors.gray[100]};
		background: linear-gradient(225deg, ${({ theme }) => theme.colors.gray[0]} 5%, ${({ theme }) =>
	theme.colors.gray[200]} 95%) 0% 0% / 200% 200%;
		animation: gradientMove 30000ms ease-in-out alternate-reverse infinite;
		transition: color 150ms ease-in-out, background-color 150ms ease-in-out;

		@keyframes gradientMove {
			from { background-position: 0% 100%; }
			to { background-position: 100% 0%; }
		}
	}

	p {
		font-family: ${({ theme }) => theme.fonts.DEFAULT};
		line-height: 1.625;
	}

	a {
		outline: none;
		display: inline-flex;
		align-items: center;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: ${({ theme }) => theme.fonts.serif};
	}

	h1,
	h2 {
		font-weight: 900;
		font-size: 2.25rem;
		line-height: 2.5rem;
	}

	h3 {
		font-weight: 800;
		font-size: 1.875rem;
		line-height: 2.25rem;
	}

	h4 {
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 2rem;
	}

	h5 {
		font-weight: 600;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}

	h6 {
		font-weight: 500;
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
`;
