"use client";
import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2 bg-black w-full h-max md:px-8 py-4 text-white font-fira_sans">
      <FlipLink href="/members">Members</FlipLink>
      <FlipLink href="/events">Events</FlipLink>
      <FlipLink href="https://github.com/sceptix-club">GitHub</FlipLink>
      <FlipLink href="https://www.linkedin.com/company/sceptix">
        LinkedIn
      </FlipLink>
      <FlipLink href="https://chat.whatsapp.com/EtERhdAzzF97FG450vUB7U">
        Alliance
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative hover:text-[#0aceb2] block overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
