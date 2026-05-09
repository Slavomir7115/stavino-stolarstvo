"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import { NAV_LINKS } from "@/constants";
import { Menu, X } from "lucide-react";

import SecondaryButton from "./SecondaryButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-blue py-6 shadow-lg">
      <Container className="flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl text-gold font-heading italic tracking-wider z-50"
        >
          LOGO
        </Link>

        {/* DESKTOP NAV + BUTTON */}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-background text-xs font-bold uppercase tracking-[3px] hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="#kontakt">
            <SecondaryButton>Nezáväzný dopyt</SecondaryButton>
          </Link>
        </div>

        {/* BURGER ICON */}
        <button
          className="md:hidden text-gold z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-blue flex flex-col items-center justify-center gap-10 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-background text-3xl font-heading italic hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <SecondaryButton>Nezáväzný dopyt</SecondaryButton>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
