import * as React from "react";
import { Container, Button, VStack, HStack, Box } from "@chakra-ui/react"

import Page from "../../components/Page";
import Chart from '@alba/ggchart';

import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export default function WebSocketPage({ }) {
    const connectState = atom({
        key: 'wsconnectState',
        default: false,
    });

    const streamDataState = atom({
        key: 'wsstreamDataState',
        default: [],
    });

    const dataState = selector({
        key: 'wsdataState',
        get: ({ get }) => {
            const stream = get(streamDataState);
            const result = stream.map( (row) => {
                const items = row.split(',');
                const rowObject = [];

                items.forEach(element => {
                    const [ key, value] = element.split(':');
                    const [k,v] = [key.trim(), value.trim()];
                    rowObject.push(k.startsWith('m') ? Number(v) : v );
                });
                return rowObject;
            });

            return result;
        },
    });

    let socket = undefined;

    function WebSocketControl() {
        const [connect, setConnection] = useRecoilState(connectState);
        const [stream, setStream] = useRecoilState(streamDataState);
        const history = [];  // TODO : should consider effects for history stream data?

        const doConnect = function () {
            console.log('doConnect');
            socket = new WebSocket('ws://localhost:3001');
            socket.addEventListener('open', function (event) {
                socket.send('Hello Server!');
            });

            socket.addEventListener('message', function (event) {
                console.log('Message from server ', event.data);
                setStream([...history, event.data]);
                history.push(event.data);
            });
        };

        const doDisconnect = function () {
            console.log('doDisconnect');
            socket.close();
            history.length = 0;
            setStream([]);
        }

        const onClick = () => {
            setConnection(!connect);
            if (connect) {
                doDisconnect();
            } else {
                doConnect();
            }
        };
        return (<Button colorScheme="blue" size="xs" onClick={onClick}>{connect ? 'disconnect' : 'connect'}</Button>)
    };

    function StreamData() {
        const streams = useRecoilValue(streamDataState);
        return (
            <Container h="400" bg="#272822">
                {streams.map((row) => {
                    return <p>{row}</p>
                })}
            </Container>
        );
    };

    function Visualization() {
        const data = useRecoilValue(dataState); 
        const metadata = {
            dataSchema: [{ colName: "time", colType: "number" },
            { colName: "name", colType: "string" },
            { colName: "m1", colType: "number" },
            { colName: "m2", colType: "number" },
            { colName: "f1", colType: "string" },
            { colName: "f2", colType: "string" }],
            dataType: "table",
            queryType: "batch",
            visualization: { position: "time*m1", type: "interval"}
        };
        return (<Chart data={data} metadata={metadata} height="400px"></Chart>)
    }

    const introduction = `chart with websocket data stream`;

    return (
        <Page introduction={introduction}>
            <HStack color="white">
                <VStack
                    spacing={2}
                    align="stretch"
                    w="40%"
                >
                    <Box h="400" bg="#272822">
                        <StreamData />
                    </Box>
                    <Box h="10" >
                        <WebSocketControl />
                    </Box>
                </VStack>
                <VStack w="50%" spacing={2}>
                    <Box w="100%">
                        <Visualization />
                    </Box>
                </VStack>
            </HStack>
        </Page>
    )
}