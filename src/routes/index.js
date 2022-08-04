import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/Home/index.js'
import SignUp from '../pages/SignUp/index.js'
import SignIn from '../pages/SignIn/index.js'

function routes() {
  return(
    <Switch>
        <Route exact path='/'><Redirect to={{pathname: '/signin'}} /></Route>
        <Route exact path='/home'><Home/></Route>
        <Route exact path='/signin'><SignIn/></Route>
        <Route exact path='/signup'><SignUp/></Route>
    </Switch>
  )
}

export default routes;