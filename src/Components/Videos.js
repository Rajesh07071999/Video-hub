import React, { Fragment, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
function Videos() {

    const VideoArr = [
        'https://player.vimeo.com/external/420384286.sd.mp4?s=458e827eb70787f1d5d808affff53054e6aa3707&profile_id=164&oauth2_token_id=57447761',
        'https://player.vimeo.com/external/373947032.sd.mp4?s=c2767eac0a4b648aeecdce625626bb6ba8fc7f03&profile_id=164&oauth2_token_id=57447761',
        'https://player.vimeo.com/external/371436217.sd.mp4?s=fc0bb3470ff82c399de16b0c43b88ac73d59e835&profile_id=164&oauth2_token_id=57447761',
        'https://player.vimeo.com/external/371863444.sd.mp4?s=0a48ce756dedbcd0c8efef7032a71e5255f61613&profile_id=164&oauth2_token_id=57447761',
        'https://player.vimeo.com/external/390180511.sd.mp4?s=7e19bfcb52812faabb2dd3c22974ff8859f6071a&profile_id=164&oauth2_token_id=57447761'
    ]

    const [videoSrc, setVideo] = useState(VideoArr[0])

    return (
        <Fragment>
            <Stack direction={["column", "row"]} >
                <Container direction={["column", "row"]} >
                    <VStack w={'full'} mt={30} >
                        <video src={videoSrc} controls controlsList='nodownload'
                            style={{ width: "100%" }}></video>

                    </VStack>
                    <VStack alignItems={'flex-start'} p={8} overflow={"auto"}>
                        <Heading>This Is Sample Video</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa doloremque, dolorum dolor ratione dicta, nulla porro atque et sequi cumque autem eum a? Vero eum quaerat placeat ipsum dicta.</Text>
                    </VStack>

                </Container>
                <VStack mt={30} > {VideoArr.map((item, index) => (
                    <VStack spacing={'8'} mx={44} overflow={'hidden'} alignItems={'normal'}>
                        <Button colorScheme='messenger' onClick={() => setVideo(item)} >Click Me To See Sample Video Number  {index + 1}</Button>
                    </VStack>

                ))
                }
                    {/* <Button colorScheme='gray' transform={'auto'}>More Videos</Button> */}
                </VStack>
            </Stack>

        </Fragment>
    )
}

export default Videos
