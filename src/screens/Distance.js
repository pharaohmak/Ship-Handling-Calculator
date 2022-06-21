import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Button } from 'react-native';
import DistanceForm from '../forms/DistanceForm';

const Distance = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <DistanceForm />

 
  <Button 
  title="Calculate Speed" 
  onPress={() => navigation.navigate('Speed')} 
  />

<Button 
  title="Calculate Time" 
  onPress={() => navigation.navigate('Time')} 
  />

<Button 
  title="Go Home" 
  onPress={() => navigation.navigate('Home')} 
/>
  
</View>
    
);

export default Distance;
