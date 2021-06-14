import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Context} from './context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';

function CustomRouter({isPrivate, ... rest}) {
  const {authenticated} = useContext(Context);

  if(isPrivate && !authenticated) {
    return(
      <Redirect to="/login" />
    )
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustomRouter exact path="/login" component={Login} />
      <CustomRouter exact path="/users" component={Users} />
    </Switch>
  );
}