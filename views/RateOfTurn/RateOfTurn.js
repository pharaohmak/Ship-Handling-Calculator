import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

class CalculateRateOfTurn extends React.Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
        speed: '',
        radius: '',
        sum: 0
        };
    }
    
      calculateSum = () => {
        const { speed, radius} = this.state;
      
        this.setState({
            sum: Math.round(Number(speed) / Number(radius))

        });

      }
      
      render() {
        return (
          <View>
            <Text style={styles.value}>{`Your Rate of Turn is  ${this.state.sum} deg/min`}</Text>

              <View style={styles.container}>
              <Text style={styles.text}>Speed (kts):</Text>
              <TextInput
              value={this.state.speed}
              style={styles.textInput}
              onChangeText={(speed) => this.setState({speed})}
            />
              </View>
              
            
            <Text style={styles.text}>Radius (nm):</Text>
            <TextInput
              value={this.state.radius}
              style={styles.textInput}
              onChangeText={(radius) => this.setState({radius})}
            />

           
      
            <TouchableHighlight onPress={this.calculateSum} style={styles.button}>
              <Text style={styles.buttonText}>Calculate</Text>
            </TouchableHighlight>
      
          </View>
        );
      }
    
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black'
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        backgroundColor: 'grey',
        width: 375,
        padding: 10,
        margin: 10,
        color: 'white'
    }, 
    text: {
        padding: 10,
        fontSize: 18
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'red',
        margin: 10,
        marginTop: 45,
        borderRadius: 20
    },
    value: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 30,
        width: 375,
        margin: 10,
        backgroundColor: 'red',
        marginBottom: 50
    }

})

export default CalculateRateOfTurn;
