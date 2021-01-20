import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Home from './components/Home'

function App() {
   return (
      <Router>
         <Switch>
            <PublicRoute authenticated={false} path={'/'} component={Home} />
            <PublicRoute authenticated={false} path={'/signup'} />
            <PrivateRoute authenticated={true} path={'/chat'} />
         </Switch>
      </Router>
   )
}

export default App
