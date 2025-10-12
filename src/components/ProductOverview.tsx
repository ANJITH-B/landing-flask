"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductOverview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textOne = useRef<HTMLDivElement>(null);
    const textTwo = useRef<HTMLDivElement>(null);
    const CircularMask = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=400%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    markers: false,
                },
            });
            tl.fromTo(
                textOne.current,
                { x: 1500, blur: "10px" },
                { x: -1000, duration: 5, blur: "0px" }
            );
            tl.to('.para-top', { opacity: 1, duration: 2, y: 20 }, "-=4.5");
            tl.to('.para-bottom', { opacity: 1, duration: 2, y: -20 }, "-=4.5");
            tl.to('.para-top', { opacity: 0, duration: 2, y: 0 });
            tl.to('.para-bottom', { opacity: 0, duration: 2, y: 0 }, "-=2");
            tl.fromTo(
                CircularMask.current,
                { y: 0, scale: 0 },
                { scale: 50, duration: 3, }
                , "-=1"
            );
            tl.to('.text', { opacity: 1, duration: 2, }, "-=1.5");
            tl.fromTo(
                textTwo.current,
                { x: 1500, blur: "10px" },
                { x: -1500, duration: 5, blur: "0px", }
            );
            tl.to(
                CircularMask.current,
                { opacity: 0, duration: 2, }
            );
            tl.to('.text', { opacity: 0, duration: 1, }, '-=3');
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="product-overview relative w-screen h-[100dvh] bg-[#e0dfdf] overflow-hidden"
        >
            <h1 ref={textOne} className="text-9xl pt-[45vh] absolute font-bold uppercase text-black z-10">GRND Shaker</h1>
            <div ref={CircularMask} className="rounded-full w-10 h-10 absolute inset-0 bg-black m-auto" />
            <h1 ref={textTwo} className="text-9xl w-[150vw] pt-[45vh] absolute font-bold uppercase text-white z-10">GRND Shaker second</h1>

            <div className="para-top opacity-0 absolute top-[10%] left-[15%] text-black">
                <h2 className="text-2xl">Built to last</h2>
                <p className="text-black/60 w-[30vw]">
                    Designed to match your pace, GRND runs all week on a single charge.
                </p>
            </div>
            <div className="para-bottom text-right opacity-0 absolute bottom-[10%] right-[15%] text-black">
                <h2 className="text-2xl">Built to last</h2>
                <p className="text-black/60 w-[30vw]">
                    Designed to match your pace, GRND runs all week on a single charge.
                </p>
            </div>
            <div className="text opacity-0 absolute top-[15%] left-[15%] text-white">
                <div className="icon">⚡</div>
                <div className="divider bg-gray-500 h-[1px] w-full"></div>
                <h2 className="text-2xl">Built to last</h2>
                <p className="text-gray-400 w-[30vw]">
                    Designed to match your pace, GRND runs all week on a single charge.
                </p>
            </div>
            <div className="text opacity-0 absolute bottom-[15%] right-[15%] text-white">
                <div className="icon">⚡</div>
                <div className="divider bg-gray-500 h-[1px] w-full"></div>
                <h2 className="text-2xl">Built to last</h2>
                <p className="text-gray-400 w-[30vw]">
                    Designed to match your pace, GRND runs all week on a single charge.
                </p>
            </div>
        </section>
    );
}
