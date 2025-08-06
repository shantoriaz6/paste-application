import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { updateToPastes } from "../redux/pasteSlice";
import { addToPastes } from "../redux/pasteSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const ViewPaste = () => {
 
  const {id}=useParams();
  const allPastes=useSelector((state)=> state.paste.pastes);
  const paste = allPastes.filter((p)=>p._id===id)[0];
  console.log("final paste:",paste);


  return (
     <div>
      <div className="flex flex-row gap-7 place-content-between ">
        <input
          className="p-2 rounded-2xl mt-2 w-[59%] pl-5 border-solid border-2 border-red-600"
          type="text"
          placeholder="Enter tittle here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
       {/* <button
          onClick={createPaste}
          className="rounded-2xl mt-2 border-solid border-2 border-red-600">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>*/}
      </div>
      <div className="mt-4">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 border-solid border-2 border-red-600"
          value={paste.content}
          placeholder="Enter content Here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste