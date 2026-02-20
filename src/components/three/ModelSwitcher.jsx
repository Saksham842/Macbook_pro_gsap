import { useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale])


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#product-viewer",
                start: "top 80%",
            }
        });

        tl.from([smallMacbookRef.current.rotation, largeMacbookRef.current.rotation], {
            y: Math.PI,
            duration: 2.5,
            ease: "power3.out"
        })
        .from([smallMacbookRef.current.scale, largeMacbookRef.current.scale], {
            x: 0,
            y: 0,
            z: 0,
            duration: 2,
            ease: "back.out(1.2)"
        }, "-=2.2");

    }, []);

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        rotation: [0.3, 0, 0],
        azimuth: [-Infinity, Infinity],
        polar: [-Math.PI / 2, Math.PI / 2],
        config: {mass:1, tension: 0, friction: 26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.025 : 0.055} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.01 : 0.035} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
