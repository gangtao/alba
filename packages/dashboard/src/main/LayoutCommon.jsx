import React from 'react';
import { layoutAtom } from './store';
import Grid from '../layout/grid';
import {useRecoilValue} from 'recoil';
const LayoutCommon = (props) => {
    const {enginePath, options} = useRecoilValue(layoutAtom);
    const Layout = React.lazy(async () => {
        try {
            console.log(`../layout/${enginePath}.js`);
            // this rely on user's build tool layout should be in user's local folder whose paranet folder has alias of @dashboard
            const module =  await import(`../layout/${enginePath}.js`);
            return module
        } catch (error) {
            console.log(`${enginePath}.js`);
            const module =  await import(`${enginePath}.js`);
            return module
        }
    });
    return <Layout options={options} {...props}/>
}

export default LayoutCommon;