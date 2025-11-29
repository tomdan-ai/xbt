export default function NewsTicker() {
    return (
        <section className="relative w-full bg-[#f4e04d] overflow-hidden py-3 md:py-4 z-20 border-y-4 border-black">
            <div className="whitespace-nowrap animate-marquee">
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
                <span className="text-2xl md:text-4xl font-bold mx-4 md:mx-8">$POLYXBT</span>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
