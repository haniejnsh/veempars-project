import { CgPlayTrackNext, CgPlayTrackPrev ,  } from "react-icons/cg";

interface propsType {
    totalPage:number;
    pageCounter:(p: number) => void;
    pageNumber:number;
}

export default function Pagination({totalPage , pageCounter,pageNumber}:propsType) {
    const next=()=>{
        if(((pageNumber/10)+1)<totalPage){
            pageCounter(pageNumber+10)
        } 
    }
    const prev=()=>{
        if(pageNumber>=10){
            pageCounter(pageNumber-10)
        } 
    }
    
  return (
    <div className="flex items-center gap-6 text-emerald-800">
        <CgPlayTrackPrev onClick={prev} className="text-2xl text-emerald-800 hover:text-emerald-500 cursor-pointer transition mr-2"/>
        <div className="flex items-center gap-1">
            <span className="bg-emerald-500 w-5 h-5 rounded-full text-white flex justify-center items-center font-bold">{(pageNumber/10)+1}</span>
            <span className="text-xs">/</span>
            <span className="text-xs pt-1">{totalPage}</span>
        </div>
        <CgPlayTrackNext onClick={next} className="text-2xl text-emerald-800 hover:text-emerald-500 cursor-pointer transition"/>
    </div>
  )
}
