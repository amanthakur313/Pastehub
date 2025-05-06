// import React from "react";

// const Paste =()=>{
//     return (
//         <div>
// Paste
//         </div>
//     )
// }

// export default Paste

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPaste } from "../redux/pasteSlice";
import { useNavigate } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/?pasteId=${id}`);
  };

  const handleDelete = (id) => {
    dispatch(removeFromPaste(id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Pastes</h2>

      {pastes.length === 0 ? (
        <p className="text-gray-600">No pastes available. Create one from the Home page.</p>
      ) : (
        <div className="grid gap-4">
          {pastes.map((paste) => (
            <div
              key={paste.id}
              className="bg-white rounded-xl p-4 shadow border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{paste.title}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(paste.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{paste.content}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(paste.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(paste.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Paste;
