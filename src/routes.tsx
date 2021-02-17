import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/football-app" exact component={Home} />
    <Route path="/football-app/team/:id?" component={Team} />
  </Switch>
);

export default Routes;
