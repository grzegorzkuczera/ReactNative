import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm  from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC6EFj2w9zw3Jj3IJr822K8F-oj_iU67Uw',
            authDomain: 'authentication-d5fd7.firebaseapp.com',
            databaseURL: 'https://authentication-d5fd7.firebaseio.com',
            projectId: 'authentication-d5fd7',
            storageBucket: 'authentication-d5fd7.appspot.com',
            messagingSenderId: '578833973129'
        });
    }
    render() {
        return (
            <View>
            <Header headerText="Authentication" />
            <LoginForm />
            </View>
        );
    }
}

export default App;