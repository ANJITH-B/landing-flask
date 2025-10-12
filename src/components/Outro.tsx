import { forwardRef, HTMLElementType } from "react";

const Outro = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    return (
        <section
            ref={ref}
            className="outro flex justify-center items-center bg-black text-white h-[50vh] w-full text-4xl font-bold"
        >
            Don’t Just Train – GRND
        </section>
    );
});

export default Outro;