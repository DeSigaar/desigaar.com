import styled from "styled-components";
import type { Unit } from "@/types";

interface Props {
	size: number;
	axis?: "horizontal" | "vertical";
	unit?: Unit;
}

const _getHeight = ({ size, axis, unit = "px" }: Props) =>
	axis === "horizontal" ? _combine({}) : _combine({ size, unit });

const _getWidth = ({ size, axis, unit = "px" }: Props) =>
	axis === "vertical" ? _combine({}) : _combine({ size, unit });

const _combine = ({ size = 1, unit = "px" }: { size?: number; unit?: Unit }) => `${size}${unit}`;

export const Spacer = styled.span`
	display: block;
	width: ${_getWidth};
	min-width: ${_getWidth};
	height: ${_getHeight};
	min-height: ${_getHeight};
`;

export default Spacer;
