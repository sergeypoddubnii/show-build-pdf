'use client';
import React, {useState} from 'react';
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
    const [editorState, setEditorState] = useState('');

    const handleChangeEditorState = (e: any) => {
        console.log('e', JSON.stringify(e, null, 4));
        EditorState.createEmpty()
    }

    return (
        <div>
            <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={handleChangeEditorState}
            />;
        </div>
    );
};

export default TextEditor;
