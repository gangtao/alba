import * as React from "react"
import { Container, Button, VStack, HStack, Box } from "@chakra-ui/react"

import Coder from '@alba/coder';

import {
    atom,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export default function Runner({ code }) {
    const codeState = atom({
        key: 'codeState',
        default: '',
    });

    const logState = atom({
        key: 'logState',
        default: [],
    });

    function CodeInput({ code }) {
        const [value, setValue] = useRecoilState(codeState);
        const onChange = (instance, change) => {
            setValue(instance.getValue());
        };

        return (
            <Coder code={code} onChange={onChange} />
        );
    };

    function CodeLog() {
        const logs = useRecoilValue(logState);
        return (
            <Container h="400" bg="#272822">
                {logs.map((log) => {
                    return <p>{log}</p>
                })}
            </Container>
        );
    };

    function RunButton() {
        const codeValue = useRecoilValue(codeState);
        const [log, setLog] = useRecoilState(logState);

        const onClick = () => {
            const runnerConsole = {
                logValue: [],
                log: function (message) {
                    runnerConsole.logValue = [...runnerConsole.logValue, JSON.stringify(message)];
                    setLog(runnerConsole.logValue);
                }
            }
            const runnerValue = codeValue.replaceAll("console", "runnerConsole");

            try {
                eval('"use strict"; (async function(){ ' + runnerValue + '})()');
            } catch (error) {
                runnerConsole.log(error.toString());
            }
        };
        return <Button colorScheme="blue" size="xs" onClick={onClick}>Run</Button>
    };

    return (
        <HStack color="white">
            <VStack
                spacing={2}
                align="stretch"
                w="40%"
            >
                <Box h="400" bg="yellow.200">
                    <CodeInput code={code} />
                </Box>
                <Box h="10" >
                    <RunButton />
                </Box>
            </VStack>
            <VStack w="40%" spacing={2}>
                <CodeLog />
                <Box h="10" ></Box>
            </VStack>
        </HStack>
    )
}