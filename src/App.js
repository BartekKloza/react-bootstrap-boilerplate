import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
