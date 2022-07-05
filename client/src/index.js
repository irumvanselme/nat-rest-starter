import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import App from "./App";

import { NotificationContainer } from "react-notifications";

import "react-notifications/dist/react-notifications.css";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<NotificationContainer />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
