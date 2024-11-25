import {createTheme} from "@mui/material";
import { indigo, red } from "@mui/material/colors"

export const theme = createTheme({
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    palette: {
        mode: "dark",
        primary: {
            main: indigo["500"],
        },
        secondary: {
            main: indigo["300"],
        },
        error: {
            main: red[400],
        },
    },
})