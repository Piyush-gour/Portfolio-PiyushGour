import React, { useMemo } from 'react';

const StarsBackground = () => {
    // Generate a random array of 50 stars
    // useMemo ensures this only runs once and stars don't randomly re-render during state changes
    const stars = useMemo(() => Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 2 + 1; // 1px to 3px
        const style = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            '--duration': `${Math.random() * 3 + 2}s`,
            '--delay': `${Math.random() * 2}s`,
            '--drift-duration': `${Math.random() * 20 + 15}s`,
        };
        return <div key={i} className="star animate-twinkle" style={style}></div>;
    }), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars}
        </div>
    );
};

export default React.memo(StarsBackground);
