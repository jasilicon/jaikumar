import { useState, useEffect } from 'react';
import profileImg from '../assets/images/cutout.webp';
import './Hero.css';

export default function Hero() {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setPhase(1), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="relative flex flex-col items-center pt-20 pb-0 overflow-hidden">

            {/* PHASE 0: Comic Pan Overlay */}
            {phase === 0 && (
                <div className="absolute inset-0 z-30 comic-pan-box"></div>
            )}

            {/* "I'm Jaikumar," text — fades in first */}
            <span className={`text-4xl md:text-5xl text-center mt-6 mb-2 font-medium transition-all duration-700 delay-100 ${phase === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                I'm{' '}
                <span className="text-white tracking-[2px] bg-orange-400/80 rounded-full px-6 py-1">
                    Jaikumar
                </span>
                ,
            </span>

            <div className="relative flex flex-col items-center lg:mt-4">

                {/* Orange circle — fades in second */}
                <div className={`absolute bottom-0 w-[150vw] h-[75vw] sm:w-[750px] sm:h-[420px] md:w-[900px] md:h-[480px] lg:w-[1000px] bg-orange-500/70 rounded-t-full -z-10 transition-all duration-700 delay-300 ${phase === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}></div>

                {/* Cutout image — fades in last */}
                <img
                    src={profileImg}
                    alt="Jaikumar"
                    className={`relative z-0 object-contain h-[50vh] md:h-[80vh] lg:h-[100vh] -mb-11 transition-all duration-700 delay-500 ${phase === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                />

                {/* Buttons — fade in with image */}
                <div className={`bg-white/30 rounded-full border border-white/40 flex gap-2 p-2 backdrop-blur-md -mt-6 relative z-100 transition-all`}>
                    <a href="#services" className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full">
                        My Services
                    </a>
                    <a href="#contact" className="text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-white/50 transition">
                        Hire Me
                    </a>
                </div>
            </div>
        </section>
    );
}
