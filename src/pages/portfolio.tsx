import { Flex, Image, Text, SimpleGrid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import { useRouter } from 'next/router';

interface Project {
  id: string;
  title: {
    text: string;
  };
  thumbnail: {
    alt: string;
    url: string;
  };
  github: {
    url: string;
  };
}

interface PortfolioProps {
  projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Igor Cunha | Portfolio</title>
      </Head>
      <SimpleGrid
        maxW={1120}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
        ]}
        height="100%"
        gap="8"
        flexDirection="column"
        align="center"
        justify="space-around"
        p={4}
        zIndex={3}
      >
        {projects.map(project => (
          <Flex
            onClick={() => router.replace(project.github.url)}
            key={project.id}
            _hover={{ cursor: 'pointer' }}
            height="300px"
            width="100%"
            p={4}
            bgColor="cGrey.500"
            align="center"
            justify="center"
            flexDir="column"
            borderRadius="18"
            boxShadow="4px 4px 6px rgba(0,0,0,0.3)"
          >
            <Image
              height="200px"
              w="auto"
              src={project.thumbnail.url}
              alt={project.thumbnail.alt}
            />
            <Text mt="4" fontWeight="bold" color="white" fontSize="2xl">
              {project.title[0].text}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'projects')],
    {
      fetch: ['projects.thumbnail', 'projects.project_name', 'projects.github'],
    }
  );

  const projects = response.results.map(project => {
    return {
      id: project.id,
      title: project.data.project_name,
      thumbnail: project.data.thumbnail,
      github: project.data.github,
    };
  });

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24,
  };
};
