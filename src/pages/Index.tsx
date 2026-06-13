import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Terminal, Cpu, Layers, Database, Cloud } from "lucide-react";

// Components
import About from "./About";
import SplashCursor from "@/components/SplashCursor";
import SelectedWorks from "./SelectedWorks";
import SkillsPhilosophy from "./SkillsPhilosophy";
import Footer from "./Footer";
import Contact from "./Contact";

import Navigation from "@/components/Navigation";
import Magnetic from "@/components/Magnetic";
import ThreeBackground from "@/components/ThreeBackground";
import InteractiveProfileCard from "@/components/InteractiveProfileCard";

// New Creative Components
import NoiseTexture from "@/components/NoiseTexture";
import RecruiterQuickView from "@/components/RecruiterQuickView";

// --- Cursor Follower ---
const CursorFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-white/20 rounded-full pointer-events-none z-[9999] hidden lg:block backdrop-blur-[1.5px] border border-white/30"
      style={{ x, y }}
    />
  );
};

const BrandLogo = () => (
  <div className="fixed top-6 left-6 md:top-8 md:left-10 z-50 mix-blend-difference select-none">
    <h1 className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-white flex items-start">
      SANJAI
      <span className="text-xs md:text-base font-semibold ml-0.5 -mt-0.5 md:-mt-1 text-white/60">®</span>
    </h1>
  </div>
);

const AvailabilityBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -10, x: "-50%" }}
    animate={{ opacity: 1, y: 0, x: "-50%" }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="absolute z-10 left-1/2 hidden md:flex items-center gap-2 pointer-events-none select-none"
    style={{ top: "2.25rem" }}
  >
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
    </span>
    <span className="font-sans font-black text-[9px] tracking-[0.25em] uppercase text-white/90">
      Available for intern
    </span>
  </motion.div>
);

const SocialStrip = () => {
  const socials = [
    { label: "GitHub", href: "https://github.com/sanjaicrv" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjai-crv-3b4813292" },
    { label: "LeetCode", href: "https://leetcode.com/u/sanjaicrv" },
    { label: "Email", href: "mailto:sanjaicrv05@gmail.com" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute z-20 hidden md:flex flex-col items-center select-none"
      style={{ right: "64px", top: "112px", bottom: "194px", justifyContent: "center", gap: "1rem" }}
    >
      <span className="w-[1px] h-8 bg-white/30 flex-shrink-0" />
      {socials.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          title={label}
          className="group flex-shrink-0"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="font-sans font-black text-[10px] tracking-[0.22em] uppercase text-white/60 group-hover:text-white transition-colors duration-300">
            {label}
          </span>
        </a>
      ))}
      <span className="w-[1px] h-8 bg-white/30 flex-shrink-0" />
    </motion.div>
  );
};

const SpinningCTA = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="absolute md:z-30 lg:z-10 hidden md:flex items-center justify-center select-none"
    style={{ bottom: "4rem", right: "4rem" }}
  >
    <style>{`
      @keyframes ctaSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .cta-ring { animation: ctaSpin var(--cta-spin-duration, 10s) linear infinite; transform-origin: center; }
      .cta-wrap:hover .cta-ring { --cta-spin-duration: 3s; }
      .cta-wrap { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      .cta-wrap:hover { transform: scale(1.08); }
    `}</style>
    <a href="#contact" className="cta-wrap group relative flex items-center justify-center w-[130px] h-[130px]" aria-label="Get in touch">
      <svg viewBox="0 0 130 130" className="absolute inset-0 w-full h-full pointer-events-none">
        <circle cx="65" cy="65" r="62" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
      <svg viewBox="0 0 130 130" className="cta-ring absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <path id="cta-circle-path" d="M65,65 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
        </defs>
        <text fill="rgba(255,255,255,0.6)" fontSize="8.5" fontFamily="'Inter', sans-serif" fontWeight="900" letterSpacing="4">
          <textPath href="#cta-circle-path">GET IN TOUCH · GET IN TOUCH · GET IN TOUCH ·&nbsp;</textPath>
        </text>
      </svg>
      <span className="absolute inset-4 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out" style={{ transformOrigin: "center" }} />
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 w-6 h-6 text-white group-hover:text-black" style={{ transition: "color 0.3s ease" }}>
        <path d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </a>
  </motion.div>
);

