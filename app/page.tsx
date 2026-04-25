"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Radar, Sparkles, ArrowUpRight, Cpu, Lock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

export default function Page() {
  const { scrollY } = useScroll();
  const heroImageScale = useTransform(scrollY, [0, 500], [1.08, 1]);
  const heroImageY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroImageOpacity = useTransform(scrollY, [0, 500], [0.28, 0.12]);
  const heroContentY = useTransform(scrollY, [0, 500], [0, -40]);
  const heroCardsY = useTransform(scrollY, [0, 500], [0, -20]);
  const perspectiveImageY = useTransform(scrollY, [250, 1200], [0, 80]);
  const orbOneY = useTransform(scrollY, [0, 1000], [0, -120]);
  const orbTwoY = useTransform(scrollY, [0, 1000], [0, 90]);
  const orbThreeY = useTransform(scrollY, [0, 1000], [0, -70]);

  const stats = [
    { label: "Security+ (expired)", value: "Certified", icon: Shield },
    { label: "Focus", value: "SOC Path", icon: Radar },
    { label: "Approach", value: "Hands-On", icon: Cpu },
  ];

  const experience = [
    {
      title: "Security System Installation",
      description:
        "Hands-on experience installing and supporting alarm systems, surveillance cameras, and connected security devices in real environments.",
    },
    {
      title: "Troubleshooting & Support",
      description:
        "Skilled in diagnosing issues, supporting customers, and translating technical problems into practical solutions people can understand.",
    },
    {
      title: "Cybersecurity Growth",
      description:
        "Graduate-level cybersecurity training focused on building stronger knowledge in threat awareness, defensive thinking, and modern system security.",
    },
  ];

  const projects = [
  {
    title: "IoT Security Risk & Policy Analysis",
    description:
      " Analyzed cybersecurity risk assoicoated with cloud-conected security devices. This proposal details requirments I believe need to be implemented in the security through regulatory bodies like the Virginia Department of Criminal Justise Services.",
  },
  {
    title: "Cybersecurity Risk Analysis of Connected Security Systems",
    description:
      "Analyzed vulnerabilities in alarm and surveillance systems including default credentials, cloud exposure, and network access risks. Proposed mitigation strategies.",
  },
  {
    title: "Security Log Analysis & Incident Detection Simulation",
    description:
      "Reviewed system and network logs to identify suspicious behavior, including failed login attempts and abnormal activity patterns. Documented investigation process.",
  },
];

  const quickPaths = [
    {
      label: "Technical Background",
      title: "Security Systems",
      description:
        "Hands-on installation, support, and troubleshooting across alarm and surveillance environments.",
      href: "#experience",
    },
    {
      label: "Current Direction",
      title: "Cybersecurity Growth",
      description:
        "Graduate-level learning focused on defensive security, risk awareness, and connected system protection.",
      href: "#about",
    },
    {
      label: "Career Focus",
      title: "SOC Pathway",
      description:
        "Building toward an entry-level analyst role with a portfolio grounded in both real systems and cyber study.",
      href: "#projects",
    },
  ];

  const skills = [
    "CompTIA Security+ (expired)",
    "Security System Installation",
    "Alarm.com & Camera Platforms",
    "Network Security Fundamentals",
    "Troubleshooting & Diagnostics",
    "Technical Documentation",
    "Customer Training",
    "Threat Awareness",
  ];

  const floatingBadges = [
    "Defensive Security",
    "Connected Systems",
    "Field Experience",
    "Cyber Growth",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-slate-950 text-white selection:bg-cyan-300/30">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.12),transparent_20%),linear-gradient(to_bottom,#020617,#020617,#0f172a)]" />
      <motion.div
        style={{ y: orbOneY }}
        className="pointer-events-none fixed left-[6%] top-24 -z-10 h-56 w-56 rounded-full bg-cyan-400/12 blur-3xl"
      />
      <motion.div
        style={{ y: orbTwoY }}
        className="pointer-events-none fixed right-[8%] top-[28rem] -z-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: orbThreeY }}
        className="pointer-events-none fixed bottom-16 left-1/3 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-wide">Raymond Malone</p>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
              Cybersecurity Graduate Student
            </p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-200">
              About
            </a>
            <a href="#experience" className="transition hover:text-cyan-200">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-cyan-200">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-cyan-200">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-200">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-20">
          <motion.div
            style={{ scale: heroImageScale, y: heroImageY, opacity: heroImageOpacity }}
            className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/35 via-slate-950/72 to-slate-950" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px] opacity-10" />

          <motion.div style={{ y: heroContentY }} className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:p-10"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
                  <Sparkles className="h-4 w-4" />
                  ePortfolio
                </div>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                  Bridging{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 bg-clip-text text-transparent">
                    physical security
                  </span>{" "}
                  and cybersecurity to protect connected systems.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                 I am a first year cybersecurity graduate student at Old Dominion University. I also
                 have hands on experience installing electronic security systems. My current goal is 
                 to expand my security knowledge into the cybersecurity industry.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-2xl border border-cyan-300/30 bg-cyan-400/90 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {floatingBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-slate-100"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ y: heroCardsY }}
                className="grid gap-5"
              >
                <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                  {stats.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/15 to-white/5 p-5 backdrop-blur-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl border border-white/10 bg-cyan-300/15 p-3 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                              {item.label}
                            </p>
                            <p className="mt-1 text-lg font-semibold">{item.value}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-fuchsia-400/10 p-6 backdrop-blur-xl">
                  <p className="text-sm text-slate-200">Mission</p>
                  <p className="mt-2 text-xl font-semibold">Secure the systems people rely on every day.</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    Building technical depth with a practical, real-world perspective from the field.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/8 via-cyan-300/10 to-fuchsia-300/8 px-6 py-5 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Built from hands-on experience with
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                    Alarm Systems
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                    Surveillance Cameras
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                    Troubleshooting
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                    Graduate Cybersecurity Study
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              transition={{ delayChildren: 0.25, staggerChildren: 0.12 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Start here</p>
                  <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                    Choose how you want to explore my work.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-300">
                  A quick way to understand my background, current focus, and where I am headed next.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {quickPaths.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    variants={fadeUp}
                    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                    className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/12 via-white/6 to-cyan-300/5 p-6 transition duration-300 hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{item.label}</p>
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
               <div className="mt-6 flex items-center text-sm font-medium text-white/90">
                      Explore
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="min-h-[360px] rounded-[2rem] border border-white/10 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center p-10">
              <div className="flex h-full items-end">
                <div className="max-w-sm rounded-3xl border border-white/15 bg-slate-950/60 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">About</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    My path combines field experience in physical security with growing technical depth in
                    cybersecurity.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-8 backdrop-blur-xl md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-cyan-200">
                <Lock className="h-4 w-4" />
                Who I Am
              </div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">A technical foundation built in the field.</h2>
              <p className="mt-6 leading-8 text-slate-300">
                I work in the security industry with hands-on experience installing and supporting alarm
                systems, surveillance cameras, and connected devices. That real-world background gives me
                a practical view of how systems are deployed, maintained, and trusted by the people who
                use them.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                As I continue building my cybersecurity knowledge through graduate school, I want to
                understand how digital threats affect physical systems, connected environments, and the
                broader security landscape. This portfolio reflects that growth, along with my academic
                work, technical interests, and career direction.
              </p>
            </div>
          </div>
        </motion.section>

        <section className="relative my-8 overflow-hidden py-24">
          <motion.div
            style={{ y: perspectiveImageY }}
            className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"
          />
          <div className="absolute inset-0 -z-10 bg-slate-950/70" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/40" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 to-cyan-300/10 px-8 py-12 text-center backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Perspective</p>
            <p className="mt-5 text-2xl font-semibold leading-relaxed md:text-3xl">
              Protecting connected systems starts with understanding both the hardware people trust and
              the networks behind it.
            </p>
          </motion.div>
        </section>

        <motion.section
          id="experience"
          className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Experience</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Built from real-world systems work.</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {experience.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Highlighted work and research direction.</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Featured Project</p>
              <h3 className="mt-4 text-2xl font-semibold">{projects[0].title}</h3>
                <a
                       href="/files/iot-security-whitepaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block rounded-xl border border-cyan-300/30 bg-cyan-400/90 px-4 py-2 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 transition"
                      >
                        Download White Paper (PDF)
                    </a>
                    <p className="mt-2 text-sm text-cyan-300">
                        White Paper • Policy Analysis • IoT Security
                    </p>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">{projects[0].description}</p>
            </motion.div>

            <div className="grid gap-6">
              {projects.slice(1).map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-8 backdrop-blur-xl md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills & Certifications</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">A foundation that keeps expanding.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-300/25 bg-gradient-to-r from-cyan-400/15 to-fuchsia-400/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-200/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 via-cyan-300/10 to-fuchsia-300/10 p-8 backdrop-blur-xl md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Let’s connect.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              This portfolio is continuing to grow as I build projects, strengthen my technical skills,
              and move further into cybersecurity. You can use this section for your email, LinkedIn,
              GitHub, and resume link.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="raymond/one23@hotmail.com"
                className="rounded-2xl border border-cyan-300/30 bg-cyan-400/90 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/raymond-malone/"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/raymalsecurity"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
