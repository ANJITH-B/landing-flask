import TextAnimation from "@/ui/TextAnimation";
import { forwardRef, HTMLElementType } from "react";

const Outro = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    return (
        <section className="h-[60dvh] w-full bg-[#e0dfdf] overflow-hidden flex flex-col gap-10 items-start justify-start pt-24 p-20">
            <TextAnimation phrase={['Stay refreshed ', 'on the go with every sip.']} className="text-8xl font-semibold text-black w-[50vw] leading-24" />
            <p className="text-2xl text-black/30 w-[40vw] leading-10">Whether it’s a workout or a workday, our vacuum-insulated bottle keeps pace with you.</p>
        </section>
    );
});

export default Outro;
