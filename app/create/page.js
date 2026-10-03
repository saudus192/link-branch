"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useToast } from '@/components/toast'
import { Trash, View, Copy, Check, Loader2 } from 'lucide-react'
import { motion, MotionConfig } from 'framer-motion'

// ---- Animation variants (only used by the form) ----
const formVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const buttonMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 20 },
}

const Page = () => {
  const { showToast } = useToast();
  const searchParams = useSearchParams();
  const [handle, setHandle] = useState(searchParams.get('handle')?.toLowerCase() || '');
  const [profilePicture, setProfilePicture] = useState('');
  const [links, setLinks] = useState([{ linkName: '', link: '' }]);
  const [viewProfile, setViewProfile] = useState(false);
  const [createdHandle, setCreatedHandle] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  const claimHandle = async () => {
    if (isClaiming) return;
    setIsClaiming(true);
    try {
      // Check if handle is empty
      if (!handle) {
        showToast('Handle cannot be empty. Please enter a handle and try again.', 'validation');
        setIsClaiming(false);
        return;
      }
      // if space in handle, alert user
      if (handle.includes(' ')) {
        showToast('Handle cannot contain spaces. Please remove any spaces and try again.', 'validation');
        setIsClaiming(false);
        return;
      }
      const normalizedHandle = handle.toLowerCase();
      setHandle(normalizedHandle);
      const response = await fetch(`/api/profiles?handle=${normalizedHandle}`);

      if (!response.ok) {
        throw new Error('Failed to claim handle');
      }
      const data = await response.json();
      if (data.exists) {
        showToast('Handle is already taken. Please choose another one.', 'validation');
        setHandle(''); // Clear the handle input if taken
        setIsClaiming(false);
      } else {
        showToast('Handle is available! You can proceed to create your profile.', 'success');
        setIsClaiming(false);
      }
    } catch (error) {
      console.error('Error claiming handle:', error);
      showToast('Failed to claim handle. Please try again.', 'error');
      setIsClaiming(false);
    }

  };

  const addLinksHandler = () => {
    setLinks([...links, { linkName: '', link: '' }]);
  }

  const updateLink = (index, field, value) => {
    setLinks(links.map((item, itemIndex) => (
      itemIndex === index ? { ...item, [field]: value } : item
    )));
  }

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    if (isCreating) return;
    setIsCreating(true);
    try {
      const formData = new FormData();
      formData.append('handle', handle);
      formData.append('profilePicture', profilePicture);
      formData.append('links', JSON.stringify(links));
      const response = await fetch('/api/profiles', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        showToast(data.error || 'Failed to create profile', 'error');
        return;
      }

      if (response.ok) {
        setCreatedHandle(handle);
        setViewProfile(true);
        showToast('Profile created successfully.', 'success');
        // Reset form fields after successful profile creation
        setHandle('');
        setProfilePicture('');
        setLinks([{ linkName: '', link: '' }]);
      }
    } finally {
      setIsCreating(false);
    }
  };

  const copyProfileLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${createdHandle}`);
    setCopySuccess(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen overflow-hidden bg-[#E9F5F3]">
        <div className="left flex h-full min-h-0 flex-col">
          <div className="nav h-25 w-full flex items-center justify-start bg-[#E9F5F3]">
            <Link className='m-5 mx-10' href="/"><Image className="" src="/Transparent_Logo.png" alt="Logo" width={100} height={50} /></Link>
            {/* View Profile Button and Copy Link Button after creation */}
            {viewProfile && (
              <div className="ml-auto mr-10 flex gap-2">
                <Link href={`/${createdHandle}`} target="_blank" rel="noopener noreferrer" className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-md text-sm px-4 py-2.5 text-center leading-5 flex items-center gap-2">
                  <View className="inline-block" size={16} />
                  <p className='sm:block hidden'>View Profile</p>
                </Link>
                <button className="text-white bg-linear-to-r from-green-500 via-green-600 to-green-700 hover:bg-linear-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold rounded-md text-sm px-4 py-2.5 text-center leading-5 flex items-center gap-2" onClick={copyProfileLink}>
                  {copySuccess ? <Check className="inline-block" size={16} /> : <Copy className="inline-block" size={16} />}
                  {copySuccess ? <p className='sm:block hidden'>Copied!</p> : <p className='sm:block hidden'>Copy Link</p>}
                </button>
              </div>
            )}
          </div>
          <motion.form
            onSubmit={handleCreateProfile}
            className="create-form min-h-0 flex-1 overflow-y-auto p-5 flex flex-col gap-4"
            variants={formVariants}
            initial="hidden"
            animate="show"
          >
            {/* Form fields will go here */}
            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4 text-center">Create Your Profile</motion.h2>
            <motion.h1 variants={itemVariants} className="text-xl font-semibold">Step 1: Claim a Handle</motion.h1>
            {/* Claim your handle */}
            <motion.div variants={itemVariants} className="form-group">
              <label className="block text-sm font-medium text-gray-700" htmlFor="handle">Claim your handle</label>
              <motion.input whileFocus={{ scale: 1.01 }} transition={{ duration: 0.15 }} className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="handle" name="handle" placeholder="Enter your handle" value={handle} onChange={(e) => setHandle(e.target.value)} />
            </motion.div>
            {/* Claim button */}
            <motion.button variants={itemVariants} whileHover={buttonMotion.whileHover} whileTap={buttonMotion.whileTap} className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-md text-sm px-4 py-2.5 text-center leading-5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mb-5" type="button" onClick={claimHandle} disabled={isClaiming}>
              {isClaiming ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Claiming...
                </>
              ) : (
                'Claim Handle'
              )}
            </motion.button>
            <motion.h1 variants={itemVariants} className="text-xl font-semibold">Step 2: Upload a Profile Picture</motion.h1>
            {/* Upload your profile picture */}
            <motion.div variants={itemVariants} className="form-group mb-5">
              <label className="block text-sm font-medium text-gray-700" htmlFor="profilePicture">Upload your profile picture</label>
              <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[70%]" type="file" id="profilePicture" name="profilePicture" accept=".jpg,.jpeg,.png,image/jpeg,image/png" onChange={(e) => setProfilePicture(e.target.files[0])} />
              {/* Only JPG, PNG, or JPEG files allowed */}
              <p className="text-xs text-gray-500">Only JPG, PNG, or JPEG files are allowed.</p>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-xl font-semibold">Step 3: Add as many links as you want</motion.h1>
            {/* Add your link name and link */}
            {links.map((item, index) => (
              <motion.div variants={itemVariants} className="form-group" key={index}>
                <label className="block text-sm font-medium text-gray-700" htmlFor={`linkName-${index}`}>Link Name</label>
                <motion.input whileFocus={{ scale: 1.01 }} transition={{ duration: 0.15 }} className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id={`linkName-${index}`} name="linkName" placeholder="Enter link name" value={item.linkName} onChange={(e) => updateLink(index, 'linkName', e.target.value)} required />
                <label className="block text-sm font-medium text-gray-700" htmlFor={`link-${index}`}>Link</label>
                <motion.input whileFocus={{ scale: 1.01 }} transition={{ duration: 0.15 }} className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[70%]" type="url" id={`link-${index}`} name="link" placeholder="Enter your link" value={item.link} onChange={(e) => updateLink(index, 'link', e.target.value)} required />
                {/* Trash icon to remove link */}
                {links.length > 1 && (
                  <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} type="button" onClick={() => setLinks(links.filter((_, i) => i !== index))} className="ml-2 text-red-500 hover:text-red-700">
                    <Trash />
                  </motion.button>
                )}
              </motion.div>
            ))}
            {/* Button for adding more links */}
            <motion.button variants={itemVariants} whileHover={buttonMotion.whileHover} whileTap={buttonMotion.whileTap} className="text-white bg-linear-to-r from-green-400 via-green-500 to-green-600 hover:bg-linear-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold rounded-md text-sm px-4 py-2.5 text-center leading-5 mb-5" type="button" onClick={addLinksHandler}>
              Add Another Link
            </motion.button>
            <motion.h1 variants={itemVariants} className="text-xl font-semibold">Step 4: Links added? Create your Profile</motion.h1>
            {/* Create profile button */}
            <motion.button
              variants={itemVariants}
              whileHover={isCreating ? undefined : buttonMotion.whileHover}
              whileTap={isCreating ? undefined : buttonMotion.whileTap}
              className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-md text-sm px-4 py-2.5 text-center leading-5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mb-5"
              type="submit"
              disabled={isCreating}
            >
              {isCreating ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Creating...
                </>
              ) : (
                'Create Profile'
              )}
            </motion.button>
          </motion.form>
        </div>

        <div className="right relative w-full h-full overflow-hidden lg:block hidden">
          <Image
            className="object-cover"
            src="/Create_Image.jpg"
            alt="Description"
            fill
          />
        </div>

        <style jsx global>{`
        .create-form::-webkit-scrollbar {
          width: 8px;
        }
        .create-form::-webkit-scrollbar-track {
          background: transparent;
        }
        .create-form::-webkit-scrollbar-thumb {
          background-color: #a0d9cf;
          border-radius: 10px;
        }
        .create-form::-webkit-scrollbar-thumb:hover {
          background-color: #7fc9bc;
        }

        /* Firefox */
        .create-form {
          scrollbar-width: thin;
          scrollbar-color: #a0d9cf transparent;
        }
      `}</style>

      </div>
    </MotionConfig>
  )
}

export default Page