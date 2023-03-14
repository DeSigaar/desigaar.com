import styled from "styled-components";
import type { StyledButtonProps } from "./types";

export const Link = styled.a`
	cursor: pointer;
	outline: none;
	border-radius: 0.25rem;
	text-decoration: underline;
`;

export const Button = styled.a<StyledButtonProps>`
	position: relative;
	display: inline-block;
	cursor: pointer;
	appearance: none;
	outline: none;
	user-select: none;
	text-decoration: none;
	border: none;
	border-radius: 0.125rem;
	width: auto;
	text-align: center;
	color: #ffffff;
	background: ${({ theme }) => theme.colors.primary.DEFAULT};
	padding-block-start: 0.5rem;
	padding-block-end: 0.5rem;
	padding-inline-start: 0.75rem;
	padding-inline-end: 0.75rem;

	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
	}

	&[disabled] {
		pointer-events: none;
	}
`;
