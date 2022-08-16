import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat, getChats, loadMore } from "../features/chat/dbSlice";

export default function useDatabase() {
    const [db, setDB] = useState(),
        bubble = useSelector((state: any) => state.chat),
        [items, setItems] = useState<IDBCursor>(),
        [page, setPage] = useState(1),
        dispatch = useDispatch();

    useEffect(() => {
        let database;
        const openDB = window.indexedDB.open("chatsapp", 1);

        openDB.onupgradeneeded = function (e) {
            //@ts-ignore
            let db = e?.currentTarget!.result;
            if (!db.objectStoreNames.contains("chats")) {
                db.createObjectStore("chats", { keyPath: "key" });
            }
        };

        openDB.onerror = function (e) {
            console.log(e);
        };

        openDB.onsuccess = function (e) {
            //@ts-ignore
            database = e.target.result;
            //@ts-ignore
            if (!database.objectStoreNames.contains("chats")) {
                database.createObjectStore("chats", { keyPath: "key" });
            }

            setDB(database);
            getAllChats(database);
        };
    }, []);

    const addToDB = (data: any) => {
        if (!db) {
            return;
        }
        //@ts-ignore
        const transaction = db.transaction(["chats"], "readwrite");
        const store = transaction.objectStore("chats");

        transaction.onerror = (e: string) => {
            console.log(e);
        };
        const addrequest = store.add(data);
        addrequest.onerror = function (e: any) {
            console.log("Error", e.target.error.name);
        };

        addrequest.onsuccess = function (e: any) {
            dispatch(addChat(data));
        };
    };

    const getAllChats = (db: any, isLoadMore?: boolean) => {
        if (!db) {
            return;
        }
        //@ts-ignore
        const transaction = db.transaction(["chats"], "readwrite");
        const store = transaction.objectStore("chats");
        const getrequest = store.getAll();

        getrequest.onerror = function (e: any) {
            console.log("Error", e.target.error.name);
        };

        getrequest.onsuccess = function (e: any) {
            const _items = [];
            setItems(e.target.result);

            for (let i = 0; i < 25; i++) {
                if (!e.target.result[i]) {
                    break;
                }
                _items.push(e.target.result[i]);
            }
            dispatch(getChats(_items));
        };
    };

    const getMoreItems = () => {
        const _items = [],
            _page = page * 25 - 25;
        setPage(page+1)
        for (let i = _page; i <= _page * page; i++) {
            //@ts-ignore
            if (!items![i]) {
                break;
            }
            //@ts-ignore
            _items.push(items[i]);
        }

        dispatch(loadMore(_items));
    };

    useEffect(() => {
        if (bubble.chatBubble) {
            const bubbleElem = document.getElementById(bubble.chatBubble);
            if (!bubbleElem) {
                return;
            }
            let prevPos = bubbleElem!.scrollHeight;
            if (bubbleElem?.children && bubbleElem?.children.length > 0) {
                bubbleElem?.children[bubbleElem?.children.length - 1].scrollIntoView();
            }
            bubbleElem?.addEventListener("scroll", function (e) {
                if (bubbleElem!.scrollTop < prevPos) {
                    prevPos = bubbleElem!.scrollTop;
                    const scrollPosition = (bubbleElem!.scrollTop / bubbleElem!.scrollHeight) * 100;
                    if (scrollPosition <= 30 && scrollPosition > 25) {
                        console.log("At Top");
                        getMoreItems();
                        prevPos = bubbleElem!.scrollTop;
                    }
                }
            });
        }
    }, [items]);

    return { db, addToDB, getAllChats };
}
