import React, { Component } from "react";

class NotFound extends Component {
    render() {
        return (
            <div class="error-pages">

                <img src="img/404.png" alt="404" class="icon" width="400" height="260" />
                <h1>Sorry but we couldn’t find this page</h1>
                <h4>It seems that this page doesn’t exist or has been removed</h4>

                <div class="bottom-links">
                    <a href="/home" class="btn btn-default">Go Homepage</a>
                </div>

            </div>
        )
    }
}

export default NotFound;
