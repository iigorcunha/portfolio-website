import { Flex, Text, Image } from '@chakra-ui/react';

export default function Home(): JSX.Element {
  return (
    <Flex
      maxW={1120}
      height="100%"
      minH="90vh"
      flexDirection="column"
      align="center"
      justify="space-around"
      p={4}
      zIndex={3}
    >
      <Flex fontSize="3xl" color="white" fontWeight="600">
        <p>
          Hello,
          <br /> my name is Igor Cunha,
          <br />I am a{' '}
          <Text as="span" color="cPurple.500">
            Full Stack Web Developer
          </Text>
        </p>
      </Flex>

      <Image src="images/coding.svg" alt="coding" zIndex={2} bottom="0" />
    </Flex>
  );
}
