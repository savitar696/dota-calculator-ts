import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {Core} from "#/app/core.tsx";

const root = document.querySelector("#app")

if (!root) {
    throw new Error("Root element not found")
}

createRoot(root).render(
    <StrictMode>
        <Core />
    </StrictMode>
)