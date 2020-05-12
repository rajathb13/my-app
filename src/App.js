import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import './index.scss';

// components
import Home from './pages/Home';
import Topics from './pages/Topics'
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';

const App = () => {
  let [menuState, setMenuState] = useState(false);
  return (
    <BrowserRouter>
      <div className="App container">
        <Header menuState={menuState} setMenuState={setMenuState} />
        <SidebarNav menuState={menuState} setMenuState={setMenuState} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/Topics" component={Topics} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;