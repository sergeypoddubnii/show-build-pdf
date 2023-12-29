'use client';
import React, {useState} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
    const [editorState, setEditorState] = useState();

    const handleChangeEditorState = (value: any) => {
        setEditorState(value)
    }

    return (
        <div>
            <ReactQuill onChange={handleChangeEditorState} theme="snow" />
        </div>
    );
};

export default TextEditor;
