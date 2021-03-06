import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import DetailPage from '../DetailPage';
import ListOfCharacters from '../ListOfCharacters';
import Header from '../Header';
import '../../App.css';


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <ListOfCharacters {...routerProps} />} 
          />
          <Route 
            path="/detail/:characterId" 
            exact
            render={(routerProps) => <DetailPage {...routerProps} />} 
          />
        </Switch>
      </Router>
    </>
  );
}
