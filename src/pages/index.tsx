import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ChakraServerSideProps, Head } from '@notion-to-mail/ui';
import { Stack, Text } from '@chakra-ui/react';
import { defaultTitleProps } from '@/pages/_document';
import { UserButton } from '@clerk/clerk-react';

const Page = () => {
  return (
    <>
      <Head {...defaultTitleProps} title="App" />

      <Stack direction="column" minH="100vh">
        <Text>Hey. We are busy here!</Text>
        <UserButton />
      </Stack>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  locale = 'en',
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
    ...ChakraServerSideProps(req),
  },
});

export default Page;
