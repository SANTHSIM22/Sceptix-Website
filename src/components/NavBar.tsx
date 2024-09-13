"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="sticky top-4 z-50 flex flex-col items-center justify-between my-4 mx-6 px-4 py-1 bg-white backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-gray-900 shadow-lg font-fira_sans transition-all duration-300 lg:mx-32 rounded-3xl">
            <div className="w-full flex items-center justify-between">
                <Link href="/" legacyBehavior>
                    <a>
                        <Image
                            src="https://sceptix-club.github.io/website-assets/icons/logo_png.png"
                            alt="sceptix-logo"
                            width={70}
                            height={70}
                            className={`invert hover:scale-110 transform transition duration-300 ease cursor-pointer p-3 py-5`}
                        />
                    </a>
                </Link>
                <div className="flex items-center">
                    <div className={`hidden md:flex space-x-4 md:space-x-14 text-white mr-8` }>
                        <motion.a href="/members" className="text-sm md:text-xl font-semibold">
                            Members
                        </motion.a>
                        <motion.a href="/events" className="text-sm md:text-xl font-semibold ">
                            Events
                        </motion.a>
                        <motion.a href="/projects" className="text-sm md:text-xl font-semibold ">
                            Projects
                        </motion.a>
                        <motion.a href="/blog" className="text-sm md:text-xl font-semibold ">
                            Blogs
                        </motion.a>
                    </div>
                    <div className="md:hidden ml-4">
                        <button onClick={toggleMenu} aria-label="Toggle menu" title="Toggle menu">
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                        className="w-full flex flex-col items-center py-4 z-50 rounded-b-3xl"
                    >
                        <div className="flex flex-col items-center space-y-6 w-full mb-3">
                            <Link href="/events" legacyBehavior>
                                <a
                                    className="text-2xl font-semibold hover:text-gray-400"
                                    onClick={toggleMenu}
                                >
                                    Events
                                </a>
                            </Link>
                            <Link href="/members" legacyBehavior>
                                <a
                                    className="text-2xl font-semibold hover:text-gray-400"
                                    onClick={toggleMenu}
                                >
                                    Members
                                </a>
                            </Link>
                            <Link href="/projects" legacyBehavior>
                                <a
                                    className="text-2xl font-semibold hover:text-gray-400"
                                    onClick={toggleMenu}
                                >
                                    Projects
                                </a>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
