"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTiktok, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { LuClipboardCopy, LuClipboardCheck } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const ProfilePage = ({ profile }) => {
    const pathname = usePathname()
    const [copySuccess, setCopySuccess] = useState(false);
    const basepathname = process.env.NEXT_PUBLIC_URL.replace(/^https?:\/\//, "")
    const fullpathname = basepathname + pathname

    const copyHandle = () => {
        navigator.clipboard.writeText(`${fullpathname}`);
        setCopySuccess(true);
    };
    return (
        <div className="flex min-h-screen flex-col items-center px-6 py-16 relative">
            <Link className='absolute top-8.5 left-12.5' href="/"><Image className="" src="/Transparent_Logo.png" alt="Logo" width={100} height={50} /></Link>
            <button className="text-white bg-[#33241f] hover:bg-[#5b3825] focus:ring-2 focus:outline-none focus:ring-[#e9b448] font-bold rounded-md text-sm px-4 py-2.5 text-center leading-5 flex items-center justify-center absolute top-12.5 right-12.5" onClick={copyHandle}>
                {copySuccess ? <LuClipboardCheck className="inline-block mr-2" size={16} /> : <LuClipboardCopy className="inline-block mr-2" size={16} />}
                {copySuccess ? 'Copied!' : 'Copy Link'}
            </button>
            <Image
                src={profile.profilePicture}
                alt={`${profile.handle}'s profile picture`}
                width={128}
                height={128}
                className="mb-6 h-32 w-32 rounded-full object-cover md:mt-0 mt-20"
            />
            <h1 className="mb-8 text-4xl font-bold text-center text-white">@{profile.handle}</h1>
            <div className="flex w-full max-w-xl flex-col gap-4 mb-8">
                {profile.links.map((item) => (
                    <Link
                        key={item._id || item.link}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-white px-6 py-4 text-center font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        {item.linkName}
                    </Link>
                ))}
            </div>
            <div className="icons flex gap-4">
                <FaTiktok className="w-10 h-10 text-white" />
                <FaYoutube className="w-10 h-10 text-white" />
                <FaXTwitter className="w-10 h-10 text-white" />
                <FaInstagram className="w-10 h-10 text-white" />
            </div>
        </div>
    )
}

export default ProfilePage
