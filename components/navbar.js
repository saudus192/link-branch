"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useToast } from '@/components/toast'

const navLinks = [
    { label: "Products", href: "/products" },
    { label: "Templates", href: "/templates" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Learn", href: "/learn" },
    { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
    const { showToast } = useToast();
    const pathname = usePathname();
    const showNavbar = pathname === "/" || pathname === "/products" || pathname === "/templates" || pathname === "/marketplace" || pathname === "/learn" || pathname === "/pricing";

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [openForPath, setOpenForPath] = useState(null);
    const open = openForPath !== null && openForPath === pathname;

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // scroll down (aur 100px se neeche) => hide, scroll up => show
        if (latest > previous && latest > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // sidebar khula ho to page scroll lock
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const comingSoon = () => {
        showToast("This feature will be available soon!", "validation");
    };

    return (<>{showNavbar && <motion.header
        variants={{
            visible: { y: 0 },
            hidden: { y: "-200%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 w-full"
    >
        <div><nav className="flex justify-between items-center p-4 sm:w-[90%] w-[98%] mx-auto bg-white shadow-md h-20 rounded-4xl relative top-11 sm:gap-16 gap-5">
            <Link className="logo sm:ml-5 ml-0.5" href="/">
                <Image className="sm:hidden" src="/Phone_Logo.png" alt="Logo" width={50} height={50} />
                <Image className="hidden sm:block" src="/Transparent_Logo.png" alt="Logo" width={100} height={100} />
            </Link>
            <div className='flex flex-1 items-center justify-between'>
                <ul className="lg:flex hidden gap-0 text-black">
                    <Link className='hover:bg-[#EFF0EC] rounded-lg py-3 px-4 font-medium' href="/products"><li>Products</li></Link>
                    <Link className='hover:bg-[#EFF0EC] rounded-lg py-3 px-4 font-medium' href="/templates"><li>Templates</li></Link>
                    <Link className='hover:bg-[#EFF0EC] rounded-lg py-3 px-4 font-medium' href="/marketplace"><li>Marketplace</li></Link>
                    <Link className='hover:bg-[#EFF0EC] rounded-lg py-3 px-4 font-medium' href="/learn"><li>Learn</li></Link>
                    <Link className='hover:bg-[#EFF0EC] rounded-lg py-3 px-4 font-medium' href="/pricing"><li>Pricing</li></Link>
                </ul>
                <div className="buttons ml-auto flex shrink-0 gap-3 items-center">
                    <button onClick={comingSoon} className="bg-[#EFF0EC] sm:py-4 py-3 sm:px-6 px-4 rounded-lg hover:bg-[#E9E9E9] focus:outline-none text-black">Login</button>
                    <button onClick={comingSoon} className="bg-[#1E2330] text-white sm:py-4 py-3 sm:px-6 px-4 rounded-4xl hover:bg-[#262D3E] focus:outline-none font-medium">Sign up free</button>

                    {/* Hamburger icon - sirf lg se neeche show hoga */}
                    <button
                        onClick={() => setOpenForPath(pathname)}
                        aria-label="Open menu"
                        className="lg:hidden bg-[#EFF0EC] hover:bg-[#E9E9E9] p-2 rounded-lg focus:outline-none text-black"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav></div>
    </motion.header>}

        {/* Right Sidebar - sirf lg se neeche */}
        <AnimatePresence>
            {showNavbar && open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setOpenForPath(null)}
                        className="lg:hidden fixed inset-0 z-60 bg-black/40"
                    />

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden fixed top-0 right-0 z-70 h-full w-[80%] max-w-sm bg-white shadow-md rounded-l-4xl p-5 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <Link href="/" onClick={() => setOpenForPath(null)}>
                                <Image src="/Transparent_Logo.png" alt="Logo" width={100} height={100} />
                            </Link>
                            <button
                                onClick={() => setOpenForPath(null)}
                                aria-label="Close menu"
                                className="bg-[#EFF0EC] hover:bg-[#E9E9E9] p-2 rounded-lg focus:outline-none text-black"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        <ul className="flex flex-col gap-2 text-black">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpenForPath(null)}
                                        className="block hover:bg-[#EFF0EC] rounded-lg p-3 font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    </>
    )
}

export default Navbar