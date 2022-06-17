import React, { Component } from 'react';
import { View, Button,  } from 'react-native';

import SwingCircleFom from '../forms/SwingCircleForm';


const SwingCircle = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SwingCircleFom/>
        
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        
      </View>
    
);


export default SwingCircle;