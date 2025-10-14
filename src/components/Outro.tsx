import { forwardRef } from "react";

function OutroSection(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <section
      ref={ref}
      className="absolute bottom-0 opacity-0 flex justify-center items-center bg-black text-white h-[50vh] w-full text-3xl md:text-4xl font-bold"
    >
      Don’t Just Train – GRND
    </section>
  );
}

const Outro = forwardRef(OutroSection);

export default Outro;
