import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/chat/userSlice";
import dbReducer from "../features/chat/dbSlice";
import chatReducer from "../features/chat/chatSlice";
import { createStateSyncMiddleware, initStateWithPrevTab } from "redux-state-sync";

const middleWares = [createStateSyncMiddleware({blacklist:["user/login"]})];

export const store = configureStore({
    reducer: {
        user: userReducer,
        db: dbReducer,
        chat: chatReducer,
    },
    middleware: middleWares,
})
 initStateWithPrevTab(store);

