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
import CalendarScreen from './CalendarScreen.js';
import styles from './src/stylesheet'


var colors = ['#FE938C', '#59E992', '#56AAF7', '#F79256'];

function getColor() {
	return colors[getRandomInt(colors.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomPercentage() {
	return 0.40 + 0.25 * (Math.floor(Math.random() * Math.floor(4)));
}

var SKILLS = ["Public Speaking", "Making New Friends", "Talking to Crush", 'Presentation'];
var PublicSpeakingGoals = ["Pacing", "Stuttering"];
var MakingNewFriendsGoals = ["Conversation"];
var TalkingToCrushGoals = ["Confidence"];
var PresentationGoals = ["Projection"]
const goalMap = new Map();
goalMap.set(SKILLS[0], PublicSpeakingGoals);
goalMap.set(SKILLS[1], MakingNewFriendsGoals);
goalMap.set(SKILLS[2], TalkingToCrushGoals);
goalMap.set(SKILLS[3], PresentationGoals);

var achievementMap = new Map([
	['Stuttering',['Say "Um" 50% Less', 'Pause between Sentences', 'Make a Mental Roadmap']], 
	['Pacing',['Slow Pace by 20%', 'Make Eye Contact']], 
	['Confidence',['10 Day Eye Contact Streak']],
	['Conversation',['Come Up with 5 Topics']],
	['Projection', ['Increase Your Volume by 50%']]
	]);

var colorMap = new Map([
	['Stuttering','#FE938C'],
	['Pacing','#59E992'],
	['Confidence','#56AAF7'],
	['Conversation','#F79256'],
	['Projection', '#FE938C']
	]);

var MEMORIES = [];
var count;


for(count = 0; count < goalMap.size; count++) {
  var skillChosen = SKILLS[count];
  var goals = goalMap.get(skillChosen);
  var goalChosen = goals[getRandomInt(goals.length)];
  var achievements = achievementMap.get(goalChosen);
  var achievementChosen = achievements[getRandomInt(achievements.length)];
  var mem = {
    index: count,
    date: getRandomInt(31) + 1,
    skill: skillChosen,
    goalChosen: goalChosen,
    achievement: achievementChosen,
  };
  MEMORIES.push(mem);
};

function compareMemories(a, b){
  return b.date>a.date
}

MEMORIES.sort(compareMemories)

const ImageContainer = styled.View`
  display: flex;
  flex-direction: column;
`;


export default class AchievementsScreen extends Component {
	render() {
		return(
			<View style={styles.screenFrame}>
		          <View style={styles.buttonFrame}>
		          	  <TouchableOpacity style={{height:35}} onPress={()=>this.props.navigation.navigate('AchievementsScreen')}>
				          <View style={styles.viewButtons}>
				            <Ionicons color='white' name="ios-star" size={50}/>
				          </View>
				      </TouchableOpacity>
				      <TouchableOpacity style={{height:35}} onPress={()=>this.props.navigation.navigate('CalendarView')}>
			          	<View style={styles.viewButtons}>
			            	<Ionicons color='white' name="ios-calendar" size={50}/>
			          	</View>
			          </TouchableOpacity>
			        </View>
			        <View style={styles.searchBarView}>
			        	<View style={styles.searchBar}>
			        		<Ionicons color='#00b2ca' name="ios-search" size={35}/>
			        	</View>
			        </View>
		        <ScrollView vertical={true} fillViewPort="true" contentContainerStyle={styles.scrollstyle}>
		          <ImageContainer>
		            {MEMORIES.map((memory, index) => (
		              <TouchableOpacity 
		                onPress={() => this.props.navigation.navigate('Home')}
		                key={index}>
		                <View style={styles.achievementContainer}>
		                  <Ionicons color='#FE938C' name="ios-star" size={75} style={{marginRight:20, opacity:getRandomPercentage()}}/>
		                  <View style={styles.columnText}>
		                  	<Text style={{fontSize:20, color: '#F79256', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.achievement} </Text>
		                    <Text style={{fontSize:16, color: '#646363', fontFamily: 'Gill Sans'}}> Last progress on {"November "}{memory.date} </Text>
		                    <View style={styles.pillFrame}>
		                    	<View style={{backgroundColor:colorMap.get(memory.goalChosen), width:'100%', alignItems: 'center', borderRadius:25}}>
		                    		<Text style={{fontSize:16, color: 'white', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.goalChosen.toUpperCase()} </Text>
		                    	</View>
		                    </View>
		                  </View>
		                </View>
		              </TouchableOpacity>
		            ))}
		          </ImageContainer>
		        </ScrollView>
	      </View>
		);
	}
};