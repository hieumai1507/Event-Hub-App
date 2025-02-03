const { createSlice } = require("@reduxjs/toolkit");

interface AuthState {
  id: String;
  email: String;
  accessToken: String;
}
const initialState: AuthState = {
  id: "",
  email: "",
  accessToken: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.authData = action.payload;
    },
  },
});
export const authReducer = authSlice.reducer;
export const { addAuth } = authSlice.actions;

export const authSelector = (state: any) => state.authReducer.authData;
