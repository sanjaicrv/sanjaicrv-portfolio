import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { Terminal, Database, Cpu, Layers, Sparkles, Code2 } from "lucide-react";

const InteractiveProfileCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values to track absolute cursor values on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to dampen card rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { damping: 22, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { damping: 22, stiffness: 180 });

  // Parallax layer depths (translations along Z-axis for layered depth perception)
  const layerZImage = useTransform(rotateX, () => "translateZ(30px)");
  const layerZBadge = useTransform(rotateX, () => "translateZ(55px)");
  const layerZTags = useTransform(rotateX, () => "translateZ(45px)");
  const layerZWidget1 = useTransform(rotateX, () => "translateZ(80px) translateX(-15px) translateY(-10px)");
  const layerZWidget2 = useTransform(rotateX, () => "translateZ(95px) translateX(15px) translateY(10px)");

  // Glare / Reflection effect coordinates and opacity
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glarePosition = useMotionTemplate`${glareX} ${glareY}`;

  // Glow shadow offsets following card coordinates
  const glowX = useSpring(useTransform(rotateY, (r) => r * -1.5), { damping: 25, stiffness: 150 });
  const glowY = useSpring(useTransform(rotateX, (r) => r * 1.5), { damping: 25, stiffness: 150 });

  // Glowing spotlight coordinates tracking
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates from -0.5 to 0.5
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normX);
    y.set(normY);

    // Spotlight local coordinates
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const techIcons = [
    { icon: Terminal, name: "Java" },
    { icon: Cpu, name: "Spring" },
    { icon: Layers, name: "React" },
    { icon: Database, name: "SQL" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
      className="relative flex items-center justify-center cursor-pointer select-none py-12 px-6"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Glow shadow backdrop behind card */}
      {/* Dynamic Glow shadow backdrop behind card */}
      <motion.div
        animate={{
          scale: hovered ? 1.1 : 1,
          opacity: hovered ? 0.85 : 0.4,
          filter: hovered ? "blur(40px)" : "blur(25px)",
        }}
        style={{
          x: glowX,
          y: glowY,
        }}
        className="absolute w-[290px] h-[410px] rounded-2xl bg-gradient-to-tr from-white/10 via-white/5 to-white/10 pointer-events-none transition-all duration-300"
      />

      {/* Main Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          y: hovered ? -12 : [0, -10, 0],
        }}
        transition={
          hovered 
            ? { type: "spring", stiffness: 150, damping: 20 }
            : { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[320px] h-[440px] rounded-2xl border border-white/15 bg-black/[0.15] backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] p-4.5 flex flex-col justify-between overflow-visible group"
      >
        {/* Dynamic radial spotlight overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle 200px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)`,
          }}
        />

        {/* Dynamic holographic glare sweep layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-30 z-20 transition-opacity duration-300"
          style={{
            background: `linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0.1) 45%, transparent 60%)`,
            backgroundPosition: glarePosition,
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating holographic widget 1: Top Left */}
        <motion.div
          style={{ transform: layerZWidget1 }}
          className="absolute -top-3 -left-6 z-40 bg-black/75 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
        >
          <Code2 size={13} className="text-white" />
          <span className="text-[9px] font-black tracking-widest text-white uppercase font-sans">
            Backend Dev
          </span>
        </motion.div>

        {/* Floating holographic widget 2: Bottom Right */}
        <motion.div
          style={{ transform: layerZWidget2 }}
          className="absolute -bottom-2 -right-6 z-40 bg-black/75 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping absolute" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[9px] font-black tracking-widest text-white uppercase font-sans pl-1">
            Java & React
          </span>
        </motion.div>

        {/* Profile Image container (floating layer) */}
        <motion.div
          style={{ transform: layerZImage, transformStyle: "preserve-3d" }}
          className="relative w-full h-[255px] rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-inner flex items-center justify-center"
        >
          <img
            src="/sanjai.jpg"
            alt="Sanjai CRV"
            className="w-full h-full object-cover object-[54%_8%] filter saturate-[1.05] contrast-[1.05] group-hover:scale-[1.08] transition-transform duration-700 ease-out"
          />
        </motion.div>

        {/* Card info footer */}
        <div className="flex flex-col gap-3.5 mt-3" style={{ transformStyle: "preserve-3d" }}>
          <motion.div style={{ transform: layerZBadge }} className="flex justify-between items-center px-1">
            <div>
              <h3 className="font-sans font-black text-xl tracking-tight text-white uppercase leading-none flex items-center gap-1.5">
                Sanjai CRV
                <Sparkles size={14} className="text-white animate-pulse" />
              </h3>
              <p className="font-sans text-[10px] text-white/60 font-bold uppercase tracking-wider mt-2">
                Software Engineer
              </p>
            </div>
            <span className="text-[10px] bg-white/10 border border-white/15 px-2.5 py-0.75 rounded-md text-white/90 font-mono tracking-wider">
              B.Tech IT
            </span>
          </motion.div>

          {/* Tech stack badge list */}
          <motion.div
            style={{ transform: layerZTags }}
            className="flex flex-wrap gap-1.5 mt-0.5 px-1"
          >
            {techIcons.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300"
              >
                <Icon size={10} className="text-white/70" />
                <span className="text-[9px] font-bold text-white/70 uppercase tracking-widest font-sans">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveProfileCard;
