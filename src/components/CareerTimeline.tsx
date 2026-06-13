import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, Code, Sparkles, BookOpen } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2026",
    title: "Low-Level Design & AI Integrations",
    subtitle: "Projects & Automation Focus",
    description: "Designed a SOLID-compliant Parking Lot System in Java with O(1) allocation. Initiated YOLOv8-powered Jewellery Defect Detection system for Emerald Jewel Industry.",
    icon: Code,
    color: "from-white to-zinc-500"
  },
  {
    year: "2025",
    title: "Netrix'25 & Yugam Competitive Coding",
    subtitle: "4th Place Codethon / Finalist Yugam'25",
    description: "Outranked 100+ participants in Netrix'25 Codethon. Qualified as finalist in Yugam 2025 competitive programming events focused on advanced DSA.",
    icon: Award,
    color: "from-zinc-300 to-zinc-600"
  },
  {
    year: "2025",
    title: "FinTrack Pro Launch",
    subtitle: "Production-Grade Full Stack Project",
    description: "Architected a Java Spring Boot + React dashboard with 15+ secured endpoints, JWT logic, and MySQL optimization reducing queries execution by 40%.",
    icon: Sparkles,
    color: "from-zinc-400 to-zinc-500"
  },
  {
    year: "2024",
    title: "Smart India Hackathon 2024",
    subtitle: "Participant & Threat Detection Architect",
    description: "Built an AI-powered Gunshot Detection System incorporating sound localization and machine learning for real-time safety mapping.",
    icon: Calendar,
    color: "from-zinc-500 to-zinc-700"
  },
  {
    year: "2023 -- 2027",
    title: "B.Tech Information Technology",
    subtitle: "Sri Krishna College of Technology",
    description: "Acquiring a solid foundation in core Computer Science: Algorithms, Low-Level Designs, System Design, Operating Systems, DBMS, and Networks. CGPA: 8.1 / 10.",
    icon: GraduationCap,
    color: "from-white to-zinc-600"
  },
  {
    year: "2023",
    title: "Microsoft NLP Workshop",
    subtitle: "Microsoft, Bangalore",
    description: "Gained industry exposure to enterprise AI application pipelines and transformer-based NLP model implementations.",
    icon: BookOpen,
    color: "from-zinc-600 to-zinc-800"
  }
];

const CareerTimeline = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12 font-sans select-none">
      {/* Center timeline vertical guide line */}
      <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-white/10 -translate-x-1/2 hidden md:block" />
      <div className="absolute left-9 top-0 bottom-0 w-[1.5px] bg-white/10 md:hidden" />

      {/* Events List */}
      <div className="flex flex-col gap-12">
        {timelineEvents.map((event, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-start md:justify-between w-full ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot icon node */}
              <div className="absolute left-9 md:left-1/2 top-2 z-10 w-9 h-9 rounded-full bg-black border border-white/15 flex items-center justify-center -translate-x-1/2 shadow-xl ring-4 ring-[#030014]">
                <event.icon size={15} className="text-white" />
              </div>

              {/* Event Content Panel */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                  isLeft ? "md:text-right" : "md:text-left"
                }`}
              >
                {/* Glass Card */}
                <div className="relative p-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 shadow-lg group">
                  {/* Subtle color highlight dot on hover */}
                  <div className={`absolute top-4 ${isLeft ? 'right-4' : 'left-4'} w-2 h-2 rounded-full bg-gradient-to-r ${event.color} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

                  <span className="inline-block text-[10px] font-black tracking-widest text-white/50 uppercase font-mono mb-2">
                    {event.year}
                  </span>
                  <h4 className="text-base font-black text-white uppercase tracking-tight leading-tight">
                    {event.title}
                  </h4>
                  <h5 className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">
                    {event.subtitle}
                  </h5>
                  <p className="text-xs text-white/70 leading-relaxed font-medium mt-3.5 border-t border-white/5 pt-3.5">
                    {event.description}
                  </p>
                </div>
              </motion.div>

              {/* Invisible spacer block for desktop symmetry */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerTimeline;
