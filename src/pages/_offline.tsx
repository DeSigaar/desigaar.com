import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Head } from '@notion-to-mail/ui';
import { Stack } from '@chakra-ui/react';
import { defaultTitleProps } from '@/pages/_document';
import { Heading, Text, Box, Container, Button } from '@chakra-ui/react';
import { HiRefresh } from 'react-icons/hi';

const translation = 'offline-page';

const Page = () => {
  const { t } = useTranslation(translation);
  const { push } = useRouter();

  return (
    <>
      <Head {...defaultTitleProps} title="Offline" />

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
              <Heading>{t('phrases.offline')}</Heading>
              <Text>{t('sentences.offline')}</Text>

              <Button rightIcon={<HiRefresh />} onClick={() => push('/')}>
                {t('words.retry')}
              </Button>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', translation])),
  },
});

export default Page;
