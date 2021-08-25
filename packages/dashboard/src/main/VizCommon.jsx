import React, {useEffect, lazy, Suspense} from 'react';
import { visualizationSelector } from './store'
import {useRecoilValue} from 'recoil';
import {empty} from 'ramda';
const VizCommon = ({ id, actions=empty, tokens=[] }) => {
    const {data, enginePath, options} = useRecoilValue(visualizationSelector(id));
    const Viz = React.lazy(async () => {
        try {
            // this rely on user's build tool visualization should be in user's local folder whose paranet folder has alias of @dashboard
            console.log(`../visualization/${enginePath}.js`);
            const module =  await import(`../visualization/${enginePath}.js`);
            return module
        } catch (error) {
            const module =  await import(`../visualization/${enginePath}.js`);
            return module
        }
    });
    return <Viz data={data} options={options}/>
}

export default VizCommon;