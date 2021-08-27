import * as React from "react";
import { ChakraProvider, Heading, Divider, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Viz from './pages/Viz';
import Fetch from './pages/Fetch';
import Table from './pages/Table';
import Dashboard from './pages/Dashboard';
import WebSocket from "./pages/WebSocket";
import I18n from "./pages/I18n";

import {
    RecoilRoot
} from 'recoil';

export default function App({ props }) {
    return (
        <RecoilRoot>
            <ChakraProvider>
                <Heading>Alba Demo</Heading>
                <Divider />
                <Tabs defaultIndex={0} isLazy>
                    <TabList>
                        <Tab>Visualization</Tab>
                        <Tab>HTTP Request</Tab>
                        <Tab>Web Socket</Tab>
                        <Tab>I18n</Tab>
                        <Tab>Table</Tab>
                        <Tab>Dashboard</Tab>

                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Viz />
                        </TabPanel>
                        <TabPanel>
                            <Fetch />
                        </TabPanel>
                        <TabPanel>
                            <WebSocket />
                        </TabPanel>
                        <TabPanel>
                            <I18n locale="zh"/>
                        </TabPanel>
                        <TabPanel>
                            <Table />
                        </TabPanel>
                        <TabPanel>
                            <Dashboard />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </ChakraProvider>
        </RecoilRoot>
    )
}