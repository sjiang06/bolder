import React, { Component } from 'react';
import { SQLite } from 'expo';
import styled from 'styled-components/native';
import {Button, View, 
  Text, StyleSheet, 
  Image, ScrollView, 
  TouchableOpacity, PanResponder,
  Animated, TextInput} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import styles from './src/stylesheet';
import CalendarScreen from './CalendarScreen.js';

export default class SyncingScreen extends Component {


	render() {
		let phones = [
			{
				label: 'iPhone 10',
				value: 'iphone10',
			},
		];
		const resizeMode = 'cover';
		return(
			<View style={{flex: 1}}>
					<View
			          style={{
			            position: 'absolute',
			            top: 0,
			            left: 0,
			            width: '100%',
			            height: '100%',
			          }}
			        >
			          <Image
			            style={{
			              flex: 1,
			              resizeMode,
			            }}
			            source={{uri: 'https://i.ibb.co/kyynhkK/home.png'}}
			          />
	        	</View>
	        	<View style={styles.logo}>
			        <Image source={{uri: 'https://i.ibb.co/QXQkQmB/BOLDERlogo.png'}} 
			        style={{width: 350, height: 200, alignItems: 'center'}}/>
		        </View>
		        <View style={styles.syncingButtonContainer}>
			        <TouchableOpacity
			        	style={styles.syncingButton}
			        	onPress={()=>this.props.navigation.navigate('HomeScreen')}
			       	>
	         			<Text> Sync with earpiece </Text>
	       			</TouchableOpacity>
       			</View>
		        
	        </View>        
	    );
	}
}