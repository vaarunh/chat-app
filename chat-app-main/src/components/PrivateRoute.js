import React  from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children, ...routeProps }) => {

    // eslint-disable-next-line no-unused-vars
    const {profile, isLoading} =  useProfile();

    if(isLoading && !profile){
        return<Container>
            <Loader center vertical size="md" content="Loading..." speed="slow" color="Red"/>
        </Container>

    }

    // eslint-disable-next-line no-constant-condition
    if(!profile && !isLoading)
    {
        return <Redirect to="/signin" />;
    }

    return <Route {...routeProps}>{children}</Route>;
    
};

export default PrivateRoute;
