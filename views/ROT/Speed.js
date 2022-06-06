import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

/** Input any two variables to get third (all decimals round to tents) */

class CalculateSpeed extends React.Component {
   
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
      sum: (Number(firstValue) * Number(secondValue)) /0.955
    });
  }
  
  render() {
    return (
      <View>
        <Text style={styles.text}>ROT (dpm)</Text>
        <TextInput
        style={styles.input}

          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />

        <Text style={styles.text}>Radius (nm)</Text>
        <TextInput
        style={styles.input}

          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />
  
        <TouchableHighlight onPress={this.calculateSum}>
          <Text>Calculate</Text>
        </TouchableHighlight>
  
        <Text>{`Speed ${this.state.sum.toFixed(2)} (kts)`}</Text>
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



export default CalculateSpeed;
