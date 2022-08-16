import { createSlice } from "@reduxjs/toolkit";

const dbSlice = createSlice({
    name: "database",
    initialState: { db: null, chats: [], loading: false },
    reducers: {
        getDB: (state, action) => {
            // state.db = action.payload;
        },
        getChats: (state, action) => {
            state.chats = action.payload;
        },

        addChat: (state, action) => {
            //@ts-ignore
            state.chats.push(action.payload);
        },
        
        loadMore: (state, action) => {
            //@ts-ignore
            state.chats = state.chats.concat(action.payload);
        },
    },
});

export const { getDB, getChats, addChat, loadMore } = dbSlice.actions;

export default dbSlice.reducer;
