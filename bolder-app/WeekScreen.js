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

function getText(opacity, date) {
	if (opacity >= 1){
		return "Completed on November " + date + "!";
	} else {
		return "Last progress on November " + date;
	}
}

function getStarIcon(opacity) {
	if (opacity >= 1) {
		return "ios-star";
	} else {
		return "ios-star-outline";
	}
}

export default class WeekScreen extends Component {
	render() {
		const { params } = this.props.navigation.state.params;
		const mem = this.props.navigation.state.mem;
		return (
			<View styles={styles.screenFrame}>
				<View style={[styles.buttonFrame, styles.spacing]}>
		          	  <TouchableOpacity style={{height:35}} onPress={()=>this.props.navigation.navigate('AchievementList')}>
				          <View style={styles.viewButtons}>
				            <Ionicons color='white' name="ios-star" size={50}/>
				          </View>
				      </TouchableOpacity>
				      <TouchableOpacity style={{height:35}} onPress={()=>this.props.navigation.navigate('Home', mem)}>
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
	                  <Ionicons color={params.color} name={getStarIcon(params.opacity)} size={90} style={{marginRight:20, opacity: params.opacity}}/>
	                  <View style={styles.columnText}>
	                  	<Text style={{fontSize:20, color: '#F79256', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {params.achievement} </Text>
	                    <Text style={{fontSize:18, color: '#646363', fontFamily: 'Gill Sans'}}>{getText(params.opacity, params.date)}</Text>
	                    <View style={styles.pillFrame}>
	                    	<View style={{backgroundColor:params.color, width:180, alignItems: 'center', borderRadius:25}}>
	                    		<Text style={{fontSize:20, color: 'white', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {params.goalChosen.toUpperCase()} </Text>
	                    	</View>
	                    </View>
	                  </View>
	                </View>

	                <Text style={styles.largeText}>PRACTICE {params.goalChosen.toUpperCase()}</Text>
	                <View style={styles.horizontalFrame}>
	                	<TouchableOpacity onPress={()=>this.props.navigation.navigate('PracticeScreen', {title:'Science Fair', date:'23', params:params})}>
			                <View style={styles.centerColumn}>
			                	<Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
			                	<Text style={styles.smallText}>Science Fair</Text>
			                	<Text style={styles.smallText}>Oct 23</Text>
			                </View>
			            </TouchableOpacity>
		                <TouchableOpacity onPress={()=>this.props.navigation.navigate('PracticeScreen', {title:'Lunch with Sarah', date:'31', params:params})}>
			                <View style={styles.centerColumn}>
			                	<Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
			                	<Text style={styles.smallText}>Lunch with Sarah</Text>
			                	<Text style={styles.smallText}>Oct 31</Text>
			                </View>
			            </TouchableOpacity>
			            <TouchableOpacity onPress={()=>this.props.navigation.navigate('PracticeScreen', {title:'Speech and Debate', date:'24', params:params})}>
			                <View style={styles.centerColumn}>
			                	<Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
			                	<Text style={styles.smallText}>Speech and Debate</Text>
			                	<Text style={styles.smallText}>Oct 24</Text>
			                </View>
			            </TouchableOpacity>
		            </View>
			    </View>
			</View>

		);
	}
};