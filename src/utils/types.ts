import { AnyAction, Reducer } from "@reduxjs/toolkit";

export interface ChatsType {
    user: string;
    message: string;
    date: string;
    key: number;
}

type user = { name: string };
type chat = { chatBubble: string };
type db = { chats: ChatsType[] };

export interface StoreType {
    user: user;
    chat: chat;
    db: db;
}
