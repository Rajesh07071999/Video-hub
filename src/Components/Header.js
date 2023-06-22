import React from 'react';
import { VStack } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
      zIndex={'overlay'}
        position={'fixed'}
        colorScheme="facebook"
        p={4}
        m={4}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="facebook" variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose}  colorScheme="facebook" variant={'ghost'}>
                <Link to={'/Video'}>Videos</Link>
              </Button>
              <Button onClick={onClose}  colorScheme="facebook" variant={'ghost'}>
                <Link to={'/video?category=free'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="facebook" variant={'ghost'}>
                <Link to={'/Upload'}>Upload</Link>
              </Button>
            </VStack>

            <HStack mt={4} mx={4}>
              <Button onClick={onClose}  colorScheme="purple">
                <Link to="/Login">Login</Link>
              </Button>
              <Button onClick={onClose} colorScheme="facebook">
                <Link to="/Signup">Signup</Link>
              </Button>
            </HStack>
          </DrawerBody>

          <DrawerFooter>
            <hr />
            <Button variant={'ghost'}>Created By @Rajesh</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Header;
