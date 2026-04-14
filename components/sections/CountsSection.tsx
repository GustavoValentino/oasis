"use client";
import React from "react";
import CountUp from "react-countup";

interface CountItem {
  end: number;
  duration: number;
  suffix: string;
  label: string;
}

interface CountsProps {
  counts: CountItem[];
}

const Counts: React.FC<CountsProps> = ({ counts }) => {
  return (
    <div className="grid grid-cols-1 py-[8%] sm:grid-cols-3 gap-12 px-[2%] md:px-[8%] xl:px-[12%]">
      {counts.map((count, index) => (
        <div key={index} className="text-center">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none"
            style={{ WebkitTextStroke: "2px white", color: "transparent" }}
          >
            <CountUp
              start={0}
              end={count.end}
              duration={count.duration}
              enableScrollSpy
            />
            {count.suffix}
          </h2>
          <p className="text-gray-300 text-lg font-semibold mt-3">
            {count.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counts;
