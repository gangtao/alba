import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import * as React from "react";  // Why this is required?

export default function Coder({ code , onChange}) {
    return (
        <CodeMirror
            value={code}
            options={{
                theme: 'monokai',
                keyMap: 'sublime',
                mode: 'jsx',
            }}
            onChange={onChange}
        />
    )
}

