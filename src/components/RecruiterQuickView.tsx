import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Send, CheckCircle, Sparkles } from "lucide-react";

interface RecruiterQuickViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecruiterQuickView = ({ isOpen, onClose }: RecruiterQuickViewProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 select-none">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#09090c] p-6 text-white overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Ambient Lighting Blob */}
            <div className="absolute -top-12 -right-12 w-[180px] h-[180px] bg-white/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start pb-4 border-b border-white/5 relative z-10">
              <div>
                <span className="text-[10px] font-black tracking-[0.25em] text-white/50 uppercase font-sans flex items-center gap-1">
                  <Sparkles size={10} className="animate-pulse" /> Fast Summary
                </span>
                <h3 className="text-2xl font-sans font-black tracking-tight uppercase mt-1">
                  Recruiter Quick View
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white transition-colors"
                aria-label="Close Summary"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Highlights */}
            <div className="flex flex-col gap-5 py-6 text-left relative z-10 font-sans">
              
              {/* Quick elevator bio */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5 font-mono">
                  01 // Elevator Pitch
                </h4>
                <p className="text-xs leading-relaxed text-white/80 font-medium">
                  Software engineer with specialized experience designing secure REST APIs, scaling backend logic with Java & Spring Boot, and building sleek, interactive client-side platforms with React.js. Focused on low-level designs and microservices optimization.
                </p>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 gap-4 select-none">
                <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-lg flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest font-mono">Leetcode Solves</span>
                  <span className="text-lg font-black tracking-tight text-white mt-1">300+ Problems</span>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-lg flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest font-mono">Academic Score</span>
                  <span className="text-lg font-black tracking-tight text-white mt-1">8.1 CGPA</span>
                </div>
              </div>

              {/* Highlight Projects */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5 font-mono">
                  02 // Project Focus
                </h4>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-lg hover:border-white/20 transition-all duration-300">
                    <CheckCircle size={14} className="text-white mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">FinTrack Pro</h5>
                      <p className="text-[10.5px] text-white/60 mt-1 leading-relaxed">
                        Production finance platform. Optimized index queries, reducing MySQL response durations by 40%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-5 relative z-10 font-mono">
              <a
                href="/Sanjai_CRV_Resume.pdf"
                download
                className="flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-200 transition-colors text-black font-black uppercase text-[10px] tracking-widest py-3 rounded-md shadow-lg"
              >
                <FileText size={12} />
                Resume
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white transition-all text-white font-black uppercase text-[10px] tracking-widest py-3 rounded-md"
              >
                <Send size={12} />
                Contact
              </a>
              <button
                onClick={onClose}
                className="flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white font-black uppercase text-[10px] tracking-widest py-3 rounded-md transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RecruiterQuickView;
