import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import userReducer from "../features/chat/userSlice";
import dbReducer from "../features/chat/dbSlice";
import chatReducer from "../features/chat/chatSlice";
import { createStateSyncMiddleware, initStateWithPrevTab, withReduxStateSync } from "redux-state-sync";
import { StoreType } from "../utils/types";
const middleWares = [createStateSyncMiddleware({ blacklist: ["user/login"] })];

export const store = configureStore({
    reducer: {
        user: userReducer,
        db: dbReducer,
        chat: chatReducer,
    },
    middleware: middleWares,
});

export const setupStore = (preloadedState?: any) => {
    return configureStore({
        reducer: {
            user: userReducer,
            db: dbReducer,
            chat: chatReducer,
        },
        preloadedState,
    });
};

initStateWithPrevTab(store);
