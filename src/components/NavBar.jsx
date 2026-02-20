import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import clsx from "clsx";

const NavBar = () => {
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

    return (
        <header 
            className={clsx(
                "w-screen fixed left-0 z-[100] flex items-center justify-center bg-black h-14 transition-all duration-300 ease-in-out",
                isScrolled ? "-top-14 opacity-0 pointer-events-none" : "top-0 opacity-100"
            )}
        >
            <nav className="container mx-auto flex items-center justify-between px-5 2xl:px-0">
                <img 
                    src="/logo.svg" 
                    alt="Apple logo" 
                    className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out" 
                />

                <ul className="flex items-center justify-center gap-8">
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a 
                                href={label} 
                                className="hidden md:block text-white opacity-80 font-[Regular] text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-center gap-3">
                    <button className="bg-transparent border-none outline-none cursor-pointer">
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button className="bg-transparent border-none outline-none cursor-pointer">
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar

