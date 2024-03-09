import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
 
const rootElement = document.getElementById("root");
if (!rootElement) {
    console.error("Root element not found");
    // Handle the error appropriately, e.g., by creating the element or stopping execution
} else {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
}
