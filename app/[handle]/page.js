import React from 'react'
import { notFound } from 'next/navigation'
import ProfilePage from '@/components/profile-page'
import GradientBackground from '@/components/gradientbackground';

export default async function Page({ params }) {
    const { handle } = await params;

    const request = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/profiles?handle=${handle}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    });

    if (!request.ok) {
        throw new Error(`Profile request failed with status ${request.status}`);
    }

    const { profile } = await request.json();
    if (!profile) {
        notFound();
    }

    return <GradientBackground><ProfilePage profile={profile} /></GradientBackground>
}