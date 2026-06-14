import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Layers, Database, Eye, Sparkles, LayoutGrid, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Skill {
  name: string;
  iconClass?: string;
  lucideIcon?: any;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    description: "Core coding languages and modern framework engineering systems.",
    skills: [
      { name: "Java", iconClass: "devicon-java-plain colored", color: "#E76F51" },
      { name: "Spring Boot", iconClass: "devicon-spring-original colored", color: "#6DB33F" },
      { name: "React.js", iconClass: "devicon-react-original colored", color: "#61DAFB" },
      { name: "Python", iconClass: "devicon-python-plain colored", color: "#3776AB" },
      { name: "C++", iconClass: "devicon-cplusplus-plain colored", color: "#00599C" },
      { name: "SQL", iconClass: "devicon-mysql-plain colored", color: "#4479A1" },
      { name: "Hibernate", iconClass: "devicon-hibernate-plain colored", color: "#59666C" }
    ]
  },
  {
    title: "Tools, Database & Cloud",
    description: "Cloud container environments, deployments, and developer utilities.",
    skills: [
      { name: "Docker", iconClass: "devicon-docker-plain colored", color: "#2496ED" },
      { name: "Git", iconClass: "devicon-git-plain colored", color: "#F05032" },
      { name: "GitHub", iconClass: "devicon-github-original", color: "#000000" },
      { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored", color: "#FF9900" },
      { name: "Postman", iconClass: "devicon-postman-plain colored", color: "#FF6C37" },
      { name: "Swagger UI", iconClass: "devicon-swagger-plain colored", color: "#85EA2D" }
    ]
  },
  {
    title: "Core CS Fundamentals",
    description: "Data models, low-level design structures, and OOP design philosophies.",
    skills: [
      { name: "DSA", lucideIcon: Terminal, color: "#00B4D8" },
      { name: "LLD", lucideIcon: Code2, color: "#7209B7" },
      { name: "SOLID & OOP", lucideIcon: Cpu, color: "#F72585" },
      { name: "System Design", lucideIcon: Layers, color: "#4CC9F0" },
      { name: "OS / DBMS / CN", lucideIcon: Database, color: "#3F37C9" }
    ]
  },
  {
    title: "AI & Computer Vision",
    description: "Object defect classification models and neural network data pipelines.",
    skills: [
      { name: "YOLOv8 AI", lucideIcon: Eye, color: "#FF007F" },
      { name: "OpenCV", iconClass: "devicon-opencv-plain colored", color: "#5C3EE8" },
      { name: "Roboflow", lucideIcon: Sparkles, color: "#00FFCC" },
      { name: "Augmentation", lucideIcon: LayoutGrid, color: "#FFA07A" }
    ]
  }
];

const SkillsPhilosophy = () => {
  return (
    <section className="min-h-screen w-full bg-white text-black font-sans px-6 py-28 md:px-12 lg:px-16 overflow-hidden relative z-10 select-none">
      {/* Inline styles for seamless infinite marquee loop and hover translations */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll var(--speed, 25s) linear infinite;
        }
        .menu-item-hover:hover .marquee-overlay {
          transform: translateY(0);
        }
      `}</style>

      {/* Technical blueprint grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "center top",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)"
        }}
      />

      <div className="max-w-[1600px] mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 text-left">
            <span className="text-[10px] font-black tracking-[0.25em] text-neutral-400 uppercase font-mono flex items-center gap-1.5">
              <Sparkles size={11} className="animate-pulse text-neutral-400" /> 03 // Core Ecosystem
            </span>
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-black uppercase tracking-tight mt-3 text-left text-neutral-900">
              Developer Skills
            </h2>
          </div>
          <div className="lg:col-span-8 text-left">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-neutral-700 max-w-4xl font-sans italic border-l-2 border-neutral-300 pl-6">
              "The function of good software is to make the complex appear to be simple."
            </blockquote>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-neutral-400 pl-6">— Grady Booch // OOP & System Design Philosophy</p>
          </div>
        </div>

        {/* Interactive Menu List */}
        <div className="w-full border-t border-neutral-200 mt-16 flex flex-col">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="menu-item-hover relative overflow-hidden min-h-[110px] py-4 md:py-0 border-b border-neutral-200 flex items-center justify-between px-6 md:px-12 transition-colors duration-300 hover:border-neutral-400 cursor-pointer group"
            >
              {/* Default Row Content */}
              <div className="flex items-center gap-6 md:gap-10 z-10 relative flex-wrap">
                <span className="text-xs md:text-sm font-mono text-neutral-400 select-none">
                  0{index + 1}
                </span>
                <h3 className="text-[clamp(1.25rem,4.5vw,2.25rem)] font-black uppercase tracking-tight text-neutral-400 group-hover:text-black transition-colors duration-300 select-none">
                  {category.title}
                </h3>
              </div>
              <ArrowUpRight size={22} className="text-neutral-300 group-hover:text-black group-hover:rotate-45 transition-all duration-300 z-10" />

              {/* Sliding Marquee Overlay */}
              <div className="marquee-overlay absolute inset-0 bg-neutral-50 border-y border-neutral-200 flex items-center translate-y-[101%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none z-20">
                <div className="marquee-track" style={{ "--speed": `${20 + index * 4}s` } as React.CSSProperties}>
                  {/* Render the skills list twice for a seamless infinite loop */}
                  {[...category.skills, ...category.skills].map((skill, sIdx) => {
                    const LucideIcon = skill.lucideIcon;
                    return (
                      <div key={sIdx} className="flex items-center mx-8 md:mx-12 gap-3 md:gap-4 py-4 pr-8 border-r border-neutral-200">
                        <span style={{ color: skill.color }} className="flex items-center justify-center">
                          {skill.iconClass ? (
                            <i className={`${skill.iconClass} text-3xl md:text-4xl`} />
                          ) : (
                            <LucideIcon size={28} />
                          )}
                        </span>
                        <span className="text-sm md:text-lg font-bold text-neutral-800 uppercase tracking-wider font-sans select-none">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsPhilosophy;
