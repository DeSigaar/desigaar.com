import "react";
import { CSSProp } from "styled-components";
import type { Theme } from "@/styles";

declare module "react" {
	interface Attributes {
		css?: CSSProp | CSSObject;
	}
}

declare module "styled-components" {
	export interface DefaultTheme extends Theme {
		id: string;
		name: string;
	}
}
