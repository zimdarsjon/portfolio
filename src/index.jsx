import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = () => {
    return <h1>Hello Worlds</h1>
}

root.render(<App />);
