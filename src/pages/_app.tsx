import { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        pos="relative"
        flexDirection="column"
        align="center"
        bgColor="cGrey.600"
        minH="100vh"
        h="100%"
      >
        <Header />
        <Component {...pageProps} />
        <Flex
          bgSize="cover"
          height="60%"
          width="100%"
          bgImage="url('/images/bg.svg')"
          bgPos="bottom"
          position="absolute"
          bottom="0"
          bgRepeat="no-repeat"
        />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
