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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var SKILLS = ["Public Speaking", "Making New Friends", "Talking to Crush"];
var PublicSpeakingGoals = ["Self Confidence", "Pacing", "Memorization", "Stuttering"];
var MakingNewFriendsGoals = ["Asking Questions", "Introducing Self", "Initiating Hangouts", "Being Vulnerable"];
var TalkingToCrushGoals = ["Texting first", "Planning hangouts", "Physical Affection", "Asking Questions"];
const goalMap = new Map();
goalMap.set(SKILLS[0], PublicSpeakingGoals);
goalMap.set(SKILLS[1], MakingNewFriendsGoals);
goalMap.set(SKILLS[2], TalkingToCrushGoals);


const skillMap = new Map();
var skill0Arr = [];
skillMap.set(SKILLS[0], skill0Arr);
var skill1Arr = [];
skillMap.set(SKILLS[1], skill1Arr);
var skill2Arr = [];
skillMap.set(SKILLS[2], skill2Arr);

var MEMORIES = [];
var count;

var SKILL_OPTIONS = ["All"];
for(count = 0; count < SKILLS.size; count++) {
  SKILL_OPTIONS.push(SKILLS[count]);
}

for(count = 0; count < 10; count++) {
  var skillArr = [];
  var skillChosen = SKILLS[getRandomInt(goalMap.size)];
  var goalsArr = [];
  var skillArr = goalMap.get(skillChosen);
  var i;
  for(i = 0; i < 2; i++){
    var elem = {
      goalTitle: skillArr[getRandomInt(skillArr.length)],
      index: i,
    }
    goalsArr.push(elem);
  };
  var mem = {
    index: count,
    title: "PENDING",
    date: getRandomInt(31),
    skill: skillChosen,
    goals: goalsArr,
  };
  skillMap.get(mem.skill).push(mem.index);
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
		          	  <TouchableOpacity onPress={()=>this.props.navigation.navigate('AchievementsScreen')}>
				          <View style={styles.viewButtons}>
				            <Ionicons color='white' name="ios-star" size={50}/>
				          </View>
				      </TouchableOpacity>
				      <TouchableOpacity onPress={()=>this.props.navigation.navigate('AchievementsScreen')}>
			          	<View style={styles.viewButtons}>
			            	<Ionicons color='white' name="ios-calendar" size={50}/>
			          	</View>
			          </TouchableOpacity>
			        </View>
			        <View style={styles.searchBarView}>
			        	<View style={styles.searchBar}>
			        		<Ionicons color='#B6B4B4' name="ios-search" size={25}/>
			        	</View>
			        </View>
		        <ScrollView vertical={true} fillViewPort="true" contentContainerStyle={styles.scrollstyle}>
		          <ImageContainer>
		            {MEMORIES.map((memory, index) => (
		              <TouchableOpacity 
		                onPress={() => this.props.navigation.navigate('RecordingDetails', memory)}
		                key={index}>
		                <View style={{flexDirection:'row'}}>
		                  <Image source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}} key ={index} />
		                  <View style={{flexDirection:'column'}}>
		                    <Text style={{fontSize:20, color: '#646363', fontFamily: 'Gill Sans'}}> {"November "}{memory.date} </Text>
		                    <Text style={{fontSize:16, color: '#FBD1A2', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.skill} </Text>
		                    <Text style={{fontSize:16, color: '#FE938C', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.goals[0].goalTitle} </Text>
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