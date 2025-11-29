import ThreeCharacter from './ThreeCharacter';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#1e3a8a] flex flex-col">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#60a5fa] rounded-full"></div>
                <div className="absolute top-60 right-20 w-24 h-24 bg-[#93c5fd] rounded-full"></div>
                <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#60a5fa] rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex-grow flex flex-col items-center justify-center px-4 py-8">

                {/* Text Content - Centralized */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6"
                >
                    {/* Title */}
                    <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-[#60a5fa] text-shadow-thick leading-none">
                        $POLYXBT
                    </h1>

                    {/* Tagline */}
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-shadow-medium px-4">
                        The first AI prediction agent built on Solana
                    </p>

                    {/* Description */}
                    <div className="bg-[#60a5fa] hand-drawn p-6 md:p-10 lg:p-12 drop-shadow-thick transform hover:rotate-1 transition-transform mx-auto inline-block">
                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold">
                            Tailored for traders on{' '}
                            <a href="https://polymarket.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1e3a8a]">
                                Polymarket
                            </a>
                            ,{' '}
                            <a href="https://www.fliq.one/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1e3a8a]">
                                Fliq
                            </a>
                            , and{' '}
                            <a href="https://limitless.exchange/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1e3a8a]">
                                Limitless
                            </a>
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center pt-4 md:pt-6">
                        <motion.a
                            href="https://polyxbt.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-playful bg-[#f4e04d] text-black drop-shadow-thick inline-block text-center text-2xl sm:text-3xl md:text-4xl px-8 md:px-12 py-4 md:py-5"
                        >
                            BUY $POLYXBT 🍌
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-playful bg-white text-[#1e3a8a] drop-shadow-thick text-2xl sm:text-3xl md:text-4xl px-8 md:px-12 py-4 md:py-5"
                        >
                            Chart 📈
                        </motion.button>
                    </div>
                </motion.div>

                {/* 3D Character - Below text, much larger */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full h-[400px] sm:h-[500px] md:h-[800px] lg:h-[1000px] mt-4 md:mt-6 relative z-0"
                >
                    <ThreeCharacter className="w-full h-full" />
                </motion.div>

            </div>
        </section>
    );
}
