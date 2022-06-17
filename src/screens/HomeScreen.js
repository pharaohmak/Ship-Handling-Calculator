import React from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.buttonGroupContainer}>
          <Header/>
            <View style={styles.buttonGroup}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('RateOfTurn')}
                >
                    <Text style={styles.textStyle}>Rate of Turn</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('AdvanceInTurn')}
                >
                    <Text style={styles.textStyle}>Advance in Turn</Text>
                </Pressable>
            </View>

            <View style={styles.buttonGroup} >
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('Speed')}
                >
                    <Text style={styles.textStyle}>Speed Time Distance</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('SwingCircle')}
                >
                    <Text style={styles.textStyle}>Anchor Swing Circle</Text>
                </Pressable>
            </View>
        </SafeAreaView>
     
    </View>
);

const styles = StyleSheet.create ({
    buttonGroup: {
        flexDirection: 'row'     
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    button: {
        borderRadius: 20,
        textAlignVertical: "center",
        padding: 10,
        elevation: 2,
        padding: 20
        
    },
    buttonOpen: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue",
        margin: 12,
        height: 150,
        width: 150,
        
    },
    buttonGroupContainer: {
      justifyContent: 'space-between',
    },
    
    
})

export default HomeScreen;

    