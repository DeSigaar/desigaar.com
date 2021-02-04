import styled from "styled-components";
import { device, size } from "@/styles";

export const Container = styled.div`
	width: 100%;

	@media ${device.mobileS} {
		max-width: ${size.mobileS};
	}
	@media ${device.mobileM} {
		max-width: ${size.mobileM};
	}
	@media ${device.mobileL} {
		max-width: ${size.mobileL};
	}
	@media ${device.tablet} {
		max-width: ${size.tablet};
	}
	@media ${device.laptop} {
		max-width: ${size.laptop};
	}
	@media ${device.laptopL} {
		max-width: ${size.laptopL};
	}
	@media ${device.desktop} {
		max-width: ${size.desktop};
	}
`;

export default Container;
