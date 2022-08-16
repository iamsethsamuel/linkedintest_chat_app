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
        width: "100vw",
        maxHeight: "100vh",
        overflow: "scroll"
    },

    fixBottom: {
        position: "fixed",
        bottom: 0,
        width: "100vw",
    },

    absoluteBottom: {
        position: "absolute",
        bottom: 0
    },
    chatBubble: {
        zIndex: -1,
        borderRadius: 20,
        width: "fit-content",
        color: "white",
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
    },
    alignLeft: {
        width: "100vw",
        display: "flex",
        justifyContent: "left",
        paddingLeft: "10px"

    },
    alignRight: {
        width: "100vw",
        display: "flex",
        justifyContent: "right",
        paddingRight: "2em"
    }
}));
