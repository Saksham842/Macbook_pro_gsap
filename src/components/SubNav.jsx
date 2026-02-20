import { useState, useEffect } from "react";
import clsx from "clsx";

const SubNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = ["Overview", "Tech Specs", "Compare", "Switch from PC to Mac"];

    return (
        <div 
            className={clsx(
                "w-full fixed left-0 flex items-center z-[90] transition-all duration-300 ease-in-out border-b border-white/10 h-14",
                isScrolled ? "top-0 bg-[#1d1d1f]/90 backdrop-blur-md opacity-100" : "-top-14 opacity-0 pointer-events-none"
            )}
        >
            <div className="container mx-auto px-5 2xl:px-0 flex items-center justify-between">
                <a href="#" className="text-white font-semibold text-xl hover:opacity-80 transition-opacity">
                    MacBook Pro
                </a>

                <div className="flex items-center gap-6">
                    <ul className="hidden lg:flex items-center gap-6">
                        {links.map((link) => (
                            <li key={link}>
                                <a 
                                    href="#" 
                                    className="text-xs text-[#F5F5F7] opacity-80 hover:opacity-100 transition-opacity"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-[#0071e3] text-white text-xs px-3 py-1 rounded-full hover:bg-[#0077ed] transition-colors">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
