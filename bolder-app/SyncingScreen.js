import React, { Component } from 'react';
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
		        <View style={{top: 200, width:'100%', flexDirection:'column', alignItems:'center'}}>
			        <Text style={{fontFamily: 'Gill Sans',
							    fontSize: 30,
							    color: '#646363',
							    textAlign: 'center',
							    alignItems: 'center',}}> Select earpiece to sync </Text>
			        <View style={{flexDirection: 'column',
						    justifyContent: 'center',
						    width: 300,
						    height: 75,
						    backgroundColor: '#00b2ca',
						    borderRadius: 25,
						    borderWidth: 2,
						    borderColor: 'white',
						    alignItems: 'center',
							marginTop:20}}>
				        <TouchableOpacity
				        	onPress={()=>this.props.navigation.navigate('HomeScreen')}
				       	>
		         			<Text style={{fontFamily: 'Gill Sans',
							    fontSize: 23,
							    color: 'white',
							    textAlign: 'center',
							    alignItems: 'center',}}
							> Minh-An's BOLDer earpiece </Text>
		       			</TouchableOpacity>
	       			</View>

	       		</View>
		        
	        </View>        
	    );
	}
}