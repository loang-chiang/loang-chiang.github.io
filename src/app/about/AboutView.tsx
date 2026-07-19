"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import { usePalette } from "@/components/PaletteProvider";

import SectionCard from "@/components/SectionCard";
import Timeline, { TimelineItem } from "@/components/Timeline";
import ChipList from "@/components/ChipList";
import Footer from "@/components/Footer";

export default function AboutView() {
  const { palette, setPalette, p, palettes } = usePalette();
  const colors = p.colors;

  // Vintage tints
  const isVintage = palette === "Vintage";
  const cardTint = isVintage
    ? { background: `linear-gradient(180deg, ${p.accent}14 0%, ${p.accent}0D 100%)` }
    : undefined;
  const innerSurface = isVintage ? `color-mix(in srgb, ${p.accent} 7%, white)` : undefined;

  const [slideOverlay, setSlideOverlay] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setSlideOverlay(false), 600);
    return () => clearTimeout(t);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: "easeIn" } },
  };

  // ----- data -----
  const exp: TimelineItem[] = [
    {
      title: "IBM",
      sub: "Solutions Engineering Intern",
      period: "Summer 2026",
      summary:
        "Designing and building AI and automation solutions for enterprise clients across industries like finance, telecommunications, and energy, from market research and use case development to technical prototyping and executive presentations.",
    },
    {
      title: "Providence Preservation Society",
      sub: "Product & Data Systems Intern",
      period: "Spring 2026",
      summary:
        "Leading product and data decisions for a public-facing historical platform, from information architecture and UX to data quality workflows for 1,000+ digitized records.",
    },
    {
      title: "Meroo",
      sub: "Technical Product Development Intern",
      period: "Winter 2026",
      summary:
        "Designed and prototyped an AI agent that generates career-specific learning paths for the platform, owning the build end-to-end from requirements to iterative testing.",
    },
    {
      title: "BCP Financial Services",
      sub: "Analytics & Automation Intern",
      period: "Summer 2025",
      summary:
        "Built Power BI dashboards and Python automation workflows for cybersecurity compliance, delivering insights to 40+ executives and specialists and cutting hundreds of hours of manual work.",
    },
    {
      title: "Providence Public Library",
      sub: "Data Analytics Intern",
      period: "Spring 2025",
      summary:
        "Analyzed 15+ years of donor data in Python to surface overlooked fundraising opportunities, presenting recommendations directly to library leadership.",
    },
    {
      title: "Brown University Department of Computer Science",
      sub: "Undergraduate Teaching Assistant",
      period: "2025 – present",
      summary:
        "Fall 2025: CSCI0300 Introduction to Computer Systems. Fall 2026: CSCI1302 Sociotechnical Approaches to AI and HCI.",
    },
  ];

  const highlights = [
    "Notion Campus Leader",
    "Brown WiCS Development Chair",
    "CS DUG EBoard",
    "FullStack@Brown Software Engineer",
    "AVGE Logistics Chair",
  ];

  return (
    <>
      {/* Slide overlay on mount */}
      <AnimatePresence>
        {slideOverlay && (
          <motion.div
            key="slide-overlay-about"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{ backgroundColor: "var(--accent)" }}
            onAnimationComplete={() => setSlideOverlay(false)}
          />
        )}
      </AnimatePresence>

      <div className={`${p.bg} ${p.text} min-h-screen antialiased`}>
        <Header
          accent={p.accent}
          palette={palette}
          setPalette={(name) => setPalette(name as any)}
          palettes={palettes}
        />

        <motion.main
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mx-auto max-w-6xl px-6 py-12"
        >
          {/* Hero */}
          <section className="px-2">
            <div className="mx-auto grid items-center gap-10 max-w-4xl md:grid-cols-[240px_1fr]">
              <div
                className="relative w-[240px] aspect-[3/4] overflow-hidden rounded-2xl border shadow justify-self-center md:justify-self-end"
                style={{ borderColor: p.accent }}
              >
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/me.jpg`} alt="Photo of Loang" fill className="object-cover" priority />
              </div>

              <div className="text-center md:text-left md:max-w-[560px] justify-self-center md:justify-self-start">
                <span
                  className="inline-block rounded-full border px-3 py-1 text-xs mb-3"
                  style={{ borderColor: p.accent, color: p.accent }}
                >
                  About me
                </span>
                <h1 className="text-4xl font-extrabold">
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--grad-0)] via-[var(--grad-1)] to-[var(--grad-2)]"
                    style={{
                      ["--grad-0" as any]: colors[0],
                      ["--grad-1" as any]: colors[1] ?? colors[0],
                      ["--grad-2" as any]: colors[2] ?? colors[0],
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Loang Chiang
                  </span>
                </h1>
                <p className="mt-4 opacity-80">
                  I'm a third-year student at Brown University studying Computer Science and Behavioral Decision Sciences,
                  passionate about building products that connect people and solve real problems.
                </p>
                <p className="mt-4 opacity-80">
                  My interests span product, software engineering, and human-computer interaction. If there's anything I love, it's blending technical skills with
                  creativity and design!
                </p>
                <ul className="mt-5 grid gap-2 text-sm">
                  <li>• <b>Product:</b> User Research, Product Discovery, Prioritization, Roadmaps, Prototyping, Usability Testing, UI/UX Design</li>
                  <li>• <b>Programming:</b> Python, C/C++, JavaScript/TypeScript, SQL</li>
                  <li>• <b>Frameworks & Tools:</b> React, Node.js, FastAPI, Git, Power BI, Docker, Figma, Linear, Notion</li>
                  <li>• <b>Languages & Interests:</b> English & Spanish · Literature, Fiction Writing, Theater, Human-Centered Technology</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience + Highlights */}
          <section className="mt-16 mb-12 grid gap-8 lg:grid-cols-12">
            <SectionCard
              title="Experience"
              accent={p.accent}
              cardClass={p.card}
              cardBorderClass={p.cardBorder}
              className="lg:col-span-8"
              style={cardTint}
            >
              <Timeline items={exp} accent={p.accent} surface={innerSurface} />
            </SectionCard>

            <SectionCard
              title="Activities"
              accent={p.accent}
              cardClass={p.card}
              cardBorderClass={p.cardBorder}
              className="lg:col-span-4 lg:sticky lg:top-24"
              style={cardTint}
            >
              <ChipList items={highlights} accent={p.accent} size="md" columns={1} />
            </SectionCard>
          </section>

        </motion.main>

        <Footer></Footer>
      </div>
    </>
  );
}