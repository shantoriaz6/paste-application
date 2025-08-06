import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { updateToPastes } from "../redux/pasteSlice";
import { addToPastes } from "../redux/pasteSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    console.log("inside use effect");
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      console.log("page found");
    
    setTitle(paste.title);
    setValue(paste.content);
  }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }
    //after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between ">
        <input
          className="p-2 rounded-2xl mt-2 w-[59%] pl-5 border-solid border-2 border-red-600"
          type="text"
          placeholder="Enter tittle here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="rounded-2xl mt-2 border-solid border-2 border-red-600">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 border-solid border-2 border-red-600"
          value={value}
          placeholder="Enter content Here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
