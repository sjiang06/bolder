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
import AchievementsScreen from './AchievementsScreen.js';
import CalendarScreen from './CalendarScreen.js';
import WeekScreen from './WeekScreen.js';
import PracticeScreen from './PracticeScreen.js';
import HeadphoneScreen from './HeadphoneScreen.js';
import SyncingScreen from './SyncingScreen.js';
import HelpScreen from './HelpScreen.js';
import styles from './src/stylesheet';
import NewRecordingScreen from './NewRecordingScreen.js';

const ImageContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

var colorMap = new Map([
  ['Stuttering','#FE938C'],
  ['Pacing','#59E992'],
  ['Confidence','#56AAF7'],
  ['Conversation','#F79256'],
  ['Projection', '#FE938C'],
  ['Public Speaking', '#FE938C'],
  ['Making New Friends','#59E992'],
  ['Talking to Crush','#56AAF7'],
  ]);

var SKILLS = ["Public Speaking", "Making New Friends", "Talking to Crush"];

class HomeScreen extends React.Component {
  render() {
    const resizeMode = 'cover';
    return (

      <View style={{ flex: 1}}>
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
        <View style={styles.container}>
        
        <TouchableOpacity onPress={() => {
            /* 1. Navigate to the Recordings route with params */
            console.log('here');
            this.props.navigation.navigate('Recordings');
          }}>
          <View style={styles.columnView}>
            <Image style={styles.buttonLeft} source={{uri: 'https://i.ibb.co/6D7f4kq/blue-blob.png'}} 
              resizeMode="contain"
           />
            <Image style={styles.iconLeft} source={{uri: 'https://i.ibb.co/RHhhSgB/noun-Playlist-972339.png'}} 
              resizeMode="contain"
            />
            <Text style={styles.textRight}> RECORDINGS </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AchievementList')}>
          <View>
            <Image style={styles.buttonRight} source={{uri: 'https://i.ibb.co/6D7f4kq/blue-blob.png'}} 
              resizeMode="contain"
            />
            <Image style={styles.iconRight} source={{uri: 'https://i.ibb.co/SJzVtRf/achievements.png'}} 
              resizeMode="contain"
            />
            <Text style={styles.textLeft}> ACHIEVEMENTS </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PracticeScreen', {title:MEMORIES[0].title, date: MEMORIES[0].date, params:{
                  skill: MEMORIES[0].skill,
                  goalChosen: MEMORIES[0].goal,
                  color: colorMap.get(MEMORIES[0].skill),
                }})}>
          <View style={style={paddingTop: 3, width: 300, height: 150, alignItems: 'center'}}>
            <View style={{backgroundColor:'#B3B3B3', width: 250, height: 130, alignItems: 'center', borderRadius:25, flexDirection:'row', justifyContent:'flex-start', top: 150, borderWidth:3, borderColor: 'white'}}>
              <Image style={{width: 100, height: 100, marginRight: 20}} source={{uri: 'https://i.ibb.co/CMWPKFt/rock.png'}}/>
              <Text style={{fontSize:20, width: 125, textAlign: 'left', color: 'white', fontFamily: 'Gill Sans'}}>One recording recently uploaded! </Text>
            </View>
          </View>
      </TouchableOpacity>

      </View>
      </View>
    );
  }
}

class RecordingsScreen extends React.Component {
  constructor() {
      super();
      this.updateMemories = this.updateMemories.bind(this);
      this.state = {
        currMem: null
      }
    }

