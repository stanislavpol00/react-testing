import React from "react";
import { render } from "react-dom";

import Todos from "./todos";
import Headers from "./header"

export default function App() {
    return (
        <>
            <Headers />
            <Todos />
        </>
    )
}

render(<App />, document.getElementById("app"));
