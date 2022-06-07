import React from 'react';
import { View, StyleSheet, TextInput, Text, Alert, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateRateOfTurnSpeed extends React.Component {
   
  constructor(props) {
    super(props);
  
    this.state = {
      rot: '',
      radius: '',
      speed: 0
    };
  }
  
  calculateSum = () => {
    const { rot, radius } = this.state;
  
    this.setState({
      speed: (Number(rot) * Number(radius)) /0.955
    });
    this.ButtonAlert()
  }

  ButtonAlert = () => {
    Alert.alert(
      "Rate Of Turn Speed",
      `Speed ${this.state.speed.toFixed(2)} (kts)`,
      [
        { text: "OK", onPress: () => console.log(Math.round(`${this.state.speed}`)) }
      ]
    );

  }
  
  render() {
    return (
      <View>
        <Text style={styles.text}>ROT (dpm)</Text>
        <TextInput
        style={styles.input}

          value={this.state.rot}
          onChangeText={(rot) => this.setState({rot})}
        />

        <Text style={styles.text}>Radius (nm)</Text>
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



export default CalculateRateOfTurnSpeed;
