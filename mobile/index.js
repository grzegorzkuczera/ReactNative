//Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

import { name as appName } from './app.json';

//Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);


//Render it to device
AppRegistry.registerComponent(appName, () => App);