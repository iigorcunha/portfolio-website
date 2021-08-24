import { Flex, Text, Image, Grid, Box, SimpleGrid } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Home(): JSX.Element {
  return (
    <Flex
      maxW={1120}
      height="100%"
      flexDirection="column"
      align="center"
      justify="flex-start"
      zIndex={3}
      mt="48px"
      p={8}
    >
      <Flex fontSize="3xl" color="white" fontWeight="600">
        <Text textAlign="justify">
          A self-motivated web developer with 2 years of code experience, also
          5+ years as an IT manager. A passionate developer focused on
          Javascript, gained strong knowledge in the language, building APIs and
          front-end applications with ReactJS and React Native. Involved with
          Javascript community helping to solve issues of open-source projects.
          Very accomplished with an agile environment.
        </Text>
      </Flex>
      <SimpleGrid
        mt="200px"
        gap="6"
        templateRows={[
          'repeat(5, 1fr)',
          'repeat(5, 1fr)',
          'repeat(3, 1fr)',
          'repeat(2, 1fr)',
        ]}
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)',
        ]}
      >
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/ts-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/react-native-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/react-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/node-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/postgres-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/mongo-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/git-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/css-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/html-block.svg" />
        </Flex>
        <Flex
          height={160}
          width={160}
          borderRadius="15px"
          align="center"
          justify="center"
          bgColor="cGrey.600"
          boxShadow="6px 6px 30px #00000040"
        >
          <Image src="images/javascript-block.svg" />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
