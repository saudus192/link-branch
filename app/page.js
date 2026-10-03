"use client";
import Image from "next/image";
import Link from "next/link";
import homeImage from "../public/Home_Image.jpg";
import homeImage2 from "../public/Home_Image_2.png";
import homeImage3 from "../public/Home_Image_3.png";
import homeImage4 from "../public/Home_Image_4.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/toast";

const PREFIX = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
    const { showToast } = useToast();

  const router = useRouter();
  const [value, setValue] = useState(PREFIX);

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Prefix ko remove/change hone se prevent karein
    if (!newValue.startsWith(PREFIX)) {
      setValue(PREFIX);
      return;
    }

    setValue(newValue);
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    const handle = value.replace(PREFIX, "").trim();
    if (handle) {
      // Redirect to the create page with the handle as a query parameter
      router.push(`/create?handle=${handle}`);
    } else {
      showToast("Please enter a valid handle.", "validation");
    }
  }

  return (
    <>
      <div className="flex flex-col">

        <div className="lime bg-[#D2E823] min-h-[110vh] grid lg:grid-cols-2 grid-cols-1">
          <div className="left flex flex-col justify-center items-start p-10 gap-6 lg:mt-0 mt-40 ">
            <h1 className="sm:text-7xl text-5xl text-[#254F1A] font-extrabold lg:w-full md:w-[80%]">A link in bio built for you.</h1>
            <p className="text-lg text-[#254F1A] lg:w-full md:w-[80%]">
              Join 70M+ people using LinkBranch for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>
            <form className="flex md:flex-row flex-col items-center gap-5 w-full">
              <input className="bg-white border border-gray-300 rounded-md py-4 px-4 focus:outline-none focus:ring-2 focus:ring-white md:w-[45%] w-[90%]" type="text"
                value={value}
                onChange={handleChange}
                spellCheck={false}
                autoComplete="off"
              />
              <button className="bg-[#254F1A] text-white py-4 px-4 rounded-4xl hover:bg-[#26511B] focus:outline-none md:w-[45%] w-[90%] font-bold" type="submit" onClick={handleGetStarted}>Get started for free</button>
            </form>
          </div>
          <div className="right flex justify-center items-center lg:mb-0 md:mb-12 mb-15">
            <Image className="object-cover rounded-2xl sm:w-125 w-80" src={homeImage} alt="Home Image" width={500} height={500} />
          </div>
        </div>

        <div className="blue bg-[#2665D6] sm:min-h-[110vh] min-h-[80vh] grid lg:grid-cols-2 grid-cols-1">
          <div className="left flex justify-center items-center md:mt-0 mt-10">
            <Image className="sm:w-125 w-80" src={homeImage2} alt="Home Image" width={500} height={500} />
          </div>
          <div className="right flex flex-col justify-center items-start p-10 gap-6 md:mb-0 mb-10">
            <h1 className="sm:text-5xl text-4xl text-[#D2E823] font-extrabold lg:w-full md:w-[80%]">Create and customize your LinkBranch in minutes</h1>
            <p className="text-lg text-white lg:w-full md:w-[80%]">
              Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let LinkBranch automatically enhance it to match your brand and drive more clicks.
            </p>
            <Link href="/create" className="bg-[#D2E823] text-black py-4 px-4 rounded-4xl hover:bg-[#D6ED24] focus:outline-none md:w-[45%] w-[90%] font-bold text-center">Get started for free</Link>
          </div>
        </div>

        <div className="red bg-[#780016] sm:min-h-[110vh] min-h-[80vh] grid lg:grid-cols-2 grid-cols-1">
          <div className="right flex flex-col justify-center items-start p-10 gap-6 md:mt-0 mt-10">
            <h1 className="sm:text-5xl text-4xl text-[#E9C0E9] font-extrabold lg:w-full md:w-[80%]">Share your LinkBranch anywhere you like!</h1>
            <p className="text-lg text-white lg:w-full md:w-[80%]">
              Add your unique LinkBranch URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.
            </p>
            <Link href="/create" className="bg-[#E9C0E9] text-black py-4 px-4 rounded-4xl hover:bg-[#EEC4EE] focus:outline-none md:w-[45%] w-[90%] font-bold text-center">Get started for free</Link>
          </div>
          <div className="left flex justify-center items-center md:mb-0 mb-10">
            <Image className="sm:w-125 w-80" src={homeImage3} alt="Home Image" width={500} height={500} />
          </div>
        </div>

        <div className="green bg-[#E8EFD6] sm:min-h-[110vh] min-h-[80vh] grid lg:grid-cols-2 grid-cols-1">
          <div className="left flex justify-center items-center md:mt-0 mt-10">
            <Image className="sm:w-125 w-80" src={homeImage4} alt="Home Image" width={500} height={500} />
          </div>
          <div className="right flex flex-col justify-center items-start p-10 gap-6 md:mb-0 mb-10">
            <h1 className="sm:text-5xl text-4xl text-[#1E2330] font-extrabold lg:w-full md:w-[80%]">Analyze your audience and keep them engaged</h1>
            <p className="text-lg text-black lg:w-full md:w-[80%]">
              Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
            </p>
            <Link href="/create" className="bg-[#E9C0E9] text-black py-4 px-4 rounded-4xl hover:bg-[#EEC4EE] focus:outline-none md:w-[45%] w-[90%] font-bold text-center">Get started for free</Link>
          </div>
        </div>

      </div>
    </>
  );
}
