import React from 'react';
import AlbumPage from './pages/AlbumPage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={AlbumPage} />
        </Switch>
    </div>
  );
}

export default App;
