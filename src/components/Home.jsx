
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      id: pasteId || Date.now().toString(36),
      title: title,
      content: value,
      createdAt: new Date().toISOString()
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  };

  return (
    <main className="container mx-auto px-4 lg:px-0 max-w-screen-lg">
      <div className="mt-10 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          📝 {pasteId ? "Update Your Paste" : "Create a New Paste"}
        </h2>

        <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
          <input
            className="w-full md:w-2/3 p-3 rounded-2xl border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            type="text"
            placeholder="Enter paste title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={createPaste}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-2xl transition-all"
          >
            {pasteId ? "Update My Paste" : "+ Create Paste"}
          </button>
        </div>

        <textarea
          className="w-full min-h-[300px] p-4 rounded-2xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          placeholder="Enter paste content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={15}
        />
      </div>
    </main>
  );
};

export default Home;
