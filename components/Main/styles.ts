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
		padding-top: 6rem;
		padding-bottom: 6rem;
		`}
`;

export const MainContainer = styled(GlobalContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 6rem;
	padding-bottom: 6rem;
	margin-left: auto;
	margin-right: auto;
	min-height: 100vh;
	padding-top: 6rem;
	padding-bottom: 6rem;
`;
