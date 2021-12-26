import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Packages from './pages/Packages';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/packages' component={Packages} />
          <Route path='/users' component={Users} />
          <Route path='/orders' component={Orders} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
