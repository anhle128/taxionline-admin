import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

//page
import App from './app.js';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';
import AuthorPage from './components/author/AuthorPage.js';
import NotFoundPage from './components/notFound/NotFoundPage.js';

let DefaultRoute = Router.DefaultRoute;

let routes = (<Router history={browserHistory}>
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="home" component={HomePage}/>
        <Route path="about" component={AboutPage} />
        <Route path="author" component={AuthorPage} />
        <Redirect from="about/*" to="about"/>

        <Route path="*" component={NotFoundPage}/>
    </Route>
</Router>)

export default routes;