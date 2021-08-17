import * as React from "react";
import { Box } from "@chakra-ui/react";

import Runner from "../../components/CodeRunner";
import Page from "../../components/Page";


export default function Fetch({ }) {
    const code = `const url = 'http://localhost:3000/api/user';
const options = {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
    }
};

fetch(url, options).then(response => {
    console.log(response.status);
    return response.json();
}).then(function(myJson) {
    console.log(myJson);
});`;

    const introduction = `With react, we usually use Axios, jQeury Ajax or window.fetch to send http request to backend, we prefer vanilla API over Axios.`

    return (
      <Page introduction={introduction}>
          <Runner code={code}/>
      </Page>
    )
  }