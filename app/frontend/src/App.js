import React from "react";
import staticfolder from "./staticfolder";
import "./App.scss"

class App extends React.Component {
    render() {
        return (
            <img src={staticfolder + "favicon.png"} />
        );
    }
}

export default App;
