import React, { useEffect, lazy, Suspense, createElement } from 'react';
import { visualizationSelector } from './store'
import { useRecoilValue } from 'recoil';
import { empty, is, map, isEmpty } from 'ramda';
const isArray = is(Array);

const VizCommon = ({ id, actions = empty, tokens = [] }) => {
    const { data, enginePath, options } = useRecoilValue(visualizationSelector(id));
    console.log("In Viz Common !");
    if (!isArray(enginePath)) {
        const Viz = React.lazy(async () => {
            // this rely on user's build tool visualization should be in user's local folder whose paranet folder has alias of @dashboard
            const module = await import(`@dashboard/visualization/${enginePath}`);
            console.log("module " + module);
            console.log(module);
            return module
        });
        return <Viz data={data} options={options} />
    }
    const Comps = map((ep) =>
        React.lazy(async () => {
            // this rely on user's build tool visualization should be in user's local folder whose paranet folder has alias of @dashboard
            const module = await import(`@dashboard/visualization/${ep}`);
            console.log(module);
            return module
        })
        , enginePath);
    const Parent = Comps[0];
    const Child = Comps[1];
    return <Parent data={data} options={options}>
        <Child />
    </Parent>
}

export default VizCommon;