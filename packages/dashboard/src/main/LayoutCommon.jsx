import React from 'react';
import { layoutAtom } from './store'
import {useRecoilValue} from 'recoil';
import regeneratorRuntime from "regenerator-runtime";

const LayoutCommon = (props) => {
    const {enginePath, options} = useRecoilValue(layoutAtom);
    const Layout = React.lazy(async () => {
        // this rely on user's build tool layout should be in user's local folder whose paranet folder has alias of @dashboard
        const module =  await import(`@dashboard/layout/${enginePath}`);
        return module
    });
    return <Layout options={options} {...props}/>
}

export default LayoutCommon;