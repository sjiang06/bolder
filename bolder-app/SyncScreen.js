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

export default class SyncScreen extends Component {
	render() {
	    return (
	    	<View style={{height:'100%', width: '100%'}}>
			        <Image source={require('./images/bolder_sync.png')} 
	      				style={{width: '100%', height: '100%'}}/>	        
		    </View>
		);
	}
};