import React from 'react';
import { Router, Route,Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashBoardPage from '../Components/DashBoardPage'
import NotFoundPage from '../Components/notFoundPage'
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

  const AppRouter = ()=> (
    <Router history= {history}>
    <div>
      <Switch>
      <PublicRoute path = "/" component={LoginPage} exact={true} />
      <PrivateRoute path = "/dashboard" component={DashBoardPage} />
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  
    </Router>
  
  );

  export default AppRouter