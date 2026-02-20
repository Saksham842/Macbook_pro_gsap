import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const videoRef = useRef(null);

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: '+=300%',
                    scrub: 1,
                    pin: true,
                    onEnter: () => {
                        if (videoRef.current) {
                            videoRef.current.play();
                        }
                    },
                    onLeaveBack: () => {
                        if (videoRef.current) {
                            videoRef.current.pause();
                        }
                    }
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)',
                    duration: 1
                }).to('.content', { 
                    opacity: 1, 
                    y: 0, 
                    ease: 'power1.in',
                    duration: 0.5 
                }, "-=0.3");

            
        }
    }, [isTablet])

    return (
        <section id="showcase" className="relative">
            <div className="media relative lg:overflow-hidden bg-black">
                <video 
                    ref={videoRef}
                    src="/videos/game.mp4" 
                    muted 
                    playsInline 
                    loop
                    preload="auto"
                    className="w-full object-cover object-center pointer-events-none" 
                />
                <div className="mask absolute h-full top-0 lg:-top-20 xl:top-0">
                    <img 
                        src="/mask-logo.svg" 
                        className="h-full scale-150 lg:scale-100"
                        style={{ transform: !isTablet ? 'matrix(80, 0, 0, 80, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 0)' }}
                    />
                </div>
            </div>

            <div className="content relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0">
                <div className="container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20">
                    <div className="lg:max-w-md">
                        <h2 className="showcase-text font-semibold text-3xl lg:text-7xl text-white">Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p className="showcase-text">
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p className="showcase-text">
                                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                            </p>
                            <p className="showcase-text">
                                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                            </p>
                            <p className="showcase-text text-primary">Learn more about Apple Intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="showcase-text space-y-2">
                            <p>Up to</p>
                            <h3 className="font-semibold text-xl lg:text-5xl text-white">4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="showcase-text space-y-2">
                            <p>Up to</p>
                            <h3 className="font-semibold text-xl lg:text-5xl text-white">1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase

