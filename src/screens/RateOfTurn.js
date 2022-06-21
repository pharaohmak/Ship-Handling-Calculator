import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from 'react-native';
import ROTForm from '../forms/ROTForm';

const RateOfTurn = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ROTForm />

    <Button
      title="Calculate Radius"
      onPress={() => navigation.navigate('RadiusOfTurn')}
    />

    <Button 
      title="Calculate Speed" 
      onPress={() => navigation.navigate('RateOfTurnSpeed')} 
    />

    <Button 
    title="Go Home" 
    onPress={() => navigation.navigate('Home')} 
    />
    
  </View>
    
);


export default RateOfTurn;