  updateMemories(updated) {
    var current = this.state.currMem;
    current.title = updated.title;
    current.skill = updated.skill;
    current.goal = updated.goal;
    this.setState({currMem: current});
  }

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    return (
      <View style={{paddingLeft: 30, paddingVertical: 30, marginTop:40}}>
        <Text style={{fontSize: 25, color: '#00B2CA', fontFamily: 'Gill Sans'}}>NEW RECORDING!</Text>
        <TouchableOpacity style={{marginBottom:10}} onPress={()=>this.props.navigation.navigate('PracticeScreen', {title:MEMORIES[0].title, date:MEMORIES[0].date, params:{
                  skill: MEMORIES[0].skill,
                  goalChosen: MEMORIES[0].goal,
                  color: colorMap.get(MEMORIES[0].skill),
                }})}>
          <View style={{flexDirection:'row'}}>
                <Image style={{width: 130, height: 130, marginRight:10}} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>                  
                <View style={styles.columnText}>
                    <Text style={{fontSize:24, width:200, color: '#646363', fontFamily: 'Gill Sans', textAlign:'left'}}> {MEMORIES[0].title} </Text>
                    <Text style={{fontSize:20, color: colorMap.get(MEMORIES[0].skill), fontFamily: 'Gill Sans', textAlign:'left'}}> {MEMORIES[0].skill} </Text>
                    <Text style={{fontSize:20, color: '#FBD1A2', fontFamily: 'Gill Sans', textAlign:'left'}}> {"November "}{MEMORIES[0].date} </Text>
                </View>
            </View>
        </TouchableOpacity>
        <View style={styles.searchBarView}>
                <View style={styles.searchBar}>
                  <Ionicons color='#00b2ca' name="ios-search" size={35}/>
                </View>
              </View>
        <ScrollView style={{marginTop:10}} vertical={true} fillViewPort="true" contentContainerStyle={styles.scrollstyle}>
          <ImageContainer>
            {MEMORIES.slice(1).map((memory, index) => (
              <TouchableOpacity 
                onPress={()=>  {this.setState.currMem = memory; this.props.navigation.navigate('PracticeScreen', {title:memory.title, date:memory.date, callback:this.updateMemories.bind(this), params:{
                  skill: memory.skill,
                  goalChosen: memory.goal,
                  color: colorMap.get(memory.skill),
                }});}
              }
                key={index}>
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                  <Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}} key ={index} />
                  <View style={styles.columnText}>
                    <Text style={{fontSize:20, color: '#646363', fontFamily: 'Gill Sans'}}> {memory.title} </Text>
                    <Text style={{fontSize:20, color: colorMap.get(memory.skill), fontFamily: 'Gill Sans'}}> {memory.skill} </Text>
                    <Text style={{fontSize:16, color: '#FBD1A2', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {"November "}{memory.date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
      </View>
    );
  }
}

function setText(params, text) {
  MEMORIES[params.id].title = text;
}

var textboxText = 'Enter some text';

class RecordingDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: textboxText };
  }
  render() {
    const { params } = this.props.navigation.state;
    const itemsPerRow = 3;
    const data = params.goals
    const id = params.index
    return (
      <View style={{backgroundColor: '#C8E0E3', flex: 1, alignItems: 'center'}}>

        <Text style={{fontSize:30, color: '#646363', fontFamily: 'Gill Sans'}}> {textboxText} </Text>
        <Text style={{fontSize:14, color: '#646363', fontFamily: 'Gill Sans'}}> {"November "}{params.date} </Text>
        <Image style={{width: 150, height: 150}} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
        <Text style={{textAlign: 'center', fontSize:14, color: '#646363', fontFamily: 'Gill Sans', paddingVertical: 20, paddingLeft: 20, paddingRight: 20}}> {"Good job with "}{(params.goal).toLowerCase()}{"! Here are some things we can continue working on: "} </Text>
        <TextInput
          style={{height:40, position: 'absolute', top: 100, left: 100}}
          onChangeText={(text) => {this.setState({text}); textboxText = text; console.log(textboxText);}}
          value={this.state.text}
        />
        <Text style={{fontSize:30, color: '#646363', fontFamily: 'Gill Sans', position: 'absolute', top: 50, left: 100}}> {textboxText} </Text>
      </View>

    );
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var SKILLS = ["Public Speaking", "Making New Friends", "Talking to Crush"];
var PublicSpeakingGoals = ["Self Confidence", "Pacing", "Memorization", "Stuttering"];
var MakingNewFriendsGoals = ["Asking Questions", "Introducing Self", "Initiating Hangouts", "Being Vulnerable"];
var TalkingToCrushGoals = ["Texting First", "Planning Hangouts", "Physical Affection", "Asking Questions"];
const goalMap = new Map();
goalMap.set(SKILLS[0], PublicSpeakingGoals);
goalMap.set(SKILLS[1], MakingNewFriendsGoals);
goalMap.set(SKILLS[2], TalkingToCrushGoals);

var titles = ['Talking with Sarah', 'Science Fair', 'Speech and Debate',
              'Lunch with Jack'];


const skillMap = new Map();
var skill0Arr = [];
skillMap.set(SKILLS[0], skill0Arr);
var skill1Arr = [];
skillMap.set(SKILLS[1], skill1Arr);
var skill2Arr = [];
skillMap.set(SKILLS[2], skill2Arr);

var MEMORIES = [];

var TITLES = ["Lunch with Chris", "Date with Abrahm", "Working with Starr", "Presenting for Minh-An", "Coffee Date",
  "Chatting with Sofía", "Talking with James Landay", "147 Presentation"]

var count;

var SKILL_OPTIONS = ["All"];
for(count = 0; count < SKILLS.size; count++) {
  SKILL_OPTIONS.push(SKILLS[count]);
}

for(count = 0; count < 6; count++) {
  var skillArr = [];
  var skillChosen = SKILLS[getRandomInt(goalMap.size)];
  var goalsArr = [];
  var skillArr = goalMap.get(skillChosen);
  var goal = skillArr[getRandomInt(skillArr.length)];
  var tit = TITLES[count];
  var mem = {
    index: count,
    title: tit,
    date: getRandomInt(31) + 1,
    skill: skillChosen,
    goal: goal,
  };
  skillMap.get(mem.skill).push(mem.index);
  MEMORIES.push(mem);
};

function compareMemories(a, b){
  return b.date>a.date
}

MEMORIES.sort(compareMemories)

/*Navigation for app*/

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Recordings: RecordingsScreen,
    RecordingDetails: RecordingDetailsScreen,
    AchievementList: AchievementsScreen,
    CalendarView: CalendarScreen,
    WeekScreen: WeekScreen,
    PracticeScreen: PracticeScreen,
    HeadphoneScreen: HeadphoneScreen,
    SyncingScreen: SyncingScreen,
    NewRecordingScreen: NewRecordingScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const TabBar = createBottomTabNavigator(
  {
    Home: {
      screen:RootStack,
      navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons color='white' name="ios-home" size={40}/>
        )
      },
    },
    SyncingScreen: {
      screen:SyncingScreen,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    Help: {
      screen:HelpScreen,
      navigationOptions: {
        tabBarLabel:"Help",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons color='white' name="ios-help-circle-outline" size={40}/>
        )
      },
    },
  },
    {
    tintColor: '#ffffff',
    initialRouteName: 'SyncingScreen',
    swipeEnabled: false,
    backBehavior: 'initialRoute',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#00b2ca',
      },
      activeTintColor: '#ffffff',
    },

    header:null,
  }
);

const AppContainer = createAppContainer(TabBar);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}