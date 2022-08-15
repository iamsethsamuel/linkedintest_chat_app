import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import Chat from "./Chat";
import Login from "./LoginIn";
import { useSelector } from "react-redux";

function App() {
    const theme = createTheme();
    const [isLoggedIn] = useSelector((state: any) => state.user.name);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {isLoggedIn ? <Chat /> : <Login />}
        </ThemeProvider>
    );
}

export default App;
