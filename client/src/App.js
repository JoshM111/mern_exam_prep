import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AllSkiffs from './componenets/AllSkiffs';
import EditSkiff from './componenets/EditSkiff';
import NewSkiff from './componenets/NewSkiff';
import OneSkiff from './componenets/OneSkiff';

function App() {
  const NotFound = () => {
    return(
      <div>Route Not Found</div>
    ) 
  };
  return (
    <div className="App">
      <Router >
        <AllSkiffs path="/skiff" />
        <NewSkiff path="/skiff/new" />
        <OneSkiff path="/skiff/:id" />
        <EditSkiff path="/skiff/:skiffId/edit"/>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
