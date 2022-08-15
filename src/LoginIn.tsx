import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";

import { Container as div } from "@mui/system";
import { useStyles } from "./utils/styles";
import clsx from "clsx";
import { Button, FormGroup, OutlinedInput, Typography } from "@mui/material";
import { login } from "./features/chat/chatSlice";
import { useDispatch } from "react-redux";

export default function Login() {
    const { classes } = useStyles(),
        [name, setName] = useState(""),
        dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(login(name))
    };
    
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    return (
        <div className={clsx("dark-background", classes.fullScreen)}>
            <div>
                <form onSubmit={handleSubmit} className={classes.flexCenter}>
                    <Typography  className={clsx("cap-text", "text-white",)} sx={{mb: 5, textAlign:"center"}}><strong>You are welcome.</strong> <br /> Please enter your name to continue</Typography>
                    <OutlinedInput
                     fullWidth
                        className="white-placeholder"
                        value={name}
                        onChange={handleNameChange}
                        name="name"
                        placeholder="Enter your name to continue"
                    />
                    <Button fullWidth sx={{ mt: 2 }} type="submit" variant="outlined">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
