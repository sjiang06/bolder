import React, { Component } from 'react';
import { SQLite } from 'expo';
import styled from 'styled-components/native';
import {Button, View, 
  Text, StyleSheet, 
  Image, ScrollView, 
  TouchableOpacity, PanResponder,
  Animated, TextInput} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './src/stylesheet';
import { App } from './App.js';

export default class PracticeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			goal: "",
			skill: ""
		}
	}
	render() {
		const { params } = this.props.navigation.state;
		this.state.title = params.title;
		this.state.goal = params.params.goal;
		this.state.skill = params.params.skill;
	    return (
	    	<View style={{backgroundColor: '#C8E0E3', flex: 1, alignItems: 'center'}}>

	    			<TextInput
			          style={{backgroundColor: '#C8E0E3', flex: 1, alignItems: 'center'}}
			          onChangeText={(text) => this.title.setState({text})}
			          value={this.state.title}
			        />

			        <Text style={{fontSize:30, color: '#646363', fontFamily: 'Gill Sans', marginTop:50}}> {params.title} </Text>
			        <Text style={{fontSize:20, color: '#646363', fontFamily: 'Gill Sans'}}>October {params.date}</Text>
			        <Image style={{width: 150, height: 150, margin: 20}} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
			        <Text style={styles.headerText}>{params.params.skill}</Text>
			        <Text style={styles.subheaderText}>Your goal:</Text>
			        <View style={{backgroundColor:params.params.color, width:280, height:30, borderRadius:25}}>
			        	<Text style={{fontSize:25, color:'white', fontFamily: 'Gill Sans', textAlign:'center'}}>{params.params.goalChosen.toUpperCase()}</Text>
			       	</View>
			        <Text style={{textAlign: 'center', fontSize:20, color: '#646363', fontFamily: 'Gill Sans', paddingVertical: 20, paddingLeft: 20, 
			        	paddingRight: 20}}> {"Good job with always initiating the conversation first! Now try to make eye contact when speaking to the other person."}
			        	</Text>
			        <View style={{height: 150, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
				        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HeadphoneScreen')}>
						          <View style={styles.pillButton}>
						          		<View style={{flexDirection: 'row'}}>
						          			<Ionicons name="md-headset" color='white' size={25}/>
						          			<Text style={styles.pillButtonText}> PRACTICE </Text>
						          		</View>
						          </View>
				      	</TouchableOpacity>
				      	 <TouchableOpacity onPress={()=>this.props.navigation.navigate('AchievementList')}>
						          <View style={styles.pillButton}>
						          		<View style={{flexDirection: 'row'}}>
						          			<Ionicons name="ios-star-outline" color='white' size={25}/>
						          			<Text style={styles.pillButtonText}> ACHIEVEMENTS </Text>
						          		</View>
						          </View>
				      	</TouchableOpacity>
				    </View>
		    </View>
		);
	}
};