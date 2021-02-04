import { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps, StyledButtonProps {
	children?: React.ReactNode;
	type?: "normal" | "button" | "button-link";
	target?: "_blank";
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface StyledButtonProps {
	disabled?: boolean;
}
