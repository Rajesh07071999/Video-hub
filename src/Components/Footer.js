import { Container,Card,CardHeader,CardBody,CardFooter,Heading,Text,Button, Input } from '@chakra-ui/react'
import React from 'react'
function Footer() {
  return (
  <Container backgroundColor={'whiteAlpha.100'} mt={5}>
    <Card align='center' >
  <CardHeader  colorScheme='whiteAlpha' >
    <Heading size='md'   > Footer Section </Heading>
  </CardHeader>
  <CardBody>
    <Text  colorScheme='whiteAlpha' >Hi If you want to get more details about our features please suscribe our community for more information</Text>
  </CardBody>
  <CardFooter>
    <Input type='text' backgroundColor={'whiteAlpha.500'} borderRadius={20}></Input>
    <Button  mx={4} colorScheme='red'>Suscribe</Button>
  </CardFooter>
</Card>
  </Container>
  )
}

export default Footer
