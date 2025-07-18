export default function Page() {
  return (
      <div className="flex-grow md:overflow-y-auto h-screen p-4">
        <div id="top-row" className="flex w-full h-1/5 justify-between gap-4">
          <div id="joker-slot" className="border-4 border-gray-400 rounded-xl w-full"></div>
          <div id="consumable-slot" className="border-4 border-gray-400 rounded-xl w-50"></div>
        </div>
        <div id='playing-field' className="flex w-full h-3/5 item-center p-2">

        </div>
        <div id="bottom-row" className="flex w-full h-1/5 justify-between gap-4">
          <div id="joker-slot" className="border-4 border-gray-400 rounded-xl w-full"></div>
          <div id="consumable-slot" className="border-4 border-gray-400 rounded-xl w-40"></div>
        </div>
      </div>
  )
}