'use client';

import React, {memo} from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"));

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

export default TextEditor;
