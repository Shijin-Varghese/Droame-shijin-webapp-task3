import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  use: { name: "", email: "", phone: "" },
};
console.log("hhh");
const customerSlice = createSlice({
  name: "userss",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.use = action.payload;
    },
  },
});
export const { setUser } = customerSlice.actions;
// export const selectUser = (state) => state.userss.use;
export default customerSlice.reducer;
