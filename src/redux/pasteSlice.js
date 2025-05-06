// import { createSlice } from '@reduxjs/toolkit'
// import toast from 'react-hot-toast';
// const initialState = {
//  pastes: localStorage.getItem("pastes")
//  ? JSON.parse(localStorage.getItem("pastes"))
//  : []
// }

// const pasteSlice = createSlice({   // <-- Capital 'P' hata diya
//   name: 'paste',
//   initialState,
//   reducers: {
//     addToPastes: (state, action) => {
// const paste = action.payload;
// state.pastes.push(paste);
// localStorage.setItem("pastes",state.pastes);
// toast("Paste Created Successfuly  ")
//     },
//     updateToPastes: (state, action) => {

//     },
//     reseteAllPastes: (state, action) => {

//     },
//     removeFromPaste: (state, action) => {

//     }
//   },
// })

// export const { addToPastes, updateToPastes, reseteAllPastes, removeFromPaste } = pasteSlice.actions;

// export default pasteSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
};

const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully");
    },

    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(p => p.id === updatedPaste.id);
      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully");
      } else {
        toast.error("Paste not found");
      }
    },

    reseteAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes have been reset.");
    },

    removeFromPaste: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter(paste => paste.id !== id);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Removed");
    }
  },
});

export const {
  addToPastes,
  updateToPastes,
  reseteAllPastes,
  removeFromPaste
} = pasteSlice.actions;

export default pasteSlice.reducer;
