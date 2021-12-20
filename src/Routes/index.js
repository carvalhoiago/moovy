import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MyLibrary } from '../pages/MyLibrary';
import { Search } from '../pages/Search'

export const AppRoutes = () => {

  return(
    <Switch>
      <Route exact path='/' component={MyLibrary}/>
      <Route exact path='/search' component={Search}/>
    </Switch>
  );

}

export default AppRoutes;