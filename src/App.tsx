import Layout from './Layout';
import Hero from './components/Hero';
import NewsTicker from './components/NewsTicker';
import HowItWorks from './components/HowItWorks';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <Layout>
      <Hero />
      <NewsTicker />
      <HowItWorks />
      <Tokenomics />

      {/* Banner Section */}
      <section className="relative min-h-screen bg-[#60a5fa] flex items-center justify-center py-8 md:py-0">
        <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
          <div className="hand-drawn overflow-hidden drop-shadow-thick transform hover:scale-105 transition-transform duration-500 max-w-7xl w-full">
            <img
              src="/banner.jpe"
              alt="PolyXBT Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] py-6 text-center">
        <p className="text-white text-xl font-bold text-shadow-medium">
          Join the $POLYXBT Community! 🚀
        </p>
        <p className="text-[#60a5fa] mt-2">
          <a href="https://polyxbt.xyz" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            polyxbt.xyz
          </a>
        </p>
      </footer>
    </Layout>
  );
}

export default App;
