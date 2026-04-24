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
    <div className="grid grid-cols-1 py-[10%] sm:grid-cols-3 gap-12 px-[2%] md:px-[8%] xl:px-[12%] bg-black/20">
      {counts.map((count, index) => (
        <div key={index} className="text-center group">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none transition-all duration-500 group-hover:scale-110"
            style={{
              WebkitTextStroke: "2px rgba(59, 130, 246, 0.5)", // Stroke azul suave
              color: "transparent",
            }}
          >
            <CountUp
              start={0}
              end={count.end}
              duration={count.duration}
              enableScrollSpy
            />
            {count.suffix}
          </h2>
          <p className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-bold mt-4">
            {count.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counts;
