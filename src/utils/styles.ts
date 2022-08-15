import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    flexCenter: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    },

    fullScreen: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        width: "100vw"
    }
}));
