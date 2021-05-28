import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./login.js";
import Check from "./check.js";
import Register from "./register.js";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/check" component={Check} />
        <Route path="/register" component={Register} />
      </Switch>
    </HashRouter>

  )
}

export default App;
