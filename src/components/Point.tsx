import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Point = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "opacity-0 w-1/3 md:w-[20vw] absolute  text-black",
        className
      )}
    >
      <h2 className="text-base md:text-xl font-bold uppercase">
        Built to last
      </h2>
      <p className="text-black/60 pt-2 md:pt-3 text-xs md:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. The industry&apos;s standard dummy text
      </p>
    </div>
  );
};

export default Point;
