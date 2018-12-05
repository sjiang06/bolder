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
import AchievementsScreen from './AchievementsScreen.js';
import { App } from './App.js';

export default class WeekScreen extends Component {
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View styles={styles.screenFrame}>
				<View style={[styles.buttonFrame, styles.spacing]}>
		          	  <TouchableOpacity style={{height:35}} onPress={()=>this.props.navigation.navigate('AchievementList')}>
				          <View style={styles.viewButtons}>
				            <Ionicons color='white' name="ios-star" size={50}/>
				          </View>
				      </TouchableOpacity>
				      <TouchableOpacity style={{height:35}} onPress={()=>this.props.navigation.navigate('Home')}>
			          	<View style={styles.viewButtons}>
			            	<Ionicons color='white' name="ios-calendar" size={50}/>
			          	</View>
			          </TouchableOpacity>
				</View>
				<View style={[styles.searchBarView, styles.spacing_1]}>
		        	<View style={styles.searchBar}>
		        		<Ionicons color='#00b2ca' name="ios-search" size={35}/>
		        	</View>
			    </View>
			    <View styles={[styles.columnView, {marginTop:10}]}>
			    	<Text style={styles.largeText}> NOVEMBER 2018 </Text>
			    	<View style={styles.horizontalFrame}>
			    		<View style={styles.centerColumn}>
			    			<Text style={styles.grayText}>SUN</Text>
			    			<View style={styles.dot}><Text style={styles.whiteText}>{params.date-4}</Text></View>
			    		</View>
			    		<View style={styles.centerColumn}>
			    			<Text style={styles.grayText}>MON</Text>
			    			<View style={styles.dot}><Text style={styles.whiteText}>{params.date-3}</Text></View>
			    		</View>
			    		<View style={styles.centerColumn}>
			    			<Text style={styles.grayText}>TUE</Text>
			    			<View style={styles.dot}><Text style={styles.whiteText}>{params.date-2}</Text></View>
			    		</View>
			    		<View style={styles.centerColumn}>
			    			<Text style={styles.grayText}>WED</Text>
			    			<View style={styles.dot}><Text style={styles.whiteText}>{params.date-1}</Text></View>
			    		</View>
			    		<View style={styles.centerColumn}>
			    			<Text style={styles.grayText}>THU</Text>
			    			<View style={[styles.dot, {backgroundColor:'#F79256'}]}><Text style={styles.whiteText}>{params.date}</Text></View>
			    		</View>
			    		<View style={styles.centerColumn}>
			    			<Text style={styles.grayText}>FRI</Text>
			    			<View style={styles.dot}><Text style={styles.whiteText}>{params.date+1}</Text></View>
			    		</View>
			    		<View style={styles.centerColumn}>
			    			<Text style={styles.grayText}>SAT</Text>
			    			<View style={styles.dot}><Text style={styles.whiteText}>{params.date+2}</Text></View>
			    		</View>
			    	</View>
			    	
			    	<View style={[styles.achievementContainer, {marginTop:0}]}>
	                  <Ionicons color={params.color} name="ios-star" size={90} style={{marginRight:20, opacity: params.opacity}}/>
	                  <View style={styles.columnText}>
	                  	<Text style={{fontSize:20, color: '#F79256', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {params.achievement} </Text>
	                    <Text style={{fontSize:18, color: '#646363', fontFamily: 'Gill Sans'}}> Last progress on {"November "}{params.date} </Text>
	                    <View style={styles.pillFrame}>
	                    	<View style={{backgroundColor:params.color, width:180, alignItems: 'center', borderRadius:25}}>
	                    		<Text style={{fontSize:20, color: 'white', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {params.goalChosen.toUpperCase()} </Text>
	                    	</View>
	                    </View>
	                  </View>
	                </View>

	                <Text style={styles.largeText}>PRACTICE {params.goalChosen.toUpperCase()}</Text>
	                <View style={styles.horizontalFrame}>
		                <View style={styles.centerColumn}>
		                	<Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
		                	<Text style={{color:'gray'}}>Science Fair</Text>
		                	<Text style={{color:'gray'}}>Oct 23</Text>
		                </View>
		                <View style={styles.centerColumn}>
		                	<Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
		                	<Text style={{color:'gray'}}>Lunch with Sarah</Text>
		                	<Text style={{color:'gray'}}>Oct 31</Text>
		                </View>
		                <View style={styles.centerColumn}>
		                	<Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
		                	<Text style={{color:'gray'}}>Speech and Debate</Text>
		                	<Text style={{color:'gray'}}>Oct 24</Text>
		                </View>
		            </View>
			    </View>
			</View>

		);
	}
};