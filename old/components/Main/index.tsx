import React from "react";
import * as Styled from "./styles";
import type { Props } from "./types";

export const Main = ({ children, spaced, ...props }: Props): JSX.Element =>
	spaced ? (
		<Styled.MainContainer {...props}>{children}</Styled.MainContainer>
	) : (
		<Styled.Main {...props}>{children}</Styled.Main>
	);

export default Main;
