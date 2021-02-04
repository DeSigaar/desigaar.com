import React from "react";
import { default as NextLink } from "next/link";
import * as Styled from "./styles";
import type { LinkProps } from "./types";

export const Link = ({
	children,
	type = "normal",
	disabled = false,
	target,
	onClick,
	...props
}: LinkProps): JSX.Element => {
	switch (type) {
		case "button-link":
			return (
				<NextLink passHref {...props}>
					<Styled.Button as="a" target={target} disabled={disabled}>
						<span>{children}</span>
					</Styled.Button>
				</NextLink>
			);
		case "button":
			return (
				<Styled.Button as="button" disabled={disabled} onClick={onClick}>
					<span>{children}</span>
				</Styled.Button>
			);
		case "normal":
		default:
			return (
				<NextLink passHref {...props}>
					<Styled.Link target={target} rel="noopener noreferrer">
						{children}
					</Styled.Link>
				</NextLink>
			);
	}
};

export default Link;
