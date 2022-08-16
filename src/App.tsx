import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Chat from "./components/Chat";
import Login from "./components/LoginIn";
import { useSelector } from "react-redux";
import { StoreType } from "./utils/types";

function App() {
    const theme = createTheme(),
        user = useSelector((state: StoreType) => state.user.name);

        return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {user ? <Chat /> : <Login />}
        </ThemeProvider>
    );
}

export default App;
