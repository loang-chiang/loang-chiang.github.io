// app/projects/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import FancyButton from "@/components/FancyButton";
import ProjectCard, { Project } from "@/components/ProjectCard";
import { usePalette } from "@/components/PaletteProvider";
import Footer from "@/components/Footer";

export default function ProjectsView() {
  const { palette, setPalette, p, palettes } = usePalette();
  const [slideOverlay, setSlideOverlay] = useState(true);

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit:    { opacity: 0, y: -8, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const projects: Project[] = [
    {
      title: "Daytile",
      highlight: "Your day as a mosaic",
      description:
        "Mobile journaling app that turns your daily moments into a colorful tile mosaic. Features live camera capture, photo tiles, streaks, and memories. Built with React Native, Firebase, and Cloudinary.",
        repo: "https://github.com/loang-chiang/Daytile",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/daytile.png`,
    },
    {
      title: "Epic Geometry",
      highlight: "Deep Learning system for math diagrams",
      description:
        "TikZ geometry diagram generator benchmarking GPT-4o Mini, Claude Haiku, and a fine-tuned Qwen adapter on translating natural language into precise mathematical figures. Built for CSCI1470 Deep Learning.",
      repo: "https://github.com/screechingviolet/epic-tikz-diagram-generator",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/epicgeometry.png`,
    },
    {
      title: "Ephemeral",
      highlight: "Moments that fade away",
      description:
        "A social platform for sharing fleeting moments that disappear over time, exploring intentionality and impermanence in digital sharing.",
      repo: "https://github.com/screechingviolet/ephemeral",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/ephemeral.png`,
    },
    {
      title: "WireChat",
      highlight: "Chat app with X-ray vision",
      description:
        "WebSocket chat application with a live frame inspector that visualizes the protocol internals in real time as messages flow. Built for CSCI1680 Computer Networks.",
      repo: "https://github.com/brown-cs1680-s26/final-hayzie-loang-final",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/wirechat.png`,
    },
    {
      title: "Arcademia",
      highlight: "Gamified note-taking!",
      description:
        "Web platform that allows you to upload notes and uses AI to auto-generate question banks and play live minigames with friends via rooms and fast scoring to improve content retention. Built for Hack@Brown 2025",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/arcademia.png`,
    },
    {
      title: "AlbumRater",
      highlight: "Your music, ranked cleanly",
      description:
        "Album tracker connected to the Spotify API to organize your album ratings as reviews. Also features user profiles and a general feed for seeing other users' activity",
      repo: "https://github.com/loang-chiang/AlbumRater",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/albumrater.png`,
    },
    {
      title: "DigiTBR",
      highlight: "Reading list organizer",
      description:
        "Personal TBR tracker that lets you add, delete, sort, and organize your future book adventures.",
      repo: "https://github.com/loang-chiang/DigiTBR",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/digitbr.png`,
    },
    {
      title: "Brown Student Radio Website",
      highlight: "Schedule, shows, archives",
      description:
        "A fresh, accessible redesign for BSR with live updates, schedule browsing, and DJ blogs. Project for Fullstack@Brown Fall 2024.",
      repo: "https://brownstudentradio.vercel.app/",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/radio.png`,
    },
    {
      title: "Project OLEEP",
      highlight: "Nonprofit resources portal",
      description:
        "Central hub for mentorship resources, docs, and scheduling to streamline volunteer workflows. Project for Fullstack@Brown Spring 2025.",
      repo: "https://github.com/fullstackatbrown/project-oleep",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/oleep.png`,
    },
    {
      title: "This website!",
      highlight: "Personal website",
      description:
        "Portfolio website to showcase projects, include information about myself, and make contact easier.",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/personal_website.png`,
    },
    {
      title: "Sketch!",
      highlight: "Tiny drawing playground",
      description:
        "A playful canvas for quick doodles; simple but very fun!",
      repo: "https://github.com/loang-chiang/Sketch",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/sketch.png`,
    },
    {
      title: "Michi",
      highlight: "Tic-tac-toe but make it cats!",
      description:
        "Cat-themed tic-tac-toe that tracks wins per player and allows for a simple, good time",
      repo: "https://github.com/loang-chiang/Michi",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/projects/michi.png`,
    },
  ];

  return (
    <>
      {/* Slide overlay (same as About) */}
      <AnimatePresence>
        {slideOverlay && (
          <motion.div
            key="slide-overlay-projects"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{ backgroundColor: "var(--accent)" }}
            onAnimationComplete={() => setSlideOverlay(false)}
          />
        )}
      </AnimatePresence>

      <div className={`${p.bg} ${p.text} min-h-screen flex flex-col antialiased`}>
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
          className="flex-grow"
        >
          <section className="mx-auto w-full max-w-6xl py-16 px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24">
            <h1 className="text-4xl font-bold">Projects</h1>

            <div className="mt-8 grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
              {projects.map((proj) => (
                <ProjectCard key={proj.title} project={proj} />
              ))}
            </div>

            <div className="mt-12 mb-8">
              <FancyButton href="/" variant="outline" accent={p.accent}>
                ← Back Home
              </FancyButton>
            </div>
          </section>
        </motion.main>

        <Footer />
      </div>
    </>
  );
}



