import {CssBaseline, ThemeProvider} from "@mui/material";
import {ReactElement} from "react";
import {theme} from "#/app/styles/theme";

export const withMui = (component: () => ReactElement) => () => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {component()}
    </ThemeProvider>
)