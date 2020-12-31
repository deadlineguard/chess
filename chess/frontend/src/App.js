import React from "react";
import staticfolder from "./staticfolder";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Look on this beatutiful image</h1>
                <img src={staticfolder + "testimage.png"}/>
            </div>
        );
    }
}

export default App;
