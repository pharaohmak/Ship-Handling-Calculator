import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

class AdvanceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advance: 0,
            input: '',
            radius: '',
            delta: '',
            calc: 0
        };
        this.onButtonPressed = this.onButtonPressed.bind(this);
        this.calcAdvance = this.calcAdvance.bind(this);
        this.storeData = this.storeData.bind(this);
    }


  onButtonPressed = function() { this.setState({ advance:this.state.radius })}
  _handleTextChange = radius => { this.setState({ radius }); 
  };
  _handleTextChange2 = delta => { this.setState({ delta }); 
  };


  calcAdvance = async function() {
  
    var x = parseFloat(this.state.radius);
    var y = parseFloat(this.state.delta);
    var calc = (x) * (Math.tan((Math.tan((y / 2)))));
    this.setState({ advance: calc})
    this.storeData(await this.state.advance)
    return;
  }

   
  
  //save the input
 storeData = async () => {
    let advance = this.state.advance;
    await AsyncStorage.setItem('@advance', advance.toString())
    console.log('Stored Advance: ' + advance)
    return;
}
        

   render() {
    const {advance} = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
        <Text style={styles.paragraph}>
          Advance Distance:  { advance.toFixed(2) } (nm)
        </Text>

        <Text style={styles.text}> Radius (nm): </Text>
        <TextInput
          value={this.state.radius}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={styles.input}
        />

        <Text style={styles.text}> Delta (deg): </Text>
        <TextInput
          value={this.state.delta}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.calcAdvance.bind(this)} 
          style={styles.button}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>

      </View>

      </TouchableWithoutFeedback>

      
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  text: {
    color: 'black',
    fontSize: 18,
    padding: 10,
    
  },
  input: {
    backgroundColor: 'grey',
    width: 300,
    height: 35,
    color: 'white'
  },
  button: {
    padding: 18,
    margin: 16,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 50, 
    width: 300
  },
  buttonText:{
    color: 'white'
  }
});

export default AdvanceForm;