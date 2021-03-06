import React from 'react';
import { formSelector } from './store'
import {useRecoilValue} from 'recoil';
const FormCommon = ({id, ...props}) => {
    const {enginePath, options, data} = useRecoilValue(formSelector(id));

    const Form = React.lazy(async () => {
        // this rely on user's build tool form should be in user's local folder whose paranet folder has alias of @dashboard
        const module =  await import(`@dashboard/form/${enginePath}`);
        return module
    });
    return <Form options={options} data={data} {...props}/>
}

export default FormCommon;