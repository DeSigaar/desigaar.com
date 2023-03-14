import styled from "styled-components";
import { device } from "@/styles";

export const Wrapper = styled.div`
	display: grid;
	align-items: center;
	width: 100%;
	grid-template-columns: repeat(1, minmax(10px, 1fr));
	gap: 2.5rem;
	margin-inline-start: auto;
	margin-inline-end: auto;

	@media ${device.tablet} {
		width: 80%;
	}
	@media ${device.laptop} {
		grid-template-columns: repeat(2, minmax(10px, 1fr));
	}
	@media ${device.desktop} {
		gap: 8rem;
	}
`;

export const Label = styled.small`
	display: block;
	text-align: left;
	font-family: ${({ theme }) => theme.fonts.mono};
	margin-block-end: 0.5rem;
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 600;
	letter-spacing: 0.025em;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.gray.DEFAULT};
`;

export const Heading = styled.h1`
	display: block;
	font-family: ${({ theme }) => theme.fonts.serif};
	margin-block-end: 1rem;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 800;
	line-height: 1.25;
	letter-spacing: -0.025em;
	text-align: left;
	color: ${({ theme }) => theme.colors.gray[900]};

	@media ${device.tablet} {
		font-size: 2.25rem;
		line-height: 2.5rem;
	}
`;

export const Paragraph = styled.p`
	display: block;
	font-family: ${({ theme }) => theme.fonts.sans};
	margin-block-end: 1.25rem;
	font-size: 1rem;
	line-height: 1.5rem;
	text-align: left;
	color: ${({ theme }) => theme.colors.gray[800]};

	@media ${device.tablet} {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
`;

export const Image = styled.div`
	width: 100%;
	height: 100%;
	padding-block-start: 12rem;
	padding-block-end: 12rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.gray[200]};
	background-image: url("https://media.giphy.com/media/Fs0vJPEU1l6sU/giphy.gif");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
