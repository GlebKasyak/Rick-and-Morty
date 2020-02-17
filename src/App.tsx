import * as React from "react"
import * as ReactDom from "react-dom";
import { HashRouter  as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./components/Store";

import { HomePage, FavoritePage } from "./Pages";
import { Header } from "./components";

const App = (): JSX.Element => (
    <Router>
        <StoreProvider>
            <Header />
                <Switch>
                     <Route exact path="/" component={ HomePage } />
                     <Route path="/favorite-page" component={ FavoritePage } />
                </Switch>
        </StoreProvider>
    </Router>
);

ReactDom.render(<App />, document.querySelector(".app-root"));