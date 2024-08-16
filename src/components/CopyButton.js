import React, { useState } from 'react';

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className={`bg-blue-500 text-white px-2 py-1 rounded ${copied ? 'bg-green-500' : 'bg-blue-500'
                }`}
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
};

export default CopyButton;
