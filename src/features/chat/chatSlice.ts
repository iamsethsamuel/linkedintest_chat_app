import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { name: "" },
    reducers: {
        login: (state, action) => {
            console.log(action.payload)
            state.name = action.payload;
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