const MobileSocialStrip = () => {
  const socials = [
    { label: "Github", icon: Github, href: "https://github.com/sanjaicrv" },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sanjai-crv-3b4813292" },
    { label: "LeetCode", icon: Code2, href: "https://leetcode.com/u/sanjaicrv" },
    { label: "Email", icon: Mail, href: "mailto:sanjaicrv05@gmail.com" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-6 select-none"
    >
      {socials.map(({ label, icon: Icon, href }) => (
        <a key={label} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors duration-300 block">
          <Icon size={18} strokeWidth={2.5} />
        </a>
      ))}
    </motion.div>
  );
};

// --- Typing tags subtitle component ---
const TypingText = () => {
  const words = ["Software Engineer", "Full Stack Developer", "Backend Specialist"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1600);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <span className="text-white font-mono tracking-wider">
      {text}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

// --- Orbiting 3D Icon Badges wrapper ---
interface OrbitIconProps {
  delay: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  radius: number;
  duration: number;
}

const OrbitIcon = ({ delay, icon: Icon, radius, duration }: OrbitIconProps) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear", delay }}
      className="absolute pointer-events-none"
      style={{ width: radius * 2, height: radius * 2, transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration, ease: "linear", delay }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/85 border border-white/10 flex items-center justify-center text-white/85 shadow-lg backdrop-blur-md"
      >
        <Icon size={12} />
      </motion.div>
    </motion.div>
  );
};

const Index = () => {
  const footerContainerRef = useRef<HTMLDivElement>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: footerContainerRef,
    offset: ["start end", "end end"]
  });

  const footerY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <div className="min-h-screen relative bg-black selection:bg-white selection:text-black">
      {/* Noise grain layout filter */}
      <NoiseTexture />

      {/* Quick summary recruiter overlay modal */}
      <RecruiterQuickView isOpen={quickViewOpen} onClose={() => setQuickViewOpen(false)} />

      <BrandLogo />
      <CursorFollower />
      <Navigation />

      {/* Fixed background About section */}
      <div className="fixed inset-0 z-0 bg-white text-black">
        <About />
      </div>

      {/* Hero Redesign Section */}
      <section className="relative min-h-screen bg-black flex flex-col justify-between px-6 py-12 md:px-16 md:py-16 z-20 overflow-hidden">
        {/* Animated ThreeJS background and soft colored ambient blobs */}
        <ThreeBackground />
        <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-white/[0.003] blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-white/[0.003] blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

        <AvailabilityBadge />
        <SocialStrip />
        <SpinningCTA />
        <div className="hidden lg:block"><SplashCursor /></div>

        <div className="h-[32px] w-full md:hidden" />

        {/* Main Columns layout */}
        <div className="z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1600px] mx-auto my-auto pt-8 md:pt-16 lg:pt-6 pb-12 select-none">
          
          {/* Left Column: Developer credentials info */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Staggered entry headers */}
            <div className="flex flex-col gap-2.5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <span className="w-6 h-[1.5px] bg-white" />
                <TypingText />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-sans font-black text-6xl md:text-8xl lg:text-[6.5rem] xl:text-[8rem] leading-[0.85] tracking-tighter text-white uppercase"
              >
                Sanjai<br />CRV
              </motion.h1>
            </div>

            {/* Role and description summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="font-sans text-sm md:text-base font-medium text-white/70 leading-relaxed max-w-xl tracking-wide mt-6 uppercase"
            >
              Backend-Focused Full Stack Developer specializing in Java, Spring Boot, REST APIs, MySQL, and scalable web applications. Passionate about clean architecture, database optimization, and building high-performance software solutions.
            </motion.p>

            {/* Tech stack badge container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2.5 mt-8 max-w-xl"
            >
              {["Java", "Spring Boot", "React.js", "SQL", "Docker"].map((stack) => (
                <span
                  key={stack}
                  className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 bg-white/[0.03] border border-white/10 hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300 rounded-sm text-white"
                >
                  {stack}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <Magnetic strength={0.25}>
                <button
                  onClick={() => setQuickViewOpen(true)}
                  className="group relative overflow-hidden border border-white bg-white px-6 py-3.5 flex items-center gap-3 transition-colors duration-500 rounded-sm"
                >
                  <span className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative font-sans font-black text-[10px] tracking-[0.25em] uppercase text-black group-hover:text-white transition-colors duration-300 z-10">
                    Recruiter View
                  </span>
                </button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href="#work"
                  className="group relative overflow-hidden border border-white/20 px-6 py-3.5 flex items-center gap-3 hover:border-white transition-colors duration-500 rounded-sm"
                >
                  <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative font-sans font-black text-[10px] tracking-[0.25em] uppercase text-white group-hover:text-black transition-colors duration-300 z-10">
                    Explore Work
                  </span>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: 3D profile interactive card surrounded by orbiting icons */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative items-center min-h-[450px]">
            {/*Orbiting Path Badges */}
            <OrbitIcon delay={0} icon={Terminal} radius={210} duration={14} />
            <OrbitIcon delay={3} icon={Cpu} radius={210} duration={14} />
            <OrbitIcon delay={6} icon={Layers} radius={210} duration={14} />
            <OrbitIcon delay={9} icon={Database} radius={210} duration={14} />
            <OrbitIcon delay={12} icon={Cloud} radius={210} duration={14} />
            
            <InteractiveProfileCard />
          </div>
        </div>


        {/* Scroll indicator or mobile footer */}
        <div className="z-10 flex justify-between items-end w-full max-w-[1600px] mx-auto pt-4 border-t border-white/10 mt-6 select-none">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/40">
            Scroll to explore
          </p>
          <div className="flex gap-4">
            <div className="md:hidden"><MobileSocialStrip /></div>
          </div>
        </div>
      </section>

      {/* Content stack */}
      <div className="relative z-20 w-full bg-transparent">
        <div id="about" className="h-screen w-full pointer-events-none" />

        <div id="work" className="bg-black text-white relative z-20">
          <SelectedWorks />
        </div>

        <div id="skills" className="bg-[#030014] text-white relative z-20">
          <SkillsPhilosophy />
        </div>



        <div id="contact" className="relative z-20 bg-[#08080b] text-white">
          <Contact />
        </div>
      </div>

      {/* Parallax Footer Reveal Stack */}
      <div ref={footerContainerRef} className="relative z-0 h-screen w-full overflow-hidden bg-black text-white">
        <motion.div style={{ y: footerY }} className="h-full w-full">
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
