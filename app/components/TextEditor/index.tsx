'use client';
import React, {memo} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

interface IProps {
    value: string;
    handleChange: (value: string) => void;
}

const TextEditor = ({value, handleChange}:IProps) => {
    return (
        <ReactQuill
            onChange={handleChange}
            theme="snow"
            value={value}
        />
    );
};

export default memo(TextEditor);
