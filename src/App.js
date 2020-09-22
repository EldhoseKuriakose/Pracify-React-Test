import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CareerPage from './pages/CareerPage/CareerPage.component';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.component';
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/careers' component={CareerPage} />
          <Route exact path='/about' component={AboutUsPage} />
        </Switch>
    </div>
  );
}

export default App;
