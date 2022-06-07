import React from 'react';
import { View, StyleSheet, TextInput, Text, Alert, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateAdvanceDistance extends React.Component {
   
  constructor(props) {
    super(props);
  
    this.state = {
      delta: '',
      radius: '',
      advance: 0
    };
  }
  
  calculateSum = () => {
    const { delta, radius } = this.state;
  
    this.setState({
      advance: Number(radius) *  (Math.tan(((Number(delta)/2))))
    });
    this.ButtonAlert()
  }

  ButtonAlert = () => {
    Alert.alert(
      "Advance Distance in Turn ",
      `Advance ${this.state.advance.toFixed(2)} (nm)`,
      [
        { text: "OK", onPress: () => console.log(Math.round(`${this.state.advance}`)) }
      ]
    );

  }
  
  render() {
    return (
      <View>
        <Text style={styles.text}>Degrees of Course Change (Delta)</Text>
        <TextInput
        style={styles.input}
          value={this.state.delta}
          onChangeText={(delta) => this.setState({delta})}
        />

        <Text style={styles.text}>Radius (Nautical Miles)</Text>
        <TextInput
        style={styles.input}

          value={this.state.radius}
          onChangeText={(radius) => this.setState({radius})}
        />
  
        <TouchableHighlight style={styles.button} onPress={this.calculateSum}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'

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
    borderRadius: 50
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
})

export default CalculateAdvanceDistance;