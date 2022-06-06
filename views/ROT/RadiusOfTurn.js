import React from 'react';
import { View, StyleSheet, TextInput, Text, Alert, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateRadiusOfTurn extends React.Component {    
   
  constructor(props) {
    super(props);
  
    this.state = {
      firstValue: '',
      secondValue: '',
      sum: 0
    };
  }
  
  calculateSum = () => {
    const { firstValue, secondValue } = this.state;
  
    this.setState({
      sum: ((0.955) * Number(firstValue)) / Number(secondValue),
    });
    this.ButtonAlert(this.state.sum)
  }

  ButtonAlert = () => {
    Alert.alert(
      "Rate of Turn Radius",
      `Radius ${this.state.sum.toFixed(2)} (nm)`,
      [
        { text: "OK", onPress: () => console.log(`${this.state.sum}`) }
      ]
    );

  }


  render() {
    return (
      <View>
        <Text style={styles.text}>Speed (kts)</Text>
        <TextInput
          style={styles.input}
          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />

        <Text style={styles.text}>ROT (dpm)</Text>
        <TextInput
          style={styles.input}
          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />
  
        <TouchableHighlight onPress={this.calculateSum}
        style={styles.button}>
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

export default CalculateRadiusOfTurn;