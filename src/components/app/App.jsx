import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
} from 'react-router-dom';
import ListOfCharacters from './components/ListOfCharacters';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path="/" 
          exact
          render={(routerProps) => <ListOfCharacters {...routerProps} />} 
        />
        <Route 
          path="/detail/:myPokemonId" 
          exact
          render={(routerProps) => <DetailPage {...routerProps} />} 
        />
      </Switch>
    </Router>
  );
}
