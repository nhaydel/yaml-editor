import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { editor } from 'monaco-editor';
import { setDiagnosticsOptions } from 'monaco-yaml';

// NOTE: using loader syntax becuase Yaml worker imports editor.worker directly and that
// import shouldn't go through loader syntax.
// eslint-disable-next-line import/no-webpack-loader-syntax
import EditorWorker from 'worker-loader!monaco-editor/esm/vs/editor/editor.worker?filename=editor.worker.js';
// eslint-disable-next-line import/no-webpack-loader-syntax
import YamlWorker from 'worker-loader!monaco-yaml/lib/esm/yaml.worker?filename=yaml.worker.js';

window.MonacoEnvironment = {
    getWorker(workerId, label) {
        if (label === 'yaml') {
            return new YamlWorker();
        }
        return new EditorWorker();
    },
};


function Editor(props) {
    const editorRef = useRef();
    const [currentEditor, setcurrentEditor] = useState();

    setDiagnosticsOptions({
        validate: true,
        enableSchemaRequest: true,
        format: true,
        hover: true,
        completion: true,
        schemas: [
            {
                // Id of the first schema
                uri: "https://cdisc.org/rules/1-0",
                // Associate with our model
                fileMatch: ['*'],
                schema: props.schema
            },
        ],
    });

    /* Initialize the editor */
    useEffect(() => {
        if (editorRef.current) {
            console.log(editorRef.current)
            setcurrentEditor(editor.create(editorRef.current, {
                language: 'yaml',
                theme: "vs-dark",
                //path: rule.name,
            }));
        }
    }, []);

    /* Load the editor with a new value */
    useEffect(() => {
        if (currentEditor) {
            currentEditor.setValue(props.value);
        }
    }, [currentEditor, props.value]);



    return (
        <>
            <div ref={editorRef} style={{ width: props.width, height: props.height }} />
        </>
    );
}

export default Editor;