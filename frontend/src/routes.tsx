import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TodoForm from './pages/TodoForm';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos" component={TodoForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
