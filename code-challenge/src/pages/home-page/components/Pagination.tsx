import { CgPlayTrackNext, CgPlayTrackPrev ,  } from "react-icons/cg";

export default function Pagination() {
  return (
    <div className="flex items-center gap-6 text-emerald-800">
        <CgPlayTrackPrev className="text-2xl text-emerald-800 hover:text-emerald-500 cursor-pointer transition mr-2"/>
        <div className="flex items-center gap-1">
            <span className="bg-emerald-500 w-5 h-5 rounded-full text-white flex justify-center items-center font-bold">1</span>
            <span className="text-xs">/</span>
            <span className="text-xs pt-1">12</span>
        </div>
        <CgPlayTrackNext className="text-2xl text-emerald-800 hover:text-emerald-500 cursor-pointer transition"/>
    </div>
  )
}
