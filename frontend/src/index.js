import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from "react-router-dom";

import MainMenu from "./MainMenu";
import Game from "./Game";
import NotFound from "./NotFound";

import 'normalize.css';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainMenu}/>
                <Route path="/game" component={Game}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);
