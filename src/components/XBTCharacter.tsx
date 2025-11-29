import { motion } from 'framer-motion';

interface XBTCharacterProps {
    className?: string;
}

export default function XBTCharacter({ className = '' }: XBTCharacterProps) {
    return (
        <motion.div
            className={`drop-shadow-thick ${className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
        >
            <img
                src="/xbt2.jpg"
                alt="XBT Character"
                className="w-full h-full object-contain"
                style={{ imageRendering: 'crisp-edges' }}
            />
        </motion.div>
    );
}
