import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatBubble: null
    },
    reducers: {
        setChatBubble: (state, action)=>{
            state.chatBubble = action.payload
        }
    }
})

export const {setChatBubble} = chatSlice.actions

export default chatSlice.reducer
