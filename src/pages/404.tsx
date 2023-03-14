import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@notion-to-mail/ui';
import { Stack } from '@chakra-ui/react';
import { defaultTitleProps } from '@/pages/_document';
import { Heading, Text, Box, Container, Button } from '@chakra-ui/react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const Page = () => {
  const { t } = useTranslation('not-found-page');

  return (
    <>
      <Head {...defaultTitleProps} title="404" />

      <Stack direction="column" justifyContent="space-between" minH="100vh">
        <Box
          as="main"
          px={{ base: 2, md: 8 }}
          py={{ base: 8, md: 20 }}
          mx="auto">
          <Container
            w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
            maxW="70ch"
            mx="auto"
            textAlign={{ base: 'left', md: 'center' }}>
            <Stack
              direction="column"
              spacing={4}
              alignItems={{ base: 'left', md: 'center' }}>
              <Heading>{t('phrases.not-found')}</Heading>
              <Text>{t('sentences.not-found')}</Text>

              <Link href="/" passHref>
                <Button as="a" leftIcon={<HiArrowNarrowLeft />}>
                  {t('phrases.back-to-safety')}
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'not-found-page'])),
  },
});

export default Page;
