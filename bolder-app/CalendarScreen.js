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
import styles from './src/stylesheet'



export default class CalendarScreen extends Component {
		render() {
			return (
				<View style={styles.buttonFrame}>
		          	  <TouchableOpacity onPress={()=>this.props.navigation.navigate('AchievementsView')}>
				          <View style={styles.nonActiveViewButtons}>
				            <Ionicons color='white' name="ios-star" size={50}/>
				          </View>
				      </TouchableOpacity>
				      <TouchableOpacity onPress={()=>this.props.navigation.navigate('CalendarView')}>
			          	<View style={styles.viewButtons}>
			            	<Ionicons color='white' name="ios-calendar" size={50}/>
			          	</View>
			          </TouchableOpacity>
			    </View>
			);
		}
	};