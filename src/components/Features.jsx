import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import { features, featureSequence } from "../constants/index.js";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import MacbookModel from "./models/Macbook.jsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index.js";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const { setTexture } = useMacbookStore();


    useEffect(() => {
        featureSequence.forEach((feature) => {
            const v = document.createElement('video');

            Object.assign(v, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            });

            v.load();
        })
    }, []);

    useGSAP(() => {

        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom  top',
                scrub: 1,
                pin: true,
            }
        });


        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom  top',
                scrub: 1,
            }
        })


        if (groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut' })
        }


        timeline
            .call(() => setTexture('/videos/feature-1.mp4'))
            .to('.box1', { opacity: 1, y: 0, delay: 1 })

            .call(() => setTexture('/videos/feature-2.mp4'))
            .to('.box2', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-3.mp4'))
            .to('.box3', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-4.mp4'))
            .to('.box4', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-5.mp4'))
            .to('.box5', { opacity: 1, y: 0 })
    }, []);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.065 : 0.1} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    useGSAP(() => {
        gsap.from('.feature-title', {
            scrollTrigger: {
                trigger: '#features',
                start: 'top bottom',
                end: 'top center',
                scrub: 1,
            },
            y: 100,
            scale: 0.9,
            opacity: 0,
            filter: 'blur(20px)',
            ease: "power2.out"
        });
    }, []);

    return (
        <section id="features" className="relative -mt-20 lg:-mt-40">
            <h2 className="feature-title text-white font-semibold text-3xl lg:text-8xl text-center max-w-3xl mx-auto z-50 relative pointer-events-none">See it all in a new light.</h2>

            <Canvas id="f-canvas" className="!w-full !h-dvh relative z-40" camera={{}}>
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('max-w-xs absolute', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p className="font-semibold text-base lg:text-xl text-dark-100">
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features

