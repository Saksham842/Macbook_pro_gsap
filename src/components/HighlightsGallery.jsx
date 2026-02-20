import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { galleryItems } from "../constants";

const HighlightsGallery = () => {
    const sectionRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
            }, 8000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPlaying]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-heading",
                start: "top 85%",
            }
        });

        tl.from(".gallery-heading", {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power3.out",
        })
        .to(".gallery-heading", {
            filter: "brightness(1.5) drop-shadow(0 0 15px rgba(255,255,255,0.3))",
            duration: 1,
            ease: "power2.inOut",
        })
        .to(".gallery-heading", {
            filter: "brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))",
            duration: 1.5,
            ease: "power2.inOut",
        })
        .fromTo(".gallery-nav-anim", 
            { 
                opacity: 0, 
                y: 40,
                scale: 0.6,
                width: 50,
                height: 50,
                borderRadius: "100%",
                padding: 0,
            },
            { 
                opacity: 1, 
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.5)"
            }, "-=1.5")
        .to(".gallery-nav-anim", {
            width: "auto",
            minWidth: "max-content",
            height: "auto",
            borderRadius: "9999px",
            padding: "0.75rem 1.5rem", 
            duration: 0.5,
            ease: "power3.inOut"
        })
        .from(".gallery-nav-content", {
            opacity: 0,
            y: 5,
            duration: 0.4,
            clearProps: "all"
        }, "-=0.2");
    }, { scope: sectionRef });

    useGSAP(() => {
        gsap.to(".gallery-slide", {
            xPercent: -100 * currentIndex,
            duration: 1.5,
            ease: "power2.inOut",
        });
    }, [currentIndex]);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

    return (
        <section id="highlights-gallery" ref={sectionRef} className="w-screen overflow-hidden pt-20 lg:pt-30 pb-10 lg:pb-20 bg-black relative">
            <div className="w-full max-w-7xl px-5 lg:px-10 flex flex-col items-center mx-auto">
                <h2 className="gallery-heading font-semibold text-4xl lg:text-8xl bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent mb-12 lg:mb-20 text-center">
                    Get the highlights.
                </h2>

                <div className="relative w-full h-[70vh] lg:h-[85vh] rounded-[2.5rem] overflow-hidden bg-[#161617] group">
                    <div className="gallery-slide flex h-full">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="w-full h-full flex-shrink-0 relative">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                                
                                <div className="absolute top-10 left-10 lg:top-16 lg:left-16">
                                    <h3 className="text-white text-lg lg:text-2xl font-semibold leading-tight whitespace-pre-line">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                        <div className="gallery-nav-anim flex items-center justify-center bg-black/40 backdrop-blur-xl rounded-full border border-white/10 px-6 py-3 gap-4 min-w-[50px] min-h-[50px]">
                            <div className="gallery-nav-content flex items-center gap-3">
                                {galleryItems.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setCurrentIndex(i);
                                            setIsPlaying(false);
                                        }}
                                        className="relative h-1 rounded-full bg-zinc-600 transition-all duration-300 overflow-hidden"
                                        style={{ width: i === currentIndex ? '2.5rem' : '0.4rem' }}
                                    >
                                        {i === currentIndex && isPlaying && (
                                            <div className="absolute top-0 left-0 h-full bg-white animate-progress-expand" />
                                        )}
                                        {i === currentIndex && !isPlaying && (
                                            <div className="absolute top-0 left-0 h-full w-full bg-white" />
                                        )}
                                    </button>
                                ))}
                            </div>
                            
                            <button 
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="gallery-nav-content ml-2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                {isPlaying ? (
                                    <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                                        <rect x="6" y="4" width="4" height="16" rx="1" />
                                        <rect x="14" y="4" width="4" height="16" rx="1" />
                                    </svg>
                                ) : (
                                    <svg className="w-3.5 h-3.5 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
                                        <path d="M7 4V20L19 12L7 4Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <button 
                            onClick={handlePrev}
                            className="p-2 text-zinc-400 hover:text-white pointer-events-auto transition-all duration-300 hover:scale-125 hover:-translate-x-1"
                        >
                            <svg className="w-10 h-10 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button 
                            onClick={handleNext}
                            className="p-2 text-zinc-400 hover:text-white pointer-events-auto transition-all duration-300 hover:scale-125 hover:translate-x-1"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightsGallery;
