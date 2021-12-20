import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MyLibrary } from '../pages/MyLibrary';

export const AppRoutes = () => {

  return(
    <Switch>
      <Route exact path='/' component={MyLibrary}/>
    </Switch>
  );

}

export default AppRoutes;