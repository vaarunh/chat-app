import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Icon, Row, Col, Panel, Button, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';

// eslint-disable-next-line arrow-body-style
const SignIn = () => { 

    const signInWithProvider = async provider =>{

        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

            if(additionalUserInfo.isNewUser)
            {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                    pic: user.photoURL

                })
            }

            Alert.success('Signed In Succesfully!', 4000)   

        } catch (err) {
            Alert.error(err.message, 4000);
        }
       
    };
    const onFacebookSignIn = () => {
        signInWithProvider( new firebase.auth.FacebookAuthProvider() )
    };
    const onGoogleSignIn = () => {
        signInWithProvider( new firebase.auth.GoogleAuthProvider() )
    };

return <Container>
    <Grid className="mt-page">
        <Row>
            <Col xs={24} md={12} mdOffset={6}>
                <Panel>
                    <div className="text-center">
                        <h2>Welcome to Chat</h2>
                        <p>Progressive Chat Platform</p>
                    </div>

                    <div className="mt-3">
                        <Button block color="blue" onClick={onFacebookSignIn}>
                            <Icon icon="facebook-official"/> Continue with Facebook
                        </Button>

                        <Button block color="green" on onClick={onGoogleSignIn}>
                            <Icon icon="google"/> Continue with Google
                        </Button>
                    </div>
                    
                </Panel>
            </Col>
        </Row>
    </Grid>
</Container>;
};
export default SignIn;