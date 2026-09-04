import { useState, useEffect } from 'react';

export default function Navigation() {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'resume', 'contact'];
            const scrollPos = window.scrollY + 100;

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
                    setActive(id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Service' },
        { id: 'resume', label: 'Resume' },
        { id: 'contact', label: 'Contact' },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-md sm:max-w-none sm:w-auto">
            {/* Bar */}
            <div className="flex items-center justify-between bg-black/50 text-white rounded-full p-1 pl-3 backdrop-blur-md sm:pl-1">
                {/* Hamburger (mobile only) */}
                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    className="p-2 rounded-full hover:bg-orange-400 transition-colors sm:hidden"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        {menuOpen ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="7" x2="21" y2="7" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="17" x2="21" y2="17" />
                            </>
                        )}
                    </svg>
                </button>

                {/* Desktop links (hidden on mobile) */}
                <div className="hidden sm:flex items-center gap-1 sm:gap-4 md:gap-6 font-medium text-[11px] sm:text-sm md:text-base">
                    {links.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`transition-all px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full ${
                                active === link.id ? 'bg-orange-400' : 'hover:bg-orange-400'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 ${
                    menuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="flex flex-col gap-1 bg-black/70 text-white rounded-2xl p-2 backdrop-blur-md">
                    {links.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={closeMenu}
                            className={`text-center text-sm font-medium px-4 py-3 rounded-xl transition-all ${
                                active === link.id ? 'bg-orange-400' : 'hover:bg-orange-400'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}