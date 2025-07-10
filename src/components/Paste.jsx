
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
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📂 Your Pastes</h2>

      {pastes.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 text-center">No pastes available. Create one from the Home page.</p>
      ) : (
        <div className="grid gap-6">
          {pastes.map((paste) => (
            <div
              key={paste.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-600 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-0">
                  {paste.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(paste.createdAt).toLocaleString()}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap break-words">
                {paste.content}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleEdit(paste.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-sm font-medium"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(paste.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition text-sm font-medium"
                >
                  🗑️ Delete
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
