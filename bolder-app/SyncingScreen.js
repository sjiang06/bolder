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

import RNPickerSelect from 'react-native-picker-select';
//npm install react-native-picker-select





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
		          <Image source={require('./images/bolder_logo.png')} 
		          style={{width: 400, height: 200}}/>
		        </View>
		        <View style={styles.phonePickerView}>
		        	<View style={styles.phonePicker}>
			        	<RNPickerSelect
			        		onValueChange={(value) => {
		                        this.props.navigation.navigate('Home');
		                    }}
			        		items={phones}
			        		placeHolder={{
			        			label: 'Select a phone',
			        			value: 'Select a phone',
			        		}}
			        	>
			        	</RNPickerSelect>
		        	</View>
		        </View>
		        
	        </View>        );
	}
}