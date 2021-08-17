import * as React from "react";
import { Container, Text, Button, VStack, HStack, Box } from "@chakra-ui/react"

import Page from "../../components/Page";
import Chart from '@alba/ggchart';

import Coder from '@alba/coder';

export default function Viz({ }) {
    let [grammar, setGrammar] = React.useState('type=point position=sepal_width*sepal_length color=species shape=circle');
    let [data, setData] = React.useState([]);
    let [metadata, setMetaData] = React.useState({
        dataSchema: [{ colName: "sepal_length", colType: "number" },
        { colName: "sepal_width", colType: "number" },
        { colName: "petal_length", colType: "number" },
        { colName: "petal_width", colType: "number" },
        { colName: "species", colType: "string" }],
        dataType: "table",
        queryType: "batch",
        visualization: { color: "species", position: "sepal_width*sepal_length", shape: "circle", type: "point" }
    });

    const introduction = `grammar driven data visualization`;

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

    const grammarToObject = function() {
        const items = grammar.split(" ");
        const result = {};
        items.forEach((item:string) => {
            const kv = item.split("=");
            result[kv[0]] = kv[1];
        });
        return result;
    };

    const handleClick = function () {
        const newMataData = metadata;
        newMataData.visualization = grammarToObject();
        setMetaData( newMataData);

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
            //console.log(response.status);
            return response.json();
        }).then(function (myJson) {
            //console.log(myJson);
            setData(parseJSON(myJson));
        });

    };

    const handleChange = function (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) {
        setGrammar(instance.getValue());
    }

    return (
        <Page introduction={introduction}>
            <HStack color="white">
                <VStack
                    spacing={2}
                    align="stretch"
                    w="40%"
                >
                    <Box h="400" bg="yellow.200">
                        <Coder code={grammar} onChange={handleChange} />
                    </Box>
                    <Box h="10" >
                        <Button colorScheme="blue" size="xs" onClick={handleClick}>Run</Button>
                    </Box>
                </VStack>
                <VStack w="50%" spacing={2}>
                    <Box w="100%">
                        <Chart data={data} metadata={metadata} height="400px"></Chart>
                    </Box>
                </VStack>
            </HStack>
        </Page>
    )
}