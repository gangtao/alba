import * as React from "react"
import { VStack, Box , Code} from "@chakra-ui/react"

export default function Page({ children, introduction }) {
    console.log("this is a viz component");
    return (
        <VStack
            spacing={2}
            align="stretch"
            w="100%"
        >
            <Box h="10" >
                <Code colorScheme="purple">{introduction}</Code>
            </Box>

            <Box h="800">
                {children}
            </Box>

        </VStack>
    )
}