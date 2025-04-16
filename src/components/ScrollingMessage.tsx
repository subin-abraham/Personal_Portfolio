'use client';

import React from 'react';
import '@/style/marquee.css';

interface ScrollingMessageProps {
    message: string;
}

const ScrollingMessage: React.FC<ScrollingMessageProps> = ({ message }) => {
    if (!message || !message.trim()) {
        return null;
    }

    return (
        <div className="marquee-container border-b border-blue-300">
            <div className="marquee-content text-blue-700 font-medium py-2 px-4">
                {message}
            </div>
        </div>
    );
};

export default ScrollingMessage;
