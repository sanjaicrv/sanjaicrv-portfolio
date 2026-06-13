import React, { useEffect, useRef, useState } from "react";

const MagicBento = () => {
  return (
    <section className="w-full bg-black text-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-24">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em]">
            More About Me
          </h2>
        </div>

        {/* Strict Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-40">

          <SwissItem
            value={300}
            suffix="+"
            label="LeetCode Problems Solved"
            description="Consistent practice across Arrays, Trees, Graphs, Dynamic Programming, Backtracking, and Sliding Window. FAANG-level interview preparation."
          />

          <SwissItem
            value={15}
            suffix="+"
            label="REST APIs Built"
            description="Production-grade endpoints with JWT auth, Swagger documentation, and optimized database queries across multiple full-stack projects."
          />

          <SwissItem
            value={40}
            suffix="%"
            label="Query Optimization"
            description="Reduced MySQL query execution time through strategic indexing, JOIN optimization, and normalized relational schema design."
          />

          <SwissItem
            value={8}
            suffix=".1"
            label="CGPA at SKCT"
            description="B.Tech Information Technology at Sri Krishna College of Technology, Coimbatore. Strong academic foundation in CS fundamentals."
          />

        </div>
      </div>
    </section>
  );
};

const SwissItem = ({ value, suffix, label, description }: { value: number; suffix: string; label: string; description: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const duration = 1200;
    const startTime = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div ref={ref} className="flex flex-col items-start">
      <span className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-white">
        {label}
      </span>
      <h3 className="mb-6 font-sans text-8xl md:text-9xl font-bold tracking-tight leading-none">
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="max-w-sm font-sans text-base leading-6 text-white/65">
        {description}
      </p>
    </div>
  );
};

export default MagicBento;
