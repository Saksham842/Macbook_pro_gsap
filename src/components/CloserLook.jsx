import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { closerLookItems } from "../constants";

const CloserLook = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const pinTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${scrollRef.current.offsetWidth}`,
                pin: true,
                scrub: 1,

            }
        });

        pinTimeline.to(scrollRef.current, {
            x: () => -(scrollRef.current.scrollWidth - window.innerWidth),
            ease: "none",
        });


        gsap.from(".closer-look-heading", {
            scrollTrigger: {
                trigger: ".closer-look-heading",
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
        });


        gsap.from(".closer-look-card", {
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 70%",
            },
            opacity: 0,
            x: 100,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="h-screen w-screen overflow-hidden bg-black relative flex flex-col justify-center">
            <div className="container mx-auto px-5 lg:px-10 mb-10 pt-20">
                <h2 className="closer-look-heading text-white font-semibold text-4xl lg:text-7xl">
                    Take a <span className="text-zinc-500">closer look.</span>
                </h2>
            </div>

            <div ref={scrollRef} className="flex gap-10 px-5 lg:px-10 w-max h-[60vh] lg:h-[70vh] items-center">
                {closerLookItems.map((item) => (
                    <div key={item.id} className="closer-look-card w-[80vw] lg:w-[45vw] h-full flex-shrink-0 relative rounded-[3rem] overflow-hidden bg-[#161617] group">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16 flex flex-col gap-2 max-w-[80%]">
                            <h3 className="text-white text-2xl lg:text-4xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-base lg:text-xl font-medium">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CloserLook;
