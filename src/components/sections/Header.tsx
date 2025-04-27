'use client';

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-[999999999]">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5 bg-white/80 backdrop-blur-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src={Logo} alt="Motion Logo" height={40} width={40} />
            </Link>

            {
              !isMenuOpen && (

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`md:hidden z-30 ml-auto ${isMenuOpen ? "hidden" : "block"}`}
                  aria-label="Toggle menu"
                >
                  <MenuIcon className="h-5 w-5" />
                </button>

              )
            }



            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link
                href="/about"
                className={pathname === "/about" ? "text-black font-medium" : ""}
              >
                About
              </Link>
              <Link href="/features" className={pathname === "/features" ? "text-black font-medium" : ""}>
                Features
              </Link>
              <Link href="/customers" className={pathname === "/customers" ? "text-black font-medium" : ""}>
                Customers
              </Link>
              <Link href="/updates" className={pathname === "/updates" ? "text-black font-medium" : ""}>
                Updates
              </Link>
              <Link href="/help" className={pathname === "/help" ? "text-black font-medium" : ""}>
                Help
              </Link>
              <Link href="https://sorenblank.com" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for Free
              </Link>
            </nav>

            {/* Mobile Navigation */}
            {
              isMenuOpen && (
                <div className={`${isMenuOpen ? "block" : "z-50"}`}>
                  {isMenuOpen && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                      />

                      {/* Sidebar */}
                      <div
                        className="fixed top-0 right-0 left-0 bottom-0 h-screen w-screen max-w-screen bg-white md:hidden shadow-xl flex flex-col"
                      >
                        <div className="p-6 flex flex-col h-full">
                          <div className="flex justify-end mb-8">
                            <button
                              onClick={() => setIsMenuOpen(false)}
                              aria-label="Close menu"
                              className="h-8 w-8 flex items-center justify-center rounded-full border border-[#222222]/10"
                            >
                              <span className="text-xl font-light rotate-45">+</span>
                            </button>
                          </div>

                          <nav className="flex flex-col gap-6 text-black/60">
                            <Link
                              href="/about"
                              className={`text-lg ${pathname === "/about" ? "text-black font-medium" : ""}`}
                            >
                              About
                            </Link>
                            <Link
                              href="/features"
                              className={`text-lg ${pathname === "/features" ? "text-black font-medium" : ""}`}
                            >
                              Features
                            </Link>
                            <Link
                              href="/customers"
                              className={`text-lg ${pathname === "/customers" ? "text-black font-medium" : ""}`}
                            >
                              Customers
                            </Link>
                            <Link
                              href="#"
                              className={`text-lg ${pathname === "/updates" ? "text-black font-medium" : ""}`}
                            >
                              Updates
                            </Link>
                            <Link
                              href="/help"
                              className={`text-lg ${pathname === "/help" ? "text-black font-medium" : ""}`}
                            >
                              Help
                            </Link>
                          </nav>

                          <div className="mt-auto pb-8 border-t border-[#222222]/10">
                            <Link href="https://sorenblank.com" className="bg-black text-white w-full py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                              Get for Free
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
};
