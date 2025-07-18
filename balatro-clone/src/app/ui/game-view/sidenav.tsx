'use client'

import Image from 'next/image';

import usePlayerStore from '@/app/store/playerStore';
import useGameStore from '@/app/store/gameStore';

export default function SideNav() {

  const player = usePlayerStore((state) => state.player);
  const game = useGameStore((state) => state.gameState)

  return (
    <div className="flex w-full h-full rounded-lg flex-col px-2 py-2 bg-gray-700 md:px-2">
      <h1 className='rounded-lg bg-amber-500 text-center font-bold text-lg p-2'>Big blind</h1>
      <div className='flex justify-around gap-1 bg-amber-800 rounded-lg p-2 my-1'>
        <Image src="/assets/Big_Blind.webp" width={70} height={70} className='' alt='Current blind'/>
        <div className='rounded-md bg-gray-700 px-2'>
          <h2 className='text-md'>Score at least</h2>
          <div className='flex items-center justify-between'>
            <Image src="/assets/White_stake.webp" width={30} height={30} className='' alt='Current stake'/>
            <span className='text-2xl font-bold'>{game.minimalScore}</span>
          </div>
          <span className='flex text-xs justify-center py-1'>To earn: $$$$</span>
        </div>
      </div>
      <div className='flex bg-gray-900 p-2 rounded-lg gap-2'>
        <h2 className='w-20'>Round score</h2>
        <div className='w-70 flex flex-column bg-gray-700 rounded-lg p-2 justify-between items-center'>
          <Image src="/assets/White_stake.webp" width={30} height={30} className='' alt='Current stake'/>
          <span className='text-2xl font-bold'>0</span>
        </div>
      </div>
      <div className='gap-2 mt-2 rounded-lg bg-gray-900'>
        <div className='flex justify-center p-2 w-full'>
          <h1 className='text-xl mr-1'>Two Pair</h1>
          <h2 className='text-xs'>lvl.1</h2>
        </div>
        <div className='flex justify-center p-2 w-full'>
          <div className='text-4xl bg-blue-400 w-full rounded-lg px-2 text-end py-2'>
            40
          </div>
          <div className='text-4xl mx-1'>
            X
          </div>
          <div className='text-4xl w-full bg-red-400 rounded-lg px-2 text-start py-2'>
            4
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2 rounded-lg'>
        <button className='text-2xl bg-red-500 rounded-xl w-30 p-2 h-full'>Run Info</button>
        <div className='w-70'>
          <div className='flex justify between w-full gap-2'>
            <div className='bg-gray-900 rounded-lg p-2 w-full'>
              <h1 className='text-sm flex justify-center item-center pb-1'>Hands</h1>
              <span className='text-blue-500 text-2xl bg-gray-700 flex justify-center item-center p-2 rounded-xl'>{player.hands}</span>
            </div>
            <div className='bg-gray-900 rounded-lg p-2'>
              <h1 className='text-sm flex justify-center item-center pb-1'>Discards</h1>
              <span className='text-red-500 text-2xl bg-gray-700 flex justify-center item-center p-2 rounded-xl'>{player.discards}</span>
            </div>
          </div>
          <div className='bg-gray-900 rounded-lg p-2 w-full mt-2'>
            <span className='bg-gray-700 rounded-lg p-2 text-3xl flex justify-center item-center text-yellow-500'>${player.money}</span>
          </div>
        </div>
      </div>
      <div className='flex justify between w-full gap-2 mt-2'>
        <div className='bg-gray-900 rounded-lg p-2 w-50'>
          <h1 className='text-sm flex justify-center item-center pb-1'>Ante</h1>
          <span className='text-yellow-500 text-2xl bg-gray-700 flex justify-center item-center p-2 rounded-xl'>{game.ante}/8</span>
        </div>
        <div className='bg-gray-900 rounded-lg p-2 w-50'>
          <h1 className='text-sm flex justify-center item-center pb-1'>Round</h1>
          <span className='text-yellow-500 text-2xl bg-gray-700 flex justify-center item-center p-2 rounded-xl'>{game.round}</span>
        </div>
      </div>
    </div>
  );
}
