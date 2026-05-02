import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const _stored = JSON.parse(localStorage.getItem("collection"));
const initialState = {
  items: Array.isArray(_stored) ? _stored : [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      const payload = action.payload;
      const payloadId =
        payload && typeof payload === "object" ? payload.id : payload;

      const alreadyExits = state.items.find((item) => item.id === payloadId);
      if (!alreadyExits) {
        state.items.push(payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
        console.log("add");
      }
    },
    removeCollection: (state, action) => {
      const payload = action.payload;
      const payloadId =
        payload && typeof payload === "object" ? payload.id : payload;
      state.items = state.items.filter((item) => item.id !== payloadId);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    addedToast() {
      toast.success("Added to collection !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast() {
      toast.error("Remove from collection!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const {
  addToCollection,
  removeCollection,
  clearCollection,
  addedToast,
  removeToast
} = collectionSlice.actions;
export default collectionSlice.reducer;
