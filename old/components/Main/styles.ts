import styled from "styled-components";
import { Container as GlobalContainer } from "@/styles";
import type { StyledProps } from "./types";

export const Main = styled.main<StyledProps>`
	width: 100%;
	height: auto;

	${({ fullPage }) =>
		fullPage &&
		`
		min-height: 100vh;
		padding-block-start: 3rem;
		padding-block-end: 3rem;
		`}
`;

export const MainContainer = styled(GlobalContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-inline-start: 1rem;
	padding-inline-end: 1rem;
	padding-block-start: 3rem;
	padding-block-end: 3rem;
	margin-inline-start: auto;
	margin-inline-end: auto;
	min-height: 100vh;
`;
