import React, { useEffect, useState } from 'react';

const Toast = ({ message, type, resetToastMessage }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                resetToastMessage();
            }, 3000); // Toast will be visible for 3 seconds

            return () => clearTimeout(timer);
        }
    }, [message, type]);

    if (!isVisible) return null;

    const toastClass = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    }[type] || 'bg-gray-500';

    return (
        <div className={`fixed z-50 bottom-5 right-5 px-4 py-2 rounded shadow-lg text-white ${toastClass}`}>
            <div className="font-medium">{message}</div>
        </div>
    );
};

export default Toast;