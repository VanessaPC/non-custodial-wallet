import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateKey from "./features/sign-up";
import Landing from "./features/landing";
import RestoreKey from "./features/restore-key";

import { ROUTES } from "./constants";

const App = () => {
  return (
    <Router>
      <main>
        <Route path={ROUTES.BASE} exact component={Landing} />
        <Route path={ROUTES.SIGN_UP} exact component={CreateKey} />
        <Route path={ROUTES.RECOVERY} exact component={RestoreKey} />
      </main>
    </Router>
  );
};

export default App;
