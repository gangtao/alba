import * as React from "react"
import { ChakraProvider, Heading, Divider, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

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
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  )
}