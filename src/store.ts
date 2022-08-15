import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/chat/chatSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
