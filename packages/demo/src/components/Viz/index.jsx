import * as React from "react"
import { Box } from "@chakra-ui/react"

import Chart from '@alba/ggchart';

export default function Viz({ Component }) {
    console.log("this is a viz component");
    return (
      <Box>this is a visualization
          <Chart/>
      </Box>

    )
  }