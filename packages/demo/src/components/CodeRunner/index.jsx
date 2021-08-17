import * as React from "react"
import { Flex, Center, Text, Button, VStack, HStack , Box} from "@chakra-ui/react"

import Coder from '@alba/coder';

export default function Runner({ code }) {

    return (
        <HStack color="white">
            <VStack
                spacing={2}
                align="stretch"
                w="40%"
            >
                <Box h="10" >
                    <Button colorScheme="blue" size="xs">Run</Button>
                </Box>

                <Box h="200" bg="yellow.200">
                    <Coder code={code}/>
                </Box>
                
            </VStack>
            <Center w="40%" bg="green.500" height="286">
                <Text>Result</Text>
            </Center>
        </HStack>
    )
}