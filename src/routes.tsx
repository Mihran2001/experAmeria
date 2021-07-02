import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import OwnDataPage from "components";

function NotFoundPage() {
  return <h3> Not correct url </h3>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/application">
          <OwnDataPage />
        </Route>
        <Route path="/">
          <OwnDataPage />
        </Route>
        <Route path="/profile">
          <OwnDataPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
