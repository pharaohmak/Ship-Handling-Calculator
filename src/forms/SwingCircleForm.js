import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "./Styles"
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

    const { swingCircle } = this.state;
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Swing Circle:  {swingCircle.toFixed(2)} (nm)
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

export default SwingCircleForm;