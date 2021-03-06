import React, { Component } from 'react';
import styled from 'styled-components/native';
import {Button, View, 
  Text, StyleSheet, 
  Image, ScrollView, 
  TouchableOpacity, PanResponder,
  Animated} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
import styles from './src/stylesheet';
import { App } from './App.js';

export default class HeadphoneScreen extends Component {
	render() {
	    return (
	    	<TouchableOpacity style={{width:'100%', height:'100%'}}onPress={()=>this.props.navigation.navigate('Home')}>
		    	<View style={{height:'100%', width: '100%'}}>
				        <Image source={require('./images/bolder_headset.png')} 
	          				style={{width: '100%', height: '100%'}}/>	        
			    </View>
			</TouchableOpacity>
		);
	}
};