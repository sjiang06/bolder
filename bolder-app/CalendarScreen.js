import React, { Component } from 'react';
import styled from 'styled-components/native';
import {Button, View, 
  Text, StyleSheet, 
  Image, ScrollView, 
  TouchableOpacity, PanResponder,
  Animated} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
import styles from './src/stylesheet'

import { Dropdown } from 'react-native-material-dropdown';
//npm i react-native-dropdown-menu --save
import CalendarPicker from 'react-native-calendar-picker';
//npm install --save react-native-calendar
//npm install --save react-native-calendar-picker

import moment from 'moment';
//npm install --save moment react-moment


export default class CalendarScreen extends Component {
			
		
		
		render() {


			let customDatesStyles = [];
			let disabledDates = [];
			const { params } = this.props.navigation.state;


			for (var i = 0; i < 4; i++) {
				var currDate = '2018-11-' + params[i].date;
				customDatesStyles.push({
					date: moment(currDate, "YYYY-MM-DD"),
    				style: {backgroundColor: '#F79256'},
				})
			}


			//checks to see if date matches with the random dates in november
			function isAllowedDate(date) {
				var dateOfMonth = date.date();
				var month = date.month();
				for (var x = 0; x < 4; x++) {
					//dates match and are in the month of november(10 is novermber)
					if (dateOfMonth === params[x].date && month === 10) {
						return true;
					}
				}
				return false;
			}

			//return memory object with corresponding date
			function onDateChange(date) {
				var selectedDate = moment(date);
				var dayOfMonth = selectedDate.date();
				for(var j = 0; j < 4; j++) {
					if (params[j].date === dayOfMonth) {
						return params[j];
					}
				}
			}

			
			return (
				<View style={styles.calendarFrame}>
					<View style={styles.buttonFrame}>
			          	  <TouchableOpacity onPress={()=>this.props.navigation.navigate('AchievementList')}>
					          <View style={styles.viewButtons}>
					            <Ionicons color='white' name="ios-star" size={50}/>
					          </View>
					      </TouchableOpacity>
					      <TouchableOpacity onPress={()=>this.props.navigation.navigate('CalendarView')}>
				          	<View style={styles.nonActiveViewButtons}>
				            	<Ionicons color='white' name="ios-calendar" size={50}/>
				          	</View>
				          </TouchableOpacity>
				          
				    </View>

				    <View style={styles.calendarSearchBarView}>
			        	<View style={styles.searchBar}>
			        		<Ionicons color='#00b2ca' name="ios-search" size={35}/>
			        	</View>
		       		</View>

				    <View style={{marginTop: 50}}>
				    	<CalendarPicker 
				    		onDateChange={(date)=> {
				    			if(isAllowedDate(date)) {
				    				this.props.navigation.navigate('WeekScreen', {params:onDateChange(date), mem:params})} 
				    			} 
				    		}
				    		selectedDayColor='#00b2ca' 
				    		customDatesStyles={customDatesStyles}
				    	/>
				    </View>

			    </View>
			);
		}
	};