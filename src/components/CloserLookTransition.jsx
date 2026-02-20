import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CloserLookTransition = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {

        gsap.fromTo(textRef.current, 
            { 
                y: 100,
                opacity: 0,
                scale: 0.8,
                filter: 'blur(10px)'
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full bg-black pt-10 lg:pt-20 pb-20 lg:pb-28 flex items-center justify-center overflow-hidden z-20">
            <div className="container mx-auto px-5">
                <h2 ref={textRef} className="text-white font-semibold text-4xl lg:text-7xl text-center leading-tight tracking-tighter">
                    Take a <span className="text-zinc-500">closer look.</span>
                </h2>
            </div>
        </section>
    );
};

export default CloserLookTransition;
