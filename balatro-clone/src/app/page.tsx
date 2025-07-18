'use client'

import Page from '@/app/game-view/(overview)/page';
import { redirect } from 'next/navigation';
import {useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    redirect('/game-view')
  })

  return (
    <div className="items-center justify-items-center min-h-screen">
      <Page />
    </div>
  );
}
