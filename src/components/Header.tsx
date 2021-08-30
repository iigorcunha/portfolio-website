import {
  Flex,
  Image,
  Link,
  IconButton,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import {
  RiGithubLine,
  RiLinkedinFill,
  RiMailFill,
  RiMenu2Fill,
} from 'react-icons/ri';
import { ActiveLink } from './ActiveLink';
import { MenuDrawer } from './MenuDrawer';

export function Header(): JSX.Element {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex
      color="white"
      align="center"
      p={4}
      h="90px"
      bgColor="cGrey.600"
      w="100vw"
      justify="space-between"
      maxW={1120}
    >
      {!isMobile ? (
        <>
          <Flex
            onClick={() => router.replace('/')}
            _hover={{ cursor: 'pointer' }}
          >
            <Image src="igor-cunha-logo.svg" alt="igor-cunha" />
          </Flex>
          <Flex fontWeight="bold" fontSize="xl">
            <ActiveLink href="/about">
              <Link mr="8">About</Link>
            </ActiveLink>
            <ActiveLink href="/portfolio">
              <Link mr="8">Portfolio</Link>
            </ActiveLink>
          </Flex>
          <Flex color="cPurple.500">
            <IconButton
              as="a"
              _active={{ backgroundColor: 'cGrey.500' }}
              _hover={{ backgroundColor: 'cGrey.400', cursor: 'pointer' }}
              mr="2"
              bgColor="cGrey.600"
              aria-label="github"
              padding="0"
              outline="none"
              href="https://github.com/iigorcunha"
              target="_blank"
              fontSize="3xl"
              icon={<RiGithubLine />}
            />
            <IconButton
              as="a"
              _active={{ backgroundColor: 'cGrey.500' }}
              _hover={{ backgroundColor: 'cGrey.400', cursor: 'pointer' }}
              mr="2"
              bgColor="cGrey.600"
              aria-label="github"
              outline={0}
              p={0}
              href="https://linkedin.com/in/iigorcunha"
              target="_blank"
              fontSize="3xl"
              icon={<RiLinkedinFill />}
            />
            <IconButton
              as="a"
              _active={{ backgroundColor: 'cGrey.500' }}
              _hover={{ backgroundColor: 'cGrey.400', cursor: 'pointer' }}
              bgColor="cGrey.600"
              aria-label="github"
              href="mailto:igorcesarcunha@gmail.com"
              p={0}
              fontSize="3xl"
              icon={<RiMailFill />}
            />
          </Flex>
        </>
      ) : (
        <>
          <Flex
            onClick={() => router.replace('/')}
            _hover={{ cursor: 'pointer' }}
          >
            <Image src="igor-cunha-logo.svg" alt="igor-cunha" />
          </Flex>

          <Flex>
            <Flex mr={8} color="cPurple.500">
              <IconButton
                as="a"
                _active={{ backgroundColor: 'cGrey.500' }}
                _hover={{ backgroundColor: 'cGrey.400', cursor: 'pointer' }}
                mr="2"
                bgColor="cGrey.600"
                aria-label="github"
                padding="0"
                outline="none"
                href="https://github.com/iigorcunha"
                target="_blank"
                fontSize="3xl"
                icon={<RiGithubLine />}
              />
              <IconButton
                as="a"
                _active={{ backgroundColor: 'cGrey.500' }}
                _hover={{ backgroundColor: 'cGrey.400', cursor: 'pointer' }}
                mr="2"
                bgColor="cGrey.600"
                aria-label="github"
                outline={0}
                p={0}
                href="https://linkedin.com/in/iigorcunha"
                target="_blank"
                fontSize="3xl"
                icon={<RiLinkedinFill />}
              />
              <IconButton
                as="a"
                _active={{ backgroundColor: 'cGrey.500' }}
                _hover={{ backgroundColor: 'cGrey.400', cursor: 'pointer' }}
                bgColor="cGrey.600"
                aria-label="github"
                href="mailto:igorcesarcunha@gmail.com"
                p={0}
                fontSize="3xl"
                icon={<RiMailFill />}
              />
            </Flex>
            <IconButton
              onClick={onOpen}
              ref={btnRef}
              bgColor="cGrey.600"
              _active={{ backgroundColor: 'cGrey.500' }}
              _hover={{ backgroundColor: 'cGrey.400', cursor: 'pointer' }}
              fontSize="3xl"
              aria-label="icon"
              _focus={{ outline: 'none' }}
              _focusVisible={{ outline: 'none' }}
              icon={<RiMenu2Fill />}
            />
          </Flex>
          <MenuDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        </>
      )}
    </Flex>
  );
}
