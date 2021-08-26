import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import * as React from "react";  // Why this is required?

import 'codemirror/mode/javascript/javascript';

export default function Coder({ code , onChange}) {
    return (
        <CodeMirror
            value={code}
            lazyLoadMode={false}
            options={{
                theme: 'monokai',
                keyMap: 'sublime',
                mode: 'js',
            }}
            onChange={onChange}
        />
    )
}

