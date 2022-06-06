import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateDistance extends React.Component {
   
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
      sum: Number(firstValue) * Number(secondValue)
    });
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

        <Text style={styles.text}>Time (hours)</Text>
        <TextInput
        style={styles.input}

          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />
  
        <TouchableHighlight onPress={this.calculateSum}>
          <Text>Calculate</Text>
        </TouchableHighlight>
  
        <Text>{`Distance ${this.state.sum.toFixed(2)} (nm)`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
    text: {
      color: 'black',
      fontSize: 16,
    },
    input: {
      backgroundColor: 'grey'
    }
  })

export default CalculateDistance;
