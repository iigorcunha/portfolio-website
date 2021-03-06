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
      </DrawerContent>
    </Drawer>
  );
}
