import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

class CalculateAdvanceInTurn extends React.Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
        deg: '',
        radius: '',
        speed: '',
        sum: 0
        };
    }
    
      calculateSum = () => {
        const { deg, radius, speed  } = this.state;
      
        this.setState({
            sum: Number(radius) / Number(speed),
            len: Number(deg) / Number(radius)

        });
      }
      
      render() {
        return (
          <View>
            <Text style={styles.value}>{`Your Advance In Turn is ${this.state.sum} (nm):`}</Text>
            <Text style={styles.long}>{`Your Vector Length is ${this.state.len} (min)` }</Text>


              <View style={styles.container}>
              <Text style={styles.text}>Deg of C/C:</Text>
              <TextInput
              value={this.state.deg}
              style={styles.textInput}
              onChangeText={(deg) => this.setState({deg})}
            />
              </View>
              
            
            <Text style={styles.text}>Radius (nm):</Text>
            <TextInput
              value={this.state.radius}
              style={styles.textInput}
              onChangeText={(radius) => this.setState({radius})}
            />

            <Text style={styles.text}>Speed (kts):</Text>
            <TextInput
              value={this.state.speed}
              style={styles.textInput}
              onChangeText={(speed) => this.setState({speed})}
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
        padding: 20,
        width: 375,
        margin: 10,
        backgroundColor: 'red',
        marginBottom: 30,
    },
    long: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        width: 375,
        margin: 10,
        backgroundColor: 'red',
        marginBottom: 30,
    }

})

export default CalculateAdvanceInTurn;
