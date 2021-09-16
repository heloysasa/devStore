import {BrowserRouter, Switch, Route} from 'react-router-dom'


import ConteuStore from "./pages/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={ConteuStore} />
      </Switch>
    </BrowserRouter>
  );
}
