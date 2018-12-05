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

import { Dropdown } from 'react-native-material-dropdown';
//npm i react-native-dropdown-menu --save
import CalendarPicker from 'react-native-calendar-picker';
//npm install --save react-native-calendar
//npm install --save react-native-calendar-picker

import moment from 'moment';
//npm install --save moment react-moment

let today = moment();
let day = today.clone().startOf('month');
let customDatesStyles = [];
while(day.add(5, 'day').isSame(today, 'month')) {
  customDatesStyles.push({
    date: day.clone(),
    style: {backgroundColor: '#F79256'},
  });
}

export default class CalendarScreen extends Component {
		render() {
			return (
				<View style={styles.calendarFrame}>
					<View style={styles.buttonFrame}>
			          	  <TouchableOpacity onPress={()=>this.props.navigation.navigate('AchievementsList')}>
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

				    <View style={{top: 150}}>
				    	<CalendarPicker selectedDayColor='#00b2ca' customDatesStyles={customDatesStyles}/>
				    	
				    </View>

			    </View>
			);
		}
	};