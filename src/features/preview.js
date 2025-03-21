import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

export const preview = createSlice({
  name: "preview",
  initialState,
  reducers: {
    togglePreview: (state) => (state = !state),
    hidePreview: (state) => (state = false),
  },
});

export const { togglePreview, hidePreview } = preview.actions;
export default preview.reducer;
