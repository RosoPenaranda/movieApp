import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import AddMovie from '../Pages/AddMovie';
import TopFive from '../Pages/TopFive';
import Layout from '../Components/Layout/Layout';
import NotFound from '../Components/NotFound/Notfound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addMovie" component={AddMovie} />
        <Route exact path="/topFive" component={TopFive} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
