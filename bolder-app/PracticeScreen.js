import React, { Component } from 'react';
import { SQLite } from 'expo';
import styled from 'styled-components/native';
import {Button, View, 
  Text, StyleSheet, 
  Image, ScrollView, 
  TouchableOpacity, PanResponder,
  Animated} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './src/stylesheet';
import { App } from './App.js';

export default class PracticeScreen extends Component {
	render() {
	    return (
	    	<View style={{backgroundColor: '#C8E0E3', flex: 1, alignItems: 'center'}}>
			        <Text style={{fontSize:30, color: '#646363', fontFamily: 'Gill Sans', marginTop:50}}> djnfwjenf </Text>
			        <Text style={{fontSize:14, color: '#646363', fontFamily: 'Gill Sans'}}> qwkdqkwjdb </Text>
			        <Image style={{width: 150, height: 150}} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
			        <Text style={{textAlign: 'center', fontSize:14, color: '#646363', fontFamily: 'Gill Sans', paddingVertical: 20, paddingLeft: 20, 
			        	paddingRight: 20}}> {"Good job with "}efbefqe
			        	</Text>
			        <Text> ejf2ekjfbk2</Text>
		    </View>
		);
	}
};