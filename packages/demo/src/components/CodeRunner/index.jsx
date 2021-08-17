import * as React from "react"
import { Container, Text, Button, VStack, HStack , Box} from "@chakra-ui/react"

import Coder from '@alba/coder';

export default function Runner({ code }) {

    let [value, setValue] = React.useState(code);
    let [log, setLog] = React.useState([]);

    const runnerConsole = {
        log : function(message) {
            setLog([message]);
        }
    }

    const handleClick = function() {
        const runnerValue = value.replaceAll("console","runnerConsole");
        //console.log("run code " + runnerValue);
        eval(runnerValue);
    };

    const getLogs = function() {
        const logs = log.map( (n) => JSON.stringify(n));
        const logsText = logs.join('\n')
        return (
            <Text>{logsText}</Text>
        )
    };

    const handleChange = function(instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) {
        setValue(instance.getValue());
    }

    return (
        <HStack color="white">
            <VStack
                spacing={2}
                align="stretch"
                w="40%"
            >
                <Box h="400" bg="yellow.200">
                    <Coder code={code} onChange={handleChange}/>
                </Box>  
                <Box h="10" >
                    <Button colorScheme="blue" size="xs" onClick={handleClick}>Run</Button>
                </Box>   
            </VStack>
            <VStack w="40%" spacing={2}>
                <Container h="400" bg="#272822">{getLogs()}</Container>
                <Box h="10" ></Box>
            </VStack>
        </HStack>
    )
}