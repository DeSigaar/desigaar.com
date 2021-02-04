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
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;

	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
	}

	&[disabled] {
		pointer-events: none;
	}
`;
