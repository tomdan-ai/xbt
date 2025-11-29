import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface ChaosTextProps {
    strings: string[];
    className?: string;
}

export default function ChaosText({ strings, className = '' }: ChaosTextProps) {
    const typedEl = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!typedEl.current) return;

        const typed = new Typed(typedEl.current, {
            strings,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            typed.destroy();
        };
    }, [strings]);

    return <span ref={typedEl} className={className} />;
}
