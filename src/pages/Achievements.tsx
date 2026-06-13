import { motion } from "framer-motion";
import CareerTimeline from "@/components/CareerTimeline";
import { Sparkles, Trophy, Award, BookOpen, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#050508] text-white font-sans px-6 py-28 md:px-12 lg:px-16 relative z-10 select-none overflow-hidden">
      {/* Technical blueprint grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "center top",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)"
        }}
      />

      {/* Background glowing blobs */}
      <div className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-white/[0.003] blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute bottom-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-white/[0.003] blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: "15s" }} />

      <div className="max-w-[1600px] mx-auto flex flex-col gap-20 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-4 text-left">
            <span className="text-[10px] font-black tracking-[0.25em] text-white/50 uppercase font-mono flex items-center gap-1.5">
              <Sparkles size={11} className="animate-pulse" /> 04 // Accomplishments
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-3">
              Achievements
            </h2>
          </div>
          <div className="lg:col-span-8 text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/70 max-w-4xl font-sans">
              Quantifiable metrics and timeline milestones tracking competitive solutions, framework designs, system speed optimizations, and academic credentials.
            </h3>
          </div>
        </motion.div>

        {/* Bento Grid Metrics with staggered Framer Motion entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <BentoItem
            value={300}
            suffix="+"
            label="LeetCode Solves"
            description="Consistent DSA problem solving across Arrays, Graphs, DP, and sliding window patterns."
            icon={Trophy}
          />
          <BentoItem
            value={15}
            suffix="+"
            label="REST APIs Built"
            description="Secure endpoints with JWT auth, Swagger docs, and optimized database queries."
            icon={Cpu}
          />
          <BentoItem
            value={40}
            suffix="%"
            label="Database Optimization"
            description="Query speed improvements through indexing, normalization, and JOIN optimizations."
            icon={Award}
          />
          <BentoItem
            value={8}
            suffix=".1"
            label="SKCT CGPA"
            description="B.Tech IT at Sri Krishna College of Technology. Strong academic focus on core CS fundamentals."
            icon={BookOpen}
          />
        </motion.div>

        {/* Timeline of Career Journey */}
        <div className="border-t border-white/10 pt-20 mt-4">
          <div className="mb-16 text-left">
            <span className="text-[10px] font-black tracking-[0.25em] text-white/50 uppercase font-mono">
              Timeline // Milestones
            </span>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mt-1">
              Events & Activities
            </h3>
          </div>
          <CareerTimeline />
        </div>

      </div>
    </section>
  );
};

interface BentoItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: any;
}

const BentoItem = ({ value, suffix, label, description, icon: Icon }: BentoItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const duration = 2000;
    const startTime = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      // Custom easing function for smooth slowing down
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-xl overflow-hidden hover:border-white/30 hover:bg-white/[0.02] transition-all duration-500 flex flex-col justify-between h-[230px] text-left group"
    >
      {/* Spotlight overlay glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500 ease-out z-0"
        style={{
          width: "350px",
          height: "350px",
          background: `radial-gradient(130px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.04), transparent 85%)`,
          left: "-50px",
          top: "-50px",
          opacity: isHovered ? 1 : 0
        }}
      />

      <div className="flex justify-between items-start z-10">
        <span className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
          <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
        </span>
        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest font-mono select-none">Metric</span>
      </div>

      <div className="z-10 mt-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors duration-300">{label}</span>
        <h4 className="text-4.5xl font-sans font-black tracking-tight text-white mt-1.5 leading-none">
          {count}
          {suffix}
        </h4>
        <p className="text-[11.5px] leading-relaxed text-white/50 group-hover:text-white/75 transition-colors duration-500 mt-3 font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Achievements;
