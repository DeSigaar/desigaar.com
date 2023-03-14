import styled from "styled-components";
import { device } from "@/styles";

export const Wrapper = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(1, minmax(10px, 1fr));
	grid-template-areas: "logo" "." "." ".";
	gap: 2rem;

	@media ${device.mobileL} {
		grid-template-columns: repeat(3, minmax(10px, 1fr));
		grid-template-areas: "logo logo logo" ". . .";
	}
	@media ${device.desktop} {
		gap: 8rem;
	}
`;

export const LogoContainer = styled.div`
	grid-area: logo;
`;

export const Logo = styled.div`
	width: 100%;
	height: 100%;
	padding-block-start: 5rem;
	padding-block-end: 5rem;
	background-image: url("/assets/vectors/DeSigaar-Sigaar.svg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	@media ${device.laptop} {
		padding-block-start: calc(4vw + 4vh);
		padding-block-end: calc(4vw + 4vh);
	}
`;

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.fonts.mono};
	font-weight: bold;
	font-size: 2.5rem;
	padding-block-start: 1rem;
	padding-block-end: 1rem;
	text-align: center;

	@media ${device.laptop} {
		font-size: calc(3vw + 3vh);
		padding-block-start: calc(1.5vw + 1.5vh);
		padding-block-end: calc(1.5vw + 1.5vh);
	}
`;

export const Paragraph = styled.p`
	max-width: 33rem;
	margin-inline-start: auto;
	margin-inline-end: auto;
	font-family: ${({ theme }) => theme.fonts.DEFAULT};
	font-size: 1rem;
	text-align: center;

	@media ${device.laptop} {
		font-size: calc(0.9vw + 0.9vh);
	}
`;

export const ButtonContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoButton = styled.a`
	position: relative;
	box-sizing: border-box;
	user-select: none;
	color: transparent;
	outline: none;
	font-size: 0px;
	border-radius: 0.25rem;
	transition-property: outline-color;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	will-change: outline-color;
	outline-style: solid;
	outline-width: 0.2rem;
	outline-offset: 0.5rem;
	outline-color: transparent;

	&:focus-visible {
		outline-color: ${({ theme }) => theme.colors.text};
	}

	> span {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
`;

export const Mynho = styled(LogoButton)`
	--logo-width: 685.88px;
	--logo-height: 152.73px;
	--size: 0.3;
	--width: calc(var(--logo-width) * var(--size));
	--height: calc(var(--logo-height) * var(--size));

	width: var(--width);
	height: var(--height);
	background-image: url("/assets/vectors/Mynho-logo.svg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const Maexal = styled(LogoButton)`
	--logo-width: 375px;
	--logo-height: 95px;
	--logo-interactive-jump: 3px;
	--size: 0.5;
	--width: calc(var(--logo-width) * var(--size));
	--height: calc(var(--logo-height) * var(--size));
	--jump: calc(var(--logo-interactive-jump) * var(--size));
	--pos-0: translate(calc(var(--jump) * -1), calc(var(--jump) * 1));
	--pos-1: translate(calc(var(--jump) * 1), calc(var(--jump) * -1));
	--pos-2: translate(calc(var(--jump) * 3), calc(var(--jump) * -3));

	width: var(--width);
	height: var(--height);
	z-index: 1;

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background-repeat: no-repeat;
		background-position: center;
		height: var(--height);
		width: var(--width);
		background-size: var(--width) var(--height);
	}

	&::before {
		background-image: url("/assets/vectors/Maexal-logo-outline-only-blue.svg");
		z-index: -2;
		transform: var(--pos-0);
	}

	&::after {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		will-change: transform;
		background-image: url("/assets/vectors/Maexal-logo-filled-only-blue.svg");
		z-index: -1;
		transform: var(--pos-1);
	}

	&:hover {
		&::after {
			transform: var(--pos-2);
		}
	}

	&:active,
	&:focus {
		&::after {
			transform: var(--pos-0);
		}
	}
`;

export const Bart = styled(LogoButton)`
	--logo-width: 1535.69px;
	--logo-height: 294.38px;
	--size: 0.15;
	--width: calc(var(--logo-width) * var(--size));
	--height: calc(var(--logo-height) * var(--size));

	width: var(--width);
	height: var(--height);
	background-image: url("/assets/vectors/Bart-logo.svg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;
