import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';

export default function Tokenomics() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        ScrollReveal().reveal('.tokenomics-card', {
            duration: 1000,
            distance: '50px',
            origin: 'bottom',
            interval: 200,
            reset: false,
        });
    }, []);

    const distributionData = [
        { label: 'Liquidity', value: '50%', color: '#1e3a8a', icon: '💧' },
        { label: 'Team', value: '10%', color: '#60a5fa', icon: '👥' },
        { label: 'Marketing', value: '10%', color: '#93c5fd', icon: '📢' },
        { label: 'CEX Partnership', value: '10%', color: '#3b82f6', icon: '🤝' },
        { label: 'Burn', value: '5%', color: '#2563eb', icon: '🔥' },
        { label: 'Community', value: '10%', color: '#60a5fa', icon: '🌟' },
        { label: 'Vesting', value: '5%', color: '#93c5fd', icon: '🔒' },
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-[#1e3a8a] overflow-hidden flex flex-col justify-center py-8 md:py-16">
            {/* Wave Separator Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#60a5fa"></path>
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#60a5fa] mb-6 md:mb-8 text-shadow-thick">
                        Tokenomics 💰
                    </h2>

                    {/* Token Info - Larger with Flickering Colors */}
                    <div className="max-w-5xl mx-auto bg-[#f4e04d] hand-drawn p-6 sm:p-8 md:p-12 mb-8 md:mb-12 drop-shadow-thick hover:scale-105 transition-transform animate-flicker">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 text-center">
                            <div>
                                <p className="text-xl sm:text-2xl md:text-3xl text-[#1e3a8a] font-bold mb-2 md:mb-3">Name</p>
                                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-thick">PolyXBT</p>
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl md:text-3xl text-[#1e3a8a] font-bold mb-2 md:mb-3">Ticker</p>
                                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-thick">$POLYXBT</p>
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl md:text-3xl text-[#1e3a8a] font-bold mb-2 md:mb-3">Supply</p>
                                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-thick">10B</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Distribution Cards - Centralized and Larger */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {distributionData.map((item, index) => (
                        <div
                            key={index}
                            className="tokenomics-card bg-white hand-drawn p-6 md:p-10 drop-shadow-thick transform hover:scale-105 transition-transform hover:rotate-1"
                        >
                            <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
                                <div className="text-4xl sm:text-5xl md:text-6xl">{item.icon}</div>
                                <div>
                                    <h4 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-1 md:mb-2">{item.label}</h4>
                                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#60a5fa] text-shadow-light">{item.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
