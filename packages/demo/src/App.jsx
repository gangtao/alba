import * as React from "react";
import { ChakraProvider, Heading, Divider, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Viz from './pages/Viz';
import Fetch from './pages/Fetch';
import State from './pages/State';
import Routing from './pages/Routing';
import Table from './pages/Table';
import WebSocket from "./pages/WebSocket";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function App({ Component }) {
  console.log("this is a chakra app");
  return (
    <RecoilRoot>
    <ChakraProvider>
      <Heading>Alba Demo</Heading>
      <Divider />
      <Tabs defaultIndex={2} isLazy>
        <TabList>
          <Tab>State Management</Tab>
          <Tab>Routing</Tab>
          <Tab>Visualization</Tab>
          <Tab>Table</Tab>
          <Tab>Dashboard</Tab>
          <Tab>HTTP Request</Tab>
          <Tab>Web Socket</Tab>
          <Tab>I18n</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <State />
          </TabPanel>
          <TabPanel>
            <Routing />
          </TabPanel>
          <TabPanel>
            <Viz />
          </TabPanel>
          <TabPanel>
            <Table />
          </TabPanel>
          <TabPanel>
            <p>Dashboard</p>
          </TabPanel>
          <TabPanel>
            <Fetch />
          </TabPanel>
          <TabPanel>
            <WebSocket/>
          </TabPanel>
          <TabPanel>
            <p>I18n</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
    </RecoilRoot>
  )
}