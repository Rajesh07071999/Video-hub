import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
function Upload() {
  return (
 <Container maxW={'container.xl'} h={'100vh'} p={16} >
    <VStack color={'facebook.500'} h={'full'} justifyContent={'center'}>
<AiOutlineCloudUpload size={"10vmax"} />
<form action="">
  <HStack>
    <Input type='file' css={{
    }} />
    <Button colorScheme='facebook'p={3}>Upload</Button>
  </HStack>
</form>
    </VStack>
 </Container>
  )
}

export default Upload;
