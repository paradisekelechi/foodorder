import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Order from './order/Order';
import NotFound from './NotFound';

const MainLayout = () => (
    <div>
        <header>
            Food application Header
      </header>
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/order' component={Order} />
                <Route exact path='notfound' component={NotFound} />
            </Switch>
        </main>
    </div>
);

const App = () => {
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

export default App;