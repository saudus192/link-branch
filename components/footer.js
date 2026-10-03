"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname();
    const showFooter = pathname === "/" || pathname === "/products" || pathname === "/templates" || pathname === "/marketplace" || pathname === "/learn" || pathname === "/pricing";
    return ( <> { showFooter && <footer 
            className="bg-[#DAF0EE] text-black py-4">
                <div className="container mx-auto text-center">
                    <div className='flex items-center justify-center'>
                        <p>&copy; {new Date().getFullYear()}</p>
                        <Image className='mx-1.5' src="/Footer_Image.png" alt="Logo" width={90} height={90} />
                        <p>All rights reserved.</p></div>
                </div>
            </footer>}
        </>
    )
}

export default Footer