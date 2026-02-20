import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ 
            defaults: { ease: "power4.out", duration: 1.2 }
        });

        tl.from(".video-anim", {
            opacity: 0,
            y: -50,
            scale: 0.9,
        })
        .from(".hero-anim-item", {
            opacity: 0,
            scale: 0.5,
            y: 100,
            stagger: 0.15,
            duration: 2,
        }, "<0.3")

        .fromTo(".cta-anim", 
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
                duration: 0.5,
                ease: "back.out(1.2)"
            }, "-=1.2")
        .to(".cta-anim", {
            width: "auto",
            minWidth: "max-content",
            height: "auto",
            borderRadius: "9999px",
            padding: "0.875rem 1.75rem",
            duration: 0.5,
            ease: "power3.inOut"
        })
        .from(".cta-text, .cta-btn", {
            opacity: 0,
            y: 5,
            stagger: 0.08,
            duration: 0.4,
            clearProps: "all"
        }, "-=0.2");
    }, []);


    return (
        <section id="hero" className="h-screen w-full flex flex-col items-center justify-center bg-black relative">
            <div className="relative z-20 flex flex-col items-center justify-center mt-12">
                <h1 className="hero-anim-item font-semibold text-2xl lg:text-5xl 2xl:text-5xl bg-gradient-to-r from-[#d1dada] via-[#919b9b] to-[#515a5a] bg-clip-text text-transparent text-center px-5">
                    MacBook Pro 14″ 
                </h1>
                <img src="/title.png" alt="MacBook Title" className="hero-anim-item container mx-auto w-full max-w-5xl -mt-2" />
            </div>

            <video 
                ref={videoRef} 
                src="/videos/hero.mp4" 
                autoPlay
                muted 
                playsInline 
                className="video-anim relative z-10 mx-auto w-full max-w-6xl max-h-[60vh] object-contain -mt-24 lg:-mt-28"
            />

            <div className="cta-anim relative z-30 flex items-center justify-between bg-neutral-900/90 backdrop-blur-md rounded-full px-7 py-3.5 gap-6 border border-white/10 -mt-8 lg:-mt-12 min-w-[50px] min-h-[50px]">
                <div className="cta-text flex flex-col items-center justify-center text-left whitespace-nowrap">
                    <p className="text-white font-semibold text-xs lg:text-sm"> From ₹169900.00 or ₹26650.00/mo. for 6 mo.</p>
                </div>
                <button className="cta-btn bg-[#0071e3] text-white py-1.5 px-6 rounded-full font-semibold text-xs lg:text-sm cursor-pointer hover:bg-[#0077ed] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out whitespace-nowrap">
                    Buy
                </button>
            </div>
        </section>
    )
}
export default Hero
