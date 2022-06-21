import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native';

class RadiusForm extends Component {
  state = {
    radius: 0,
    input: '',
    speed: '',
    rot: '',
    calc: 0
  }
  onButtonPressed = function() { this.setState({ speed:this.state.speed })}
  _handleTextChange = speed => { this.setState({ speed }); 
  };
  _handleTextChange2 = rot => { this.setState({ rot }); 
  };

  calcRadius = function() {
    var x = parseFloat(this.state.speed) 
    var y = parseFloat(this.state.rot)
    var calc = ((0.955) * x) / y;
    this.setState({ radius: calc})
    return;
}
    
  render() {
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Radius:  {this.state.radius.toFixed(2)} (nm)
          </Text>

          <Text style={styles.text}> Speed (kts): </Text>
          <TextInput
            value={this.state.speed}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange}
            style={styles.input}
          />
          <Text style={styles.text}> Rate of Turn (dpm): </Text>
          <TextInput
            value={this.state.rot}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange2}
            style={styles.input}
          />
          <TouchableHighlight onPress={this.calcRadius.bind(this)} 
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

export default RadiusForm;
