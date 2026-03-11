import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const LiveActivity = () => {
    const [status, setStatus] = useState('green');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const updateStatus = () => {
            const now = new Date();
            const hour = now.getHours();
            const day = now.getDay();

            if (day === 0) {
                setStatus('red');
                setMessage('Sunday Off');
            } else if (hour >= 23 || hour < 9) {
                setStatus('red');
                setMessage('Unavailable for work');
            } else {
                setStatus('green');
                setMessage('');
            }
        };

        updateStatus();
        const interval = setInterval(updateStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    const dotColor = status === 'red' ? 'bg-[#ef4444]' : 'bg-[#00d8a1]';
    const shadowColor = status === 'red' ? 'shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'shadow-[0_0_8px_rgba(0,216,161,0.8)]';

    return (
        <div className="flex items-center gap-3 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Pulsing Dot */}
            <div className="relative flex items-center justify-center w-2.5 h-2.5 ml-1">
                <span className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping ${dotColor}`}></span>
                <span className={`relative inline-flex w-2 h-2 rounded-full ${shadowColor} ${dotColor}`}></span>
            </div>

            {/* Status Text */}
            <div className="flex items-center gap-2">
                <Terminal size={14} className="text-slate-400 dark:text-[#52525b]" />
                <span className="text-[13px] font-medium text-slate-600 dark:text-[#a1a1aa] tracking-wide">
                    {status === 'red' ? (
                        <span className="text-slate-900 dark:text-white font-semibold">{message}</span>
                    ) : (
                        <>Currently coding: <span className="text-slate-900 dark:text-white font-semibold">React Portfolio</span></>
                    )}
                </span>
            </div>
        </div>
    );
};

export default LiveActivity;
