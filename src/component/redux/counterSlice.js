import { createSlice } from "@reduxjs/toolkit";
import { tasksAllData } from "../data";

const initialState = {
  tasksData: tasksAllData,
  showModal: false,
  attachmentData: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleTaskData: (state, action) => {
      // action.payload.map((item) => {
      //   item.items.map((item) => {
      //     console.log(item.attachedData);
      //   });
      // });
      console.log(action.payload);
      state.tasksData = action.payload;
    },
    handleShowModal: (state, action) => {
      state.showModal = true;
      state.attachmentData = action.payload;
    },
    handleHideModal: (state) => {
      state.showModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleTaskData, handleShowModal, handleHideModal } =
  counterSlice.actions;

export default counterSlice.reducer;
