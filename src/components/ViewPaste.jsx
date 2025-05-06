import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((p) => p.id === id || p._id === id);

  if (!paste) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center text-red-600 font-semibold">
        Paste not found. It might have been deleted.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{paste.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        Created on: {new Date(paste.createdAt).toLocaleString()}
      </div>
      <div className="whitespace-pre-line bg-gray-100 p-4 rounded-xl shadow">
        {paste.content}
      </div>
    </div>
  );
};

export default ViewPaste;
