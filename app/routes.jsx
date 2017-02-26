import React from "react";
import { Route, IndexRoute, useRouterHistory} from "react-router";
import { createHistory } from "history";
import App from "./components/App";
import About from "./components/About";
import Hallo from "./components/Hallo";
import Article from "./components/Article";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="/hallo/:userId" component={Hallo} />
        <Route path="/article" component={Article} />
    </Route>
);
