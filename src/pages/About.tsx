import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="min-h-screen w-full bg-white text-black font-sans px-6 py-10 md:px-12 lg:px-24 xl:px-32 flex items-center relative z-10 select-none">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col gap-6">
        
        {/* Top Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-sm tracking-[0.2em] uppercase text-neutral-400"
        >
          ABOUT
        </motion.span>

        {/* Two-Column Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col gap-6">

            {/* 01. EDUCATION */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <span className="text-[11px] font-black tracking-widest text-[#888888] uppercase font-sans">
                01. EDUCATION
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                Sri Krishna College of Technology
              </h3>
              <p className="text-lg md:text-xl text-neutral-600 font-medium">
                Bachelor of Technology
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-normal">
                Information Technology
              </p>
              <p className="text-sm md:text-base text-neutral-400 font-normal mt-1">
                2023 – 2027 | CGPA: 8.1
              </p>
            </motion.div>

            {/* 02. ACHIEVEMENTS */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span className="text-[11px] font-black tracking-widest text-[#888888] uppercase font-sans">
                02. ACHIEVEMENTS
              </span>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
                    Smart India Hackathon 2024
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 font-normal mt-0.5">
                    Developed an AI-powered Gunshot Detection & Localization System.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
                    Netrix'25 Codeathon — 4th Place
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 font-normal mt-0.5">
                    Competitive Programming & Problem Solving.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
                    Yugam 2025 Competitive Coding — Finalist
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 font-normal mt-0.5">
                    Advanced Algorithmic Problem Solving.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
                    Microsoft NLP Workshop
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 font-normal mt-0.5">
                    NLP, Transformers & Modern AI Systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
                    300+ DSA Problems Solved
                  </h3>
                  <p className="text-sm md:text-base text-neutral-500 font-normal mt-0.5">
                    Strong foundation in Algorithms and Problem Solving.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN ─── */}
          <div className="flex flex-col gap-6">

            {/* 03. FOCUS */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <span className="text-[11px] font-black tracking-widest text-[#888888] uppercase font-sans">
                03. FOCUS
              </span>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                    Java Backend Development
                  </h3>
                  <p className="text-base md:text-lg text-neutral-500 font-normal mt-0.5">(Java & Spring Boot)</p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                    REST APIs & System Design
                  </h3>
                  <p className="text-base md:text-lg text-neutral-500 font-normal mt-0.5">(Microservices & Scalable Architecture)</p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                    Low-Level Design
                  </h3>
                  <p className="text-base md:text-lg text-neutral-500 font-normal mt-0.5">(OOP & Design Patterns)</p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                    Core CS Fundamentals
                  </h3>
                  <p className="text-base md:text-lg text-neutral-500 font-normal mt-0.5">(DBMS • Operating Systems • Computer Networks)</p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                    Data Structures & Algorithms
                  </h3>
                  <p className="text-base md:text-lg text-neutral-500 font-normal mt-0.5">(Java • Problem Solving)</p>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
