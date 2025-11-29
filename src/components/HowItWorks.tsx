import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        ScrollReveal().reveal('.how-it-works-step', {
            duration: 1000,
            distance: '50px',
            origin: 'bottom',
            interval: 300,
            reset: false,
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-[#60a5fa] overflow-hidden flex flex-col justify-center py-8 md:py-16">
            {/* Wave Separator */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1e3a8a"></path>
                </svg>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-40 h-40 bg-[#93c5fd] rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-[#1e3a8a] rounded-full opacity-20"></div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white mb-4 md:mb-6 text-shadow-thick">
                        How It Works
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl text-[#1e3a8a] font-bold text-shadow-medium">
                        Ask. Analyze. Act.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 items-start lg:items-center max-w-6xl mx-auto">
                    {/* Left Column: Steps */}
                    <div className="space-y-6 md:space-y-10">
                        {/* Step 1 */}
                        <div className="how-it-works-step bg-white hand-drawn p-6 md:p-10 drop-shadow-thick hover:rotate-1">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white drop-shadow-medium">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2 md:mb-4">Ask a Question</h3>
                                    <p className="text-base sm:text-lg md:text-2xl text-gray-800">
                                        User asks the agent a question, for example:{' '}
                                        <span className="font-bold italic">"Would BTC price hit $120k before 31st November, 2025?"</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="how-it-works-step bg-white hand-drawn p-6 md:p-10 drop-shadow-thick hover:-rotate-1">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white drop-shadow-medium">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2 md:mb-4">AI Processes</h3>
                                    <p className="text-base sm:text-lg md:text-2xl text-gray-800 mb-3 md:mb-4">
                                        The AI agent analyzes the question using advanced NLM models and returns a prediction:
                                    </p>
                                    <div className="bg-[#60a5fa] hand-drawn p-4 md:p-8 space-y-2 md:space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Yes ✅</span>
                                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-shadow-medium">39%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">No ❌</span>
                                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-shadow-medium">61%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="how-it-works-step bg-white hand-drawn p-6 md:p-10 drop-shadow-thick hover:rotate-1">
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white drop-shadow-medium">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2 md:mb-4">Make Informed Decisions</h3>
                                    <p className="text-base sm:text-lg md:text-2xl text-gray-800">
                                        Use the AI's prediction to make smarter trades on Polymarket, Fliq, and Limitless! 📈
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Decorative Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center mt-6 lg:mt-0"
                    >
                        <div className="hand-drawn bg-white p-3 md:p-4 drop-shadow-thick rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/xbt.jpeg"
                                alt="PolyXBT AI Agent"
                                className="w-full max-w-xs md:max-w-md rounded-lg border-4 border-black"
                            />
                            <p className="text-center text-xl md:text-2xl font-bold mt-3 md:mt-4 text-[#1e3a8a] font-hand">The Brains 🧠</p>
                        </div>
                    </motion.div>
                </div>

                {/* Community Note */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-10 text-center"
                >
                    <div className="inline-block bg-[#1e3a8a] hand-drawn px-10 py-6 drop-shadow-thick animate-vibrate cursor-pointer">
                        <p className="text-2xl text-white font-bold">
                            🚀 Right now, we're building the community and raising liquidity for AI model development!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
