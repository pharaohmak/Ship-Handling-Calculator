import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from 'react-native';
import ROTSpeedForm from '../forms/ROTSpeedForm';

const RateOfTurnSpeed = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ROTSpeedForm />
  
    <Button 
      title="Go to Home" 
      onPress={() => navigation.navigate('Home')} />
    
  </View>
    
);


export default RateOfTurnSpeed;
