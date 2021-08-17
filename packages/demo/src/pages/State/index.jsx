import * as React from "react";
import Page from "../../components/Page";

export default function State({}) {
    const introduction = `State management is the most challenging work in react world. There are lots of solutions as well. Redux, Recoil and React hooks are most poluar. 
    We choice Recoil as our state management solution.`;

    return (
        <Page introduction={introduction}>
        </Page>
    )
}