import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => (
    <Route exact path="/" component={Feed} />
);

const LoggedOutRoutes = () => (
    <Route exact path="/" component={Auth} />
);

const Routes = ({ isLoggedIn }) => 
    isLoggedIn? <LoggedInRoutes /> : <LoggedOutRoutes />;


Routes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default Routes;