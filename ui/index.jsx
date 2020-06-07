import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App";
import './style.css';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

// OfflinePluginRuntime.install();

