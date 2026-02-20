import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    const appleGradientStyle = {
        background: '#1d1d1f',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
        position: 'relative',
    };

    const appleGradientBeforeStyle = {
        content: '""',
        pointerEvents: 'none',
        position: 'absolute',
        inset: '0px',
        zIndex: -1,
        margin: '-5px',
        borderRadius: '24px',
        background: 'linear-gradient(91deg, #0096ff 0%, #bb64ff 42%, #f2416b 74%, #eb7500 100%)',
    };

    const textGradientStyle = {
        background: 'linear-gradient(91deg, #0096ff 0%, #bb64ff 42%, #f2416b 74%, #eb7500 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const greenGradientStyle = {
        background: 'linear-gradient(90deg, #35a98a 0%, #6dd400 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <section id="highlights" className="container mx-auto lg:py-40 max-lg:px-5">
            <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">There’s never been a better time to upgrade.</h2>
            <h3 className="text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10">Here’s what you get with the new MacBook Pro.</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 text-[#F5F5F7]">
                <div className="left-column flex flex-col justify-between gap-5 opacity-0 -translate-y-5">
                    <div className="h-full bg-[url(/highlight-bg.png)] bg-no-repeat bg-cover p-10 2xl:pt-32 lg:pt-20 rounded-3xl">
                        <img src="/laptop.png" alt="Laptop" />
                        <p className="font-semibold text-4xl max-w-2xs">Fly through demanding tasks up to 9.8x faster.</p>
                    </div>
                    <div className="bg-[#1D1D1F] p-10 rounded-3xl flex items-center gap-7">
                        <img src="/sun.png" alt="Sun" />
                        <p className="font-semibold lg:text-2xl 2xl:text-3xl">A stunning <br />
                            Liquid Retina XDR <br />
                            display.</p>
                    </div>
                </div>
                <div className="right-column flex flex-col justify-between gap-5 opacity-0 -translate-y-5">
                    <div 
                        className="p-10 rounded-3xl flex items-center gap-7 relative"
                        style={appleGradientStyle}
                    >
                        <div style={appleGradientBeforeStyle} className="absolute inset-0 rounded-[24px]" />
                        <img src="/ai.png" alt="AI" className="relative z-10" />
                        <p className="font-semibold lg:text-2xl 2xl:text-3xl relative z-10">Built for <br />
                            <span style={textGradientStyle}>Apple Intelligence.</span></p>
                    </div>
                    <div className="h-full bg-[#1D1D1F] p-10 2xl:pt-32 lg:pt-20 rounded-3xl">
                        <img src="/battery.png" alt="Battery" />
                        <p className="font-semibold text-4xl max-w-sm">Up to
                            <span style={greenGradientStyle}>{' '}14 more hours{' '}</span>
                            battery life.
                            <span className="text-dark-100">{' '}(Up to 24 hours total.)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights

