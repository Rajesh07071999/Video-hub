import React from 'react'
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike } from 'react-icons/bi'
import { BiChat } from 'react-icons/bi'
import { BiShare } from 'react-icons/bi'
function Home() {
  return (
    <Box>
      <Stack>
        <Container mt={10}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>The perfect latte</Heading>

                <Text py='2'>
                  Caffè latte is a coffee beverage of Italian origin made with espresso
                  and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  Go
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Card maxW='max' mt={5}
          >

            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name='Steve Rogers' src='https://upload.wikimedia.org/wikipedia/commons/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg' />

                  <Box>
                    <Heading size='sm'>Steve Rogers</Heading>
                    <Text>Creator, Captain America</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics. The character first appeared in Captain America Comics
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src='https://lh3.googleusercontent.com/V6jx7oIQUOqBd-_DSaVNYAxFg1lKxWSMBom6TVighfwmc57ZkB-BIsoUBiUeyWE5IeW5pwrP_C7Wu-8__CWp3JULvdE=w640-h400-e365-rj-sc0x00ffffff'
              alt='Chakra UI'
            />

            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                Like
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>
          <Card maxW='max' mt={5}
          >

            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name='Ms Dhoni' src='https://pbs.twimg.com/media/EtdQ6ACVcAACxAI.jpg' />

                  <Box>
                    <Heading size='sm'>Ms Dhoni</Heading>
                    <Text>Cricketer</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
              Mahendra Singh Dhoni (/məˈheɪndrə ˈsɪŋ dhæˈnɪ/ (listen); born 7 July 1981) is an Indian professional cricketer. He was captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He plays as a right-handed wicket-keeper-batsman and is also the current captain of Chennai Super Kings in the Indian Premier League.
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src='https://resources.pulse.icc-cricket.com/photo-resources/2019/09/12/43e7920b-27dd-4e16-8291-3f953d891744/Dhoni-ICC-trophy-collage.png?width=985&height=580'
              alt='Chakra UI'
            />

            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                Like
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>
         
        </Container>
      </Stack>
    </Box>
  )
}

export default Home
