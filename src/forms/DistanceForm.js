import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native';

class DistanceForm extends Component {

  state = {
    distance: 0,
    input: '',
    speed: '',
    time: '',
    calc: 0
  }
  onButtonPressed = function() { this.setState({ text:this.state.speed })}
  _handleTextChange = speed => { this.setState({ speed }); 
  };
  _handleTextChange2 = time => { this.setState({ time }); 
  };

  calcDistance = function() {
    var x = parseFloat(this.state.speed);
    var y = parseFloat(this.state.time);
    var calc = x * y;
    this.setState({ distance: calc})
    return;
  }

  render() {
  
    const { distance } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Distance:  {distance} (nm)
          </Text>

          <Text style={styles.text}> Speed (kts): </Text>
          <TextInput
            value={this.state.speed}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange}
            style={styles.input}
          />
          <Text style={styles.text}> Time (hours): </Text>
          <TextInput
            value={this.state.time}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange2}
            style={styles.input}
          />
          <TouchableHighlight onPress={this.calcDistance.bind(this)} 
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

export default DistanceForm;
