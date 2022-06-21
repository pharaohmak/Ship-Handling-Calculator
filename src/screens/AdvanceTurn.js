import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Button } from 'react-native';
import AdvanceForm from '../forms/AdvanceForm';

const AdvanceInTurn = ({navigation}) => (
  
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <AdvanceForm />

    <Button title="Calculate Vector Length" onPress={() => navigation.navigate('VectorWaypoint')}/>
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      
    </View>
    
);

export default AdvanceInTurn;
