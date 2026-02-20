import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;


            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            if (isMobile) return;


            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });


            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars = {};

                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                tl.to(selector, vars, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );

    const getImageClasses = (id) => {
        const base = "max-w-40 lg:max-w-[27rem] 2xl:max-w-[35rem] object-cover object-center absolute";
        const map = {
            p1: "bottom-1/2 left-[23%] z-[1] max-sm:left-[33%]",
            p2: "bottom-[40%] right-[17%] z-[3] max-sm:right-[37%]",
            p3: "bottom-1/4 right-[15%] z-[2] max-sm:right-[35%]",
            p4: "bottom-[15%] right-[10%] z-[1] max-sm:right-[30%]",
            p5: "bottom-[20%] left-1/2 -translate-x-1/2 scale-150",
            p6: "bottom-1/4 left-1/4 z-[2] max-sm:left-[35%]",
            p7: "bottom-[5%] left-[15%] z-[3] max-sm:left-[35%]",
        };
        return clsx(base, id, map[id]);
    };

    return (
        <section id="performance" ref={sectionRef} className="w-dvw h-full overflow-hidden pt-20 lg:pt-20 flex flex-col items-center relative">
            <h2 className="font-semibold text-3xl lg:text-6xl text-white max-w-2xl text-center">Next-level graphics performance. Game on.</h2>

             <div className="w-7xl 2xl:w-[100rem] h-[50vh] lg:h-screen relative">
                {performanceImages.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        className={getImageClasses(item.id)}
                        alt={item.alt || `Performance Image #${index + 1}`}
                    />
                ))}
             </div>

            <div className="mx-auto max-w-xl pb-20">
                <p className="font-semibold text-base lg:text-xl text-dark-100 text-center translate-y-10 opacity-0 px-5">
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}
export default Performance

