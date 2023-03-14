import React from "react";
import { useI18n } from "next-localization";
import { Container } from "@/styles";
import { projectConfig } from "@/project.config";
import * as Styled from "./styles";

export const PageHomeContent = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const { name } = projectConfig;

	return (
		<Container>
			<Styled.Wrapper>
				<Styled.LogoContainer>
					<Styled.Logo />
					<Styled.Title>{name}</Styled.Title>
					<Styled.Paragraph>{t("sentences.title")}</Styled.Paragraph>
				</Styled.LogoContainer>
				<Styled.ButtonContainer>
					<Styled.Mynho href="http://mynho.nl/" target="_blank">
						<span>Mynho</span>
					</Styled.Mynho>
				</Styled.ButtonContainer>
				<Styled.ButtonContainer>
					<Styled.Maexal href="https://maexal.dev/" target="_blank">
						<span>M&aelig;xal</span>
					</Styled.Maexal>
				</Styled.ButtonContainer>
				<Styled.ButtonContainer>
					<Styled.Bart href="https://klundertpd.com/" target="_blank">
						<span>Klundert Photography &amp; Design</span>
					</Styled.Bart>
				</Styled.ButtonContainer>
			</Styled.Wrapper>
		</Container>
	);
};

export default PageHomeContent;
