import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native';

class SwingCircleForm extends Component {

  state = {
    swingCircle: 0,
    input: '',
    shackles: '',
    loa: '',
    calc: 0
  }

  onButtonPressed = function() { this.setState({ shackles:this.state.shackles })}
  _handleTextChange = shackles => { this.setState({ shackles }); 
  };
  _handleTextChange2 = loa => { this.setState({ loa }); 
  };

  calcSwingCircle = function() {
    var x = parseFloat(this.state.shackles);
    var y = parseFloat(this.state.loa);
    var calc = ((x * 27.5) + y) / 1852;
    this.setState({ swingCircle: calc})
    return
  }
    
  render() {
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Swing Circle:  {this.state.swingCircle.toFixed(2)} (nm)
          </Text>

          <Text style={styles.text}> # Shackles on Deck (decimal): </Text>
          <TextInput
            value={this.state.shackles}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange}
            style={styles.input}
          />
          <Text style={styles.text}> Vessel LOA (meters): </Text>
          <TextInput
            value={this.state.loa}
            keyboardType = 'numeric'
            onChangeText={this._handleTextChange2}
            style={styles.input}
          />
          <TouchableHighlight onPress={this.calcSwingCircle.bind(this)} 
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

export default SwingCircleForm;