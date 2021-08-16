import * as React from "react"
import { ChakraProvider, Heading, Divider, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import Viz from './components/Viz'

export default function App({ Component }) {
  console.log("this is a chakra app");
  return (
    <ChakraProvider>
      <Heading>Alba Demo</Heading>
      <Divider />
      <Tabs>
        <TabList>
          <Tab>State Management</Tab>
          <Tab>Routing</Tab>
          <Tab>Communication</Tab>
          <Tab>Visualization</Tab>
          <Tab>Table</Tab>
          <Tab>Dashboard</Tab>
          <Tab>HTTP Request</Tab>
          <Tab>Web Socket</Tab>
          <Tab>I18n</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>State Management</p>
          </TabPanel>
          <TabPanel>
            <p>Routing</p>
          </TabPanel>
          <TabPanel>
            <p>Communication</p>
          </TabPanel>
          <TabPanel>
            <Viz/>
          </TabPanel>
          <TabPanel>
            <p>Table</p>
          </TabPanel>
          <TabPanel>
            <p>Dashboard</p>
          </TabPanel>
          <TabPanel>
            <p>HTTP Request</p>
          </TabPanel>
          <TabPanel>
            <p>Web Socket</p>
          </TabPanel>
          <TabPanel>
            <p>I18n</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  )
}