import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Button } from 'react-native';
import RadiusForm from '../forms/RadiusForm';

const RadiusOfTurn = ({navigation}) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <RadiusForm />
          
          <Button
            title="Calculate Speed"
            onPress={() => navigation.navigate('RateOfTurnSpeed')}
          />
          <Button 
            title="Go Home" 
            onPress={() => navigation.navigate('Home')} />
          
        </View>
    
);



export default RadiusOfTurn;

    