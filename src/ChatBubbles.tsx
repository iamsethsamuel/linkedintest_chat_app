import { useEffect, useRef, } from "react";
import { Avatar, Box, Icon, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./utils/styles";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { setChatBubble } from "./features/chat/chatSlice";

export default function ChatBubbles() {
    const ref = useRef<HTMLDivElement>(),
        dispatch = useDispatch(),
        chats = useSelector((state: any) => state.db.chats),
        { classes } = useStyles();

    useEffect(() => {
        if (ref.current) {
            dispatch(setChatBubble(ref.current.id))
            
        }
    }, []);

    return (
        <Box
            id="chats"
            ref={ref}
            sx={{ mb: 10, mt: 10, zIndex: -1, p: 1, overflowX: "hidden" }}
            className={clsx(classes.absoluteBottom, classes.flexColumn, classes.fullScreen)}>
            {chats.map((chat: ChatType, index:number) => (
                <ChatBubble key={chat.key+index} chat={chat} />
            ))}
        </Box>
    );
}

interface ChatType {
    user: string;
    message: string;
    date: string;
    key: number;
}

const ChatBubble = (props: { chat: ChatType }) => {
    const chat = props.chat,
        { classes } = useStyles(),
        user = useSelector((state: any) => state.user.name);

    return (
        <div className={user === chat.user ? classes.alignRight : classes.alignLeft}>
            {user !== chat.user && (
                <Avatar sx={{ mr: 1 }}>
                    <Icon>
                        <FontAwesomeIcon icon={faUser} />
                    </Icon>
                </Avatar>
            )}
            <Box
                className={classes.chatBubble}
                sx={{
                    mb: 1,
                    backgroundColor: user === chat.user ? "#259b25" : "#1976d2",
                    p: 1,
                }}>
                <h5>{user === chat.user ? "You" : chat.user}</h5>
                <Typography component={"h1"}>{chat.message}</Typography>
                <h6>{chat.date}</h6>
            </Box>
            {user === chat.user && (
                <Avatar sx={{ ml: 1 }}>
                    <Icon>
                        <FontAwesomeIcon icon={faUser} />
                    </Icon>
                </Avatar>
            )}
        </div>
    );
};
