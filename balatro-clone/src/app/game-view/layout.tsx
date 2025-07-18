import SideNav from "../ui/game-view/sidenav";
import {Metadata} from 'next'

export const experimental_ppr = true

export const metadata: Metadata = {
  title: 'Game View',
}

export default function GameViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  )
}