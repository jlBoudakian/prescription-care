import React, { Component } from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";

class App extends Component {
    render() {
        return (
            <div >
                <Header />
                <Sidebar />
            </div>
        );
    }
}

export default App;