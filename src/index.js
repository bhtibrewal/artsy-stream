import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom'
import { VideoStateProvider, ThemeProvider, UserContextProvider, VideoFilterProvider, ToastProvider, PlaylistModalProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
        <UserContextProvider>
          <VideoStateProvider>
            <VideoFilterProvider>
              <PlaylistModalProvider>
                <ToastProvider>
                  <App />
                </ToastProvider>
              </PlaylistModalProvider>
            </VideoFilterProvider>
          </VideoStateProvider>
        </UserContextProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


