import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Sparkles, Check, AlertTriangle } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6_hmNogiRhIAkAdfWU9q0wQb2WdEvswPCTHCd9U-giehtMTgKcmZq2NsQES-XYuxd/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const body = new URLSearchParams(formData);

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="min-h-screen w-full bg-[#08080b] text-white font-sans px-6 py-24 md:px-12 lg:px-16 overflow-y-auto flex items-center justify-center relative z-10 select-none">
      {/* Shifting white ambient blob */}
      <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-white/[0.003] blur-[100px] pointer-events-none" />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 max-w-[1400px] w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column - Narratives */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full py-4 text-left">
          <motion.div variants={itemVariants}>
            <span className="text-[10px] font-black tracking-[0.25em] text-white/50 uppercase font-mono flex items-center gap-1.5">
              <Sparkles size={11} className="animate-pulse" /> 04 // Connect
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-[0.9] tracking-tighter text-white mt-4">
              Get in <br />
              touch <span className="inline-block text-white">→</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-col gap-6">
            {/* Quick social channels */}
            <div className="flex items-center gap-4">
              <span className="p-3 bg-white/5 border border-white/10 rounded-lg text-white">
                <Mail size={16} />
              </span>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40 font-mono">Email Address</span>
                <p className="text-sm font-semibold mt-0.5 text-white/90">sanjaicrv05@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 bg-white/5 border border-white/10 rounded-lg text-white">
                <MapPin size={16} />
              </span>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40 font-mono">Location Base</span>
                <p className="text-sm font-semibold mt-0.5 text-white/90">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Glowing Form */}
        <motion.div className="lg:col-span-6 flex flex-col justify-center" variants={itemVariants}>
          <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-xl shadow-2xl relative">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

              {/* Name fields row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="firstName" className="text-[9px] font-black uppercase tracking-widest text-white/60 font-mono">First Name *</label>
                  <input
                    type="text" id="firstName" name="firstName"
                    value={formData.firstName} onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-white focus:bg-white/[0.04] py-2.5 px-3 rounded text-base md:text-sm font-medium text-white focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="lastName" className="text-[9px] font-black uppercase tracking-widest text-white/60 font-mono">Last Name *</label>
                  <input
                    type="text" id="lastName" name="lastName"
                    value={formData.lastName} onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-white focus:bg-white/[0.04] py-2.5 px-3 rounded text-base md:text-sm font-medium text-white focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Email & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-white/60 font-mono">Email Address *</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-white focus:bg-white/[0.04] py-2.5 px-3 rounded text-base md:text-sm font-medium text-white focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="subject" className="text-[9px] font-black uppercase tracking-widest text-white/60 font-mono">Subject *</label>
                  <input
                    type="text" id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-white focus:bg-white/[0.04] py-2.5 px-3 rounded text-base md:text-sm font-medium text-white focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="message" className="text-[9px] font-black uppercase tracking-widest text-white/60 font-mono">Message Details *</label>
                <textarea
                  id="message" name="message" rows={4}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-white focus:bg-white/[0.04] py-2.5 px-3 rounded text-base md:text-sm font-medium text-white focus:outline-none transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit panel */}
              <div className="mt-4 flex flex-col gap-3.5 items-start">
                <Magnetic strength={0.25}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative overflow-hidden bg-white px-6 py-3.5 flex items-center gap-2 rounded transition-colors disabled:opacity-50 text-black shadow-lg"
                  >
                    <span className="absolute inset-0 bg-neutral-200 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    <span className="relative font-mono font-black text-[10px] tracking-widest uppercase text-black z-10 flex items-center gap-1.5">
                      {status === "sending" ? "Sending Console..." : "Send Message"}
                      <Send size={11} className="relative z-10 text-black group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </button>
                </Magnetic>

                {/* Toast status outputs */}
                {status === "success" && (
                  <p className="text-xs text-green-400 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <Check size={14} /> ✓ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-red-500 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <AlertTriangle size={14} /> ✗ Transmission failed. Try again.
                  </p>
                )}
              </div>

            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
