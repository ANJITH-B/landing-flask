import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Tip = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "text opacity-0 w-1/4 absolute  text-white flex flex-col gap-2",
        className
      )}
    >
      <div className="icon">⚡</div>
      <div className="divider bg-gray-500 h-[1px] w-0"></div>
      <h2 className="text-base md:text-lg font-bold uppercase ">
        Built to last
      </h2>
      <p className="text-gray-400 md:w-[20vw] text-xs md:text-base">
        Designed to match your pace, GRND runs all week on a single charge.
      </p>
    </div>
  );
};

export default Tip;
