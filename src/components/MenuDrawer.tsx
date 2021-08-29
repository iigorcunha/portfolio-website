import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Flex,
  Link,
  DrawerFooter,
  IconButton,
} from '@chakra-ui/react';
import {
  RiGithubLine,
  RiLinkedinFill,
  RiMailFill,
  RiMenu2Fill,
} from 'react-icons/ri';
import { RefObject } from 'react';
import { ActiveLink } from './ActiveLink';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<HTMLButtonElement>;
}

export function MenuDrawer({
  isOpen,
  onClose,
  btnRef,
}: MenuDrawerProps): JSX.Element {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          color="white"
          _focus={{ outline: 'none' }}
          _focusVisible={{ outline: 'none' }}
        />
        <DrawerHeader bgColor="cGrey.600" color="white">
          Pages
        </DrawerHeader>

        <DrawerBody bgColor="cGrey.600">
          <Flex fontWeight="bold" fontSize="xl" flexDir="column">
            <ActiveLink href="/about">
              <Link mr="8">About</Link>
            </ActiveLink>
            <ActiveLink href="/portfolio">
              <Link mr="8">Portfolio</Link>
            </ActiveLink>
          </Flex>
        </DrawerBody>
        <DrawerFooter bgColor="cGrey.600" color="cPurple.500">
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
