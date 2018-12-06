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
import SyncScreen from './SyncScreen.js';
import HelpScreen from './HelpScreen.js';
import styles from './src/stylesheet';
import HomeScreen from './HomeScreen.js';
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


class RecordingsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */


    return (
      <View style={{paddingLeft: 30, paddingVertical: 30}}>
        <Text style={{fontSize: 20, color: '#00B2CA', fontFamily: 'Gill Sans'}}>RECENT</Text>
        <TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <Image style={{width: 130, height: 130}} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>                  
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20, color: '#000000', fontFamily: 'Gill Sans'}}> {MEMORIES[0].skill} </Text>
                    <Text style={{fontSize:20, color: '#FBD1A2', paddingVertical: 10,fontFamily: 'Gill Sans'}}> {"November "}{MEMORIES[0].date} </Text>
                    <Text style={{fontSize:16, color: '#FE938C', paddingVertical: 10, fontFamily: 'Gill Sans'}}> {MEMORIES[0].goal} </Text>
                    <View style={styles.pillFrame}>
                      <View style={{backgroundColor:colorMap.get(MEMORIES[0].skill), width:'100%', alignItems: 'center', borderRadius:25}}>
                        <Text style={{fontSize:16, color: 'white', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {MEMORIES[0].goal} </Text>
                      </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#00B2CA', fontFamily: 'Gill Sans'}}>SHOW: </Text>
        <ScrollView vertical={true} fillViewPort="true" contentContainerStyle={styles.scrollstyle}>
          <ImageContainer>
            {MEMORIES.map((memory, index) => (
              <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('PracticeScreen', {title:memory.title, date:memory.date, params:{
                  skill: memory.skill,
                  goalChosen: memory.goal,
                  color: colorMap.get(memory.skill),
                }})}
                key={index}>
                <View style={{flexDirection:'row'}}>
                  <Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}} key ={index} />
                  <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20, color: '#646363', fontFamily: 'Gill Sans'}}> {"November "}{memory.date} </Text>
                    <Text style={{fontSize:16, color: '#FBD1A2', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.skill} </Text>
                    <Text style={{fontSize:16, color: '#FE938C', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.goal} </Text>
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

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea(gesture)) {
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            );
          } 
        }
      });
  }

  isDropArea(gesture) {
    return gesture.moveY < 200;
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    }
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

for(count = 0; count < 5; count++) {
  var skillArr = [];
  var skillChosen = SKILLS[getRandomInt(goalMap.size)];
  var goalsArr = [];
  var skillArr = goalMap.get(skillChosen);
  var goal = skillArr[getRandomInt(skillArr.length)];
  var tit = TITLES[count];
  var mem = {
    index: count,
    title: tit,
    date: getRandomInt(31),
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
    Home: HomeScreen,
    Recordings: RecordingsScreen,
    RecordingDetails: RecordingDetailsScreen,
    AchievementList: AchievementsScreen,
    CalendarView: CalendarScreen,
    WeekScreen: WeekScreen,
    PracticeScreen: PracticeScreen,
    HeadphoneScreen: HeadphoneScreen,
    SyncScreen: SyncScreen,
    NewRecordingScreen: NewRecordingScreen
  },
  {
    initialRouteName: 'Home',
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
    initialRouteName: 'Home',
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