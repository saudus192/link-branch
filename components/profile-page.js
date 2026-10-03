"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTiktok, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { LuClipboardCopy, LuClipboardCheck } from "react-icons/lu";
import { usePathname } from 'next/navigation';

// Parent controls the stagger of its children
const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
}

// Each link slides up and fades in
const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
}

// Social icons pop in
const icon = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 15 } },
}

const ProfilePage = ({ profile }) => {
    const pathname = usePathname()
    const [copySuccess, setCopySuccess] = useState(false);
    const basepathname = process.env.NEXT_PUBLIC_URL.replace(/^https?:\/\//, "")
    const fullpathname = basepathname + pathname

    const copyHandle = () => {
        navigator.clipboard.writeText(`${fullpathname}`);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // reset after 2s
    };

    const socials = [FaTiktok, FaYoutube, FaXTwitter, FaInstagram]

    return (
        <div className="flex min-h-screen flex-col items-center px-6 py-16 relative overflow-hidden">
            {/* Logo: fades in from the top-left */}
            <motion.div
                className='absolute top-8.5 left-12.5'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/"><Image src="/Transparent_Logo.png" alt="Logo" width={100} height={50} /></Link>
            </motion.div>

            {/* Copy button: slides in from the right, with hover/tap feedback */}
            <motion.button
                className="text-white bg-[#33241f] hover:bg-[#5b3825] focus:ring-2 focus:outline-none focus:ring-[#e9b448] font-bold rounded-md text-sm px-4 py-2.5 text-center leading-5 flex items-center justify-center absolute top-12.5 right-12.5"
                onClick={copyHandle}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
            >
                {/* Icon + text swap smoothly when copied */}
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={copySuccess ? 'copied' : 'copy'}
                        className="flex items-center"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                    >
                        {copySuccess
                            ? <LuClipboardCheck className="inline-block mr-2" size={16} />
                            : <LuClipboardCopy className="inline-block mr-2" size={16} />}
                        {copySuccess ? 'Copied!' : 'Copy Link'}
                    </motion.span>
                </AnimatePresence>
            </motion.button>

            {/* Profile picture: scales in with a spring */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="mb-6 md:mt-0 mt-20"
            >
                <Image
                    src={profile.profilePicture}
                    alt={`${profile.handle}'s profile picture`}
                    width={128}
                    height={128}
                    className="h-32 w-32 rounded-full object-cover"
                />
            </motion.div>

            {/* Handle: fades up after the picture */}
            <motion.h1
                className="mb-8 text-4xl font-bold text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                @{profile.handle}
            </motion.h1>

            {/* Links: staggered entrance + hover/tap effects */}
            <motion.div
                className="flex w-full max-w-xl flex-col gap-4 mb-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {profile.links.map((l) => (
                    <motion.div
                        key={l._id || l.link}
                        variants={item}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            href={l.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-lg bg-white px-6 py-4 text-center font-semibold shadow-sm hover:shadow-md"
                        >
                            {l.linkName}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Social icons: pop in one by one after the links */}
            <motion.div
                className="icons flex gap-4"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } } }}
                initial="hidden"
                animate="show"
            >
                {socials.map((Icon, i) => (
                    <motion.div
                        key={i}
                        variants={icon}
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default ProfilePage