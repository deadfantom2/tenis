import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

// Mode routes
import PublicRoute from './Routes/Public.route';

// Pages
const HomePage = lazy(() => import('./Pages/Home.page'));

const App = () => {
  const PublicAccess = () => (
    <Switch>
      <Route exact path="/">
        <PublicRoute exact path="/" component={HomePage} />
      </Route>
      <Route path="*"></Route>
    </Switch>
  );

  return (
    <Router>
      <main>
        <Suspense fallback={''}>
          <Switch>
            <PublicAccess />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
