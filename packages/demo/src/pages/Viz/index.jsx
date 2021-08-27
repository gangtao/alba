import * as React from "react";
import { Container, Text, Button, VStack, HStack, Box } from "@chakra-ui/react"

import Page from "../../components/Page";

import Chart from '@alba/ggchart';
import Coder from '@alba/coder';

import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export default function Viz({ }) {
    const grammarState = atom({
        key: 'vizGrammarState',
        default: 'type=point position=sepal_width*sepal_length color=species shape=circle',
    });

    const dataState = atom({
        key: 'vizDataState',
        default: [],
    });

    const metadataState = selector({
        key: 'vizMetadataState',
        get: ({ get }) => {
            const grammar = get(grammarState);
            let meta = {
                dataSchema: [{ colName: "sepal_length", colType: "number" },
                { colName: "sepal_width", colType: "number" },
                { colName: "petal_length", colType: "number" },
                { colName: "petal_width", colType: "number" },
                { colName: "species", colType: "string" }],
                dataType: "table",
                queryType: "batch",
                visualization : undefined
            };

            meta.visualization = grammarToObject(grammar);
            return meta;

        }
    });

    function GrammarBox() {
        const [grammar, setGrammar] = useRecoilState(grammarState);
        const onChange = function (instance, change) {
            setGrammar(instance.getValue());
        }
        return <Coder code={grammar} onChange={onChange} />
    }

    const parseJSON = function (json) {
        const data = json.map((row) => {
            let rowArray = [];
            for (const [key, value] of Object.entries(row)) {
                rowArray.push(value);
            }
            return rowArray;
        });
        return data;
    };

    const grammarToObject = function (grammar) {
        const items = grammar.split(" ");
        const result = {};
        items.forEach((item) => {
            const kv = item.split("=");
            result[kv[0]] = kv[1];
        });
        return result;
    };

    function ShowButton() {
        const [data, setData] = useRecoilState(dataState);
        const onClick = function () {
            // No need to get data everytime
            const url = 'http://localhost:3000/api/data';
            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            };

            fetch(url, options).then(response => {
                return response.json();
            }).then(function (myJson) {
                setData(parseJSON(myJson));
            });
        }

        return (<Button colorScheme="blue" size="xs" onClick={onClick}>Get Data</Button>)
    };


    function Visualization() {
        const data = useRecoilValue(dataState);
        const metadata = useRecoilValue(metadataState);

        return (<Chart data={data} metadata={metadata} height="400px"></Chart>);
    }

    const introduction = `grammar driven data visualization`;

    return (
        <Page introduction={introduction}>
            <HStack color="white">
                <VStack
                    spacing={2}
                    align="stretch"
                    w="40%"
                >
                    <Box h="400" bg="yellow.200">
                        <GrammarBox />
                    </Box>
                    <Box h="10" >
                        <ShowButton />
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