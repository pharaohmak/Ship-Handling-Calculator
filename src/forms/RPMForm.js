import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "./Styles"

class RPMForm extends Component {
  state = {
    rpm: 0,
    input: '',
    curRpm: '',
    curSmg: '',
    desSmg: '',
    calc: 0,
    round: 0
  }
  onButtonPressed = function() { this.setState({ rpm:this.state.curRpm })}
  _handleTextChange = curRpm => { (this.setState({ curRpm })); 
  };
  _handleTextChange2 = curSmg => { (this.setState({ curSmg })); }
  _handleTextChange3 = desSmg => { (this.setState({ desSmg })); }
  

  calcRPM = function() {
    var x = parseFloat(this.state.curRpm);
    var y = parseFloat(this.state.curSmg);
    var z = parseFloat(this.state.desSmg);
    var calc = ((y * z) / x);
    this.setState({ rpm: calc})
    return
  }



   
  render() {
  
    const { rpm } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.paragraph}>
          rpm:  { rpm.toFixed(1) } (dpm)
        </Text>

        <Text style={styles.text}> Current RPM: </Text>
        <TextInput
          value={this.state.curRpm}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={styles.input}
        />
        <Text style={styles.text}> Current SMG (nm): </Text>
        <TextInput
          value={this.state.curSmg}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={styles.input}
        />
         <Text style={styles.text}> Desired SMG (nm): </Text>
        <TextInput
          value={this.state.desSmg}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange3}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.calcRPM.bind(this)} 
          style={styles.button}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
      </View>

      </TouchableWithoutFeedback>

      
    );
  }
}
export default RPMForm;