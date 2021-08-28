import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <Flex
          flexDirection="column"
          align="center"
          bgColor="cGrey.600"
          h="100%"
          minH="100vh"
          position="relative"
        >
          <Header />
          <Component {...pageProps} />
          <Box
            position="absolute"
            bgImage="url('/images/bg-wave.svg')"
            height="60%"
            w="100%"
            bgRepeat="no-repeat"
            bgSize="cover"
            bottom="0"
          />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
