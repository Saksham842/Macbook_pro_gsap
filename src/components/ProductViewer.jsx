import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx';
import { useMediaQuery } from "react-responsive";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const categories = [
    { 
        id: 'sizes', 
        label: 'Sizes', 
        text: 'Available in 14" and 16" models with M5, M4 Pro, or M4 Max chips.' 
    },
    { 
        id: 'colours', 
        label: 'Colours',
        text: 'Choose between two refined finishes. Space Black or Silver.'
    },
    { 
        id: 'display', 
        label: 'Display',
        text: 'Breathtaking Liquid Retina XDR display with extreme dynamic range and pro color accuracy.',
        image: '/screen/battery_hero__dbhcxpmddnee_large_2x.jpg'
    },
    { 
        id: 'connectivity', 
        label: 'Connectivity', 
        text: 'Every MacBook Pro comes with three Thunderbolt 4 or 5 ports, an HDMI port, a MagSafe 3 port, an SDXC card slot and a headphone jack.',
        image: '/connectivity/pv_connectivity__gmbjtufp5jiq_large_2x.jpg'
    },
];

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const [activeCategory, setActiveCategory] = useState(null);

    const activeCat = categories.find(cat => cat.id === activeCategory);
    const containerRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            }
        });

        tl.fromTo(".pill-anim", 
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
                stagger: 0.1,
                ease: "back.out(1.4)"
            }
        )
        .to(".pill-anim", {
            width: "auto",
            minWidth: "max-content",
            height: "auto",
            borderRadius: "9999px",
            padding: "0.6rem 1.25rem",
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.inOut"
        }, "-=0.4")
        .from(".pill-content", {
            opacity: 0,
            y: 5,
            stagger: 0.1,
            duration: 0.4,
            clearProps: "all"
        }, "-=0.2");

    }, { scope: containerRef });

    return (
        <section id="product-viewer" ref={containerRef} className="relative min-h-[90vh] w-full bg-black flex flex-col items-center pb-40 mb-20 -mt-10 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-5 lg:px-10 relative">
                <div className="relative bg-gradient-to-b from-zinc-900/40 via-zinc-950/20 to-black/90 border border-white/10 rounded-[3.5rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between min-h-[85vh] overflow-hidden backdrop-blur-md shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">

                    {activeCat?.image && (
                        <div className="absolute inset-0 z-0 animate-fade-in" key={activeCat.image}>
                            <img 
                                src={activeCat.image} 
                                alt={activeCat.label} 
                                className="w-full h-full object-cover -scale-x-100"
                            />

                            <div className="absolute inset-0 bg-black/30" />
                        </div>
                    )}


                    <div className="absolute inset-0 bg-gradient-radial from-zinc-500/10 to-transparent pointer-events-none opacity-40 z-10" />


                    <div className="flex flex-col gap-4 z-50 max-w-md self-center">
                        {categories.map((cat) => (
                            <div key={cat.id} className="flex flex-col gap-2">
                                {activeCategory === cat.id ? (

                                    <div className="bg-[#1d1d1f]/90 backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem] text-white animate-slide-in-left max-w-[20rem] lg:max-w-sm shadow-2xl relative">
                                        <button 
                                            onClick={() => setActiveCategory(null)}
                                            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                        <div className="flex flex-col gap-4 min-h-[5rem] lg:min-h-[6rem] justify-center">
                                            <p className="text-base lg:text-lg leading-relaxed font-medium">
                                                <span className="font-bold">{cat.label}.</span> {cat.text}
                                            </p>
                                        </div>
                                        

                                        {cat.id === 'sizes' && (
                                            <div className="flex items-center bg-black/40 backdrop-blur-md rounded-full mt-6 w-fit p-1.5 border border-zinc-800/50">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setScale(0.06); }}
                                                    className={clsx(
                                                        'px-8 py-2.5 rounded-full transition-all duration-300 font-medium text-sm',
                                                        scale === 0.06 ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                                                    )}
                                                >
                                                    14"
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setScale(0.08); }}
                                                    className={clsx(
                                                        'px-8 py-2.5 rounded-full transition-all duration-300 font-medium text-sm',
                                                        scale === 0.08 ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                                                    )}
                                                >
                                                    16"
                                                </button>
                                            </div>
                                        )}

                                        {cat.id === 'colours' && (
                                            <div className="flex items-center bg-black/40 backdrop-blur-md rounded-full mt-6 w-fit px-5 py-3 gap-6 border border-zinc-800/50">
                                                <div
                                                    onClick={(e) => { e.stopPropagation(); setColor('#adb5bd'); }}
                                                    className={clsx(
                                                        'size-7 rounded-full cursor-pointer transition-all duration-300', 
                                                        color === '#adb5bd' ? 'ring-2 ring-white ring-offset-4 ring-offset-black scale-90' : 'bg-[#adb5bd] border border-white/10'
                                                    )}
                                                    style={{ backgroundColor: '#adb5bd' }}
                                                />
                                                <div
                                                    onClick={(e) => { e.stopPropagation(); setColor('#2e2c2e'); }}
                                                    className={clsx(
                                                        'size-7 rounded-full cursor-pointer transition-all duration-300', 
                                                        color === '#2e2c2e' ? 'ring-2 ring-white ring-offset-4 ring-offset-black scale-90' : 'bg-[#2e2c2e] border border-white/10'
                                                    )}
                                                    style={{ backgroundColor: '#2e2c2e' }}
                                                />
                                            </div>
                                        )}


                                        <div className="mt-4 h-1 w-full" />
                                    </div>
                                ) : (

                                    <button
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={clsx(
                                            "pill-anim flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 border w-fit min-w-[10rem] group overflow-hidden",
                                            "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                                        )}
                                    >
                                        <div className="pill-content flex items-center gap-3">
                                            <div className={clsx(
                                                "size-7 flex items-center justify-center rounded-full border transition-colors",
                                                "border-zinc-500 group-hover:border-white"
                                            )}>
                                                {cat.id === 'colours' ? (
                                                    <div className="size-2.5 rounded-full bg-zinc-400" />
                                                ) : (
                                                    <span className="text-lg">+</span>
                                                )}
                                            </div>
                                            <span className="text-lg font-medium">{cat.label}</span>
                                        </div>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>


                    {!activeCat?.image && (
                        <div className="absolute right-[-15%] lg:right-[-25%] top-[70%] -translate-y-1/2 w-[80vw] lg:w-[100vw] h-[120%] pointer-events-auto animate-fade-in z-0">

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-zinc-400/10 blur-[130px] pointer-events-none" />
                            
                            <Canvas 
                                id="canvas" 
                                className="!w-full !h-full"
                                style={{ cursor: 'grab' }}
                                camera={{ position: [0, 1.2, 5.5], fov: 32, near: 0.1, far: 100 }}
                                onPointerDown={(e) => e.target.style.cursor = 'grabbing'}
                                onPointerUp={(e) => e.target.style.cursor = 'grab'}
                            >
                                <StudioLights />
                                <ambientLight intensity={1.5} />
                                <directionalLight position={[10, 10, 5]} intensity={1} />
                                <ModelSwitcher scale={scale} isMobile={isMobile} />
                            </Canvas>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductViewer;
