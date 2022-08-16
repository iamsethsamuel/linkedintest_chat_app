import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { AppBar, Box, Container, FormGroup, IconButton, OutlinedInput, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useStyles } from "./utils/styles";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ChatBubbles from "./ChatBubbles";
import useDatabase from "./hooks/db";

export default function Chat() {
    const user = useSelector((state: any) => state.user.name),
        [message, setMessage] = useState(""),
        bubble = useSelector((state: any) => state.chat),
        [color, setColor] = useState(""),
        { addToDB } = useDatabase(),
        { classes } = useStyles();

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            setColor("#1976d2");
        } else {
            setColor("");
        }
        setMessage(e.currentTarget.value);
    };

    const handleSend = () => {
        const bubbleElem = document.getElementById(bubble.chatBubble);
        //@ts-ignore
        bubbleElem?.scrollBy({ top: bubbleElem.scrollHeight });
        if (bubbleElem?.children && bubbleElem?.children.length > 0) {
            //@ts-ignore
            bubbleElem?.children[bubbleElem?.children.length - 1].focus();
            bubbleElem?.children[bubbleElem?.children.length - 1].scrollIntoView();
        }
        if (message) {
            addToDB({ user: user, message: message, date: Date(), key: Date.now() });
            setMessage("");
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} className="cap-text">
                        Chat App
                    </Typography>
                    <Typography>{user}</Typography>
                </Toolbar>
            </AppBar>
            <div>
                <ChatBubbles />
            </div>
            <Container sx={{ zIndex: 1000, mb: 1 }} className={classes.fixBottom}>
                <FormGroup>
                    <OutlinedInput
                        onKeyUpCapture={handleKeyPress}
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Start Typing message"
                        endAdornment={
                            <IconButton onClick={handleSend}>
                                <FontAwesomeIcon color={color} icon={faPaperPlane} />
                            </IconButton>
                        }
                    />
                </FormGroup>
            </Container>
        </Box>
    );
}
