import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";

function HeroSection(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref: React.Ref<HTMLDivElement>
) {
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (hasAnimated.current) {
      return;
    }
    gsap.fromTo(
      ".initial-animation",
      { color: "white", opacity: 0, filter: "blur(8px)" },
      {
        keyframes: [
          {
            color: "#6387a4",
            opacity: 1,
            filter: "blur(1px)",
            duration: 0.1,
            y: -20,
          },
          { color: "#000", filter: "blur(0px)", duration: 0.05 },
        ],
        ease: "power1.inOut",
        duration: 1,
        repeat: 1,
        overwrite: "auto",
        stagger: 0.15,
      }
    );
    hasAnimated.current = true;
    return () => {
      gsap.killTweensOf(".initial-animation");
    };
  }, []);

  return (
    <section
      ref={ref}
      className=" h-[200vh] absolute w-full  overflow-hidden flex flex-col gap-1 md:gap-2 items-start justify-start p-5 sm:p-5  md:p-20 pt-20 md:pt-24"
    >
      <h1 className="initial-animation text-4xl md:text-7xl font-merriweather text-black uppercase font-semibold">
        Stay{" "}
        <span className="font-merriweather lowercase font-light  text-black/50 italic">
          refreshed
        </span>
      </h1>
      <h1 className="initial-animation text-4xl md:text-7xl font-merriweather text-black uppercase font-semibold">
        on the go with
      </h1>
      <h1 className="initial-animation text-4xl md:text-7xl font-merriweather text-black uppercase font-semibold">
        every sip.
      </h1>
      <p className="initial-animation opacity-0  md:pt-12 text-black/30 font-semibold w- md:w-[40vw] 2xl:w-[30vw] md:leading-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s
      </p>
    </section>
  );
}

const Hero = forwardRef(HeroSection);

export default Hero;
