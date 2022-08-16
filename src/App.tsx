import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Chat from "./Chat";
import Login from "./LoginIn";
import {  useSelector } from "react-redux";

function App() {
    const theme = createTheme(),
        user = useSelector((state: any) => state.user.name);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {user ? <Chat /> : <Login />}
        </ThemeProvider>
    );
}

export default App;
