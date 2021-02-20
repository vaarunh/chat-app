import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeProps }) => {

// eslint-disable-next-line no-unused-vars
const {profile, isLoading} =  useProfile();

if(isLoading && !profile){
    return<Container>
        <Loader center vertical size="md" content="Loading..." speed="slow" color="Red"/>
    </Container>

}

if(profile && !isLoading){
    return <Redirect to="/" />;

}

return <Route {...routeProps}>{children}</Route>;

};

export default PublicRoute;
