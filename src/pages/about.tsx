import { Flex, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { SkillBlock } from '../components/SkillBlock';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Igor Cunha | About</title>
      </Head>
      <Flex
        maxW={1120}
        height="100%"
        flexDirection="column"
        align="center"
        justify="flex-start"
        zIndex={3}
        mt="48px"
        p={8}
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#023047',
            borderRadius: '24px',
          },
        }}
      >
        <Flex
          fontSize={['2xl', '2xl', '2xl', '3xl']}
          color="white"
          fontWeight="600"
        >
          <Text textAlign="justify">
            A self-motivated web developer with 2 years of code experience, also
            5+ years as an IT manager. A passionate developer focused on
            Javascript, gained strong knowledge in the language, building APIs
            and front-end applications with ReactJS and React Native. Involved
            with Javascript community helping to solve issues of open-source
            projects. Very accomplished with an agile environment.
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
          <SkillBlock skillName="Typescript" color="#007ACC">
            <Image src="images/ts-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="React Native" color="#61DAFB">
            <Image src="images/react-native-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="React" color="#6398D7">
            <Image src="images/react-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="NodeJS" color="#8CC84B">
            <Image src="images/node-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="PostgreSQL" color="#336791" isDark>
            <Image src="images/postgres-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="MongoDB" color="#6CAC48">
            <Image src="images/mongo-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="Git" color="#DE4C36">
            <Image src="images/git-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="CSS" color="#1C88C7">
            <Image src="images/css-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="HTML" color="#EF652A">
            <Image src="images/html-block.svg" />
          </SkillBlock>
          <SkillBlock skillName="JavaScript" color="#F7DF1E">
            <Image src="images/javascript-block.svg" />
          </SkillBlock>
        </SimpleGrid>
      </Flex>
    </>
  );
}
