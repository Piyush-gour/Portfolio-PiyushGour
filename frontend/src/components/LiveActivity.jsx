import React from 'react';
import { Terminal } from 'lucide-react';

const LiveActivity = () => {
    return (
        <div className="flex items-center gap-3 bg-white dark:bg-[#121214] border border-slate-200 dark:border-[#27272a]/60 px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Pulsing Dot */}
            <div className="relative flex items-center justify-center w-2.5 h-2.5 ml-1">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#00d8a1]"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00d8a1] shadow-[0_0_8px_rgba(0,216,161,0.8)]"></span>
            </div>

            {/* Status Text */}
            <div className="flex items-center gap-2">
                <Terminal size={14} className="text-slate-400 dark:text-[#52525b]" />
                <span className="text-[13px] font-medium text-slate-600 dark:text-[#a1a1aa] tracking-wide">
                    Currently coding: <span className="text-slate-900 dark:text-white font-semibold">React Portfolio</span>
                </span>
            </div>
        </div>
    );
};

export default LiveActivity;
