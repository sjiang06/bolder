import React, { Component } from 'react';
import { SQLite } from 'expo';
import styled from 'styled-components/native';
import {Button, View, 
  Text, StyleSheet, 
  Image, ScrollView, 
  TouchableOpacity, PanResponder,
  Animated} from 'react-native';
import GridView from 'react-native-gridview'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Toolbar} from 'react-native-ios-kit';

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
          <Image source={require('./images/bolder_logo.png')} 
          style={{width: 400, height: 200}}/>
        </View>
        <View style={styles.container}>
        
        <TouchableOpacity onPress={() => {
            /* 1. Navigate to the Recordings route with params */
            this.props.navigation.navigate('Recordings');
          }}>
          <View>
            <Image style={styles.buttonLeft} source={{uri: 'https://i.ibb.co/6D7f4kq/blue-blob.png'}} 
              resizeMode="contain"
           />
            <Image style={styles.iconLeft} source={{uri: 'https://i.ibb.co/RHhhSgB/noun-Playlist-972339.png'}} 
              resizeMode="contain"
            />
            <Text style={styles.textRight}> RECORDINGS </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{alert("Going to recordings...")}}>
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

      </View>
        <Button
          title="Go to Recordings"
          onPress={() => {
            /* 1. Navigate to the Recordings route with params */
            this.props.navigation.navigate('Recordings', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

const ImageContainer = styled.View`
  display: flex;
  flex-direction: column;
`;


class RecordingsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */


    return (
      <View style={{paddingLeft: 30}}>
        <Text style={{fontSize: 20, color: '#00B2CA', fontFamily: 'Gill Sans'}}>RECENT</Text>
        <TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <Image style={{width: 130, height: 130}} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>                  
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20, color: '#000000', fontFamily: 'Gill Sans'}}> {MEMORIES[0].skill} </Text>
                    <Text style={{fontSize:20, color: '#FBD1A2', paddingVertical: 10,fontFamily: 'Gill Sans'}}> {"November "}{MEMORIES[0].date} </Text>
                    <Text style={{fontSize:16, color: '#FE938C', paddingVertical: 10, fontFamily: 'Gill Sans'}}> {MEMORIES[0].goals[0].goalTitle} </Text>
                </View>
            </View>
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#00B2CA', fontFamily: 'Gill Sans'}}>SHOW: </Text>
        <ScrollView vertical={true} fillViewPort="true" contentContainerStyle={styles.scrollstyle}>
          <ImageContainer>
            {MEMORIES.map((memory, index) => (
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('RecordingDetails', memory)}
                key={index}>
                <View style={{flexDirection:'row'}}>
                  <Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}} key ={index} />
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

class RecordingDetailsScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const itemsPerRow = 3;
    const data = params.goals
    return (
      <View style={{backgroundColor: '#C8E0E3', flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize:30, color: '#646363', fontFamily: 'Gill Sans'}}> {params.title} </Text>
        <Text style={{fontSize:14, color: '#646363', fontFamily: 'Gill Sans'}}> {"November "}{params.date} </Text>
        <Image style={{width: 150, height: 150}} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
        <Text style={{textAlign: 'center', fontSize:14, color: '#646363', fontFamily: 'Gill Sans', paddingVertical: 20, paddingLeft: 20, paddingRight: 20}}> {"Good job with "}{(params.goals[0].goalTitle).toLowerCase()}{"! Here are some things we can continue working on: "} </Text>
        <Text> {params.skill} </Text>
        <View style={styles.container}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <Text> {params.goals[1].goalTitle} </Text>
        <View style={styles.row}>
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
        </View>
      </View>

      </View>

    );
  }
}

let CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 100,
    marginBottom: 0
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
    ballContainer: {
    height:100,
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 100,
    backgroundColor: 'white'
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonLeft: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 180,
    height: 180,
    position: 'absolute',
    top: -60,
    left: -180
  },
  buttonRight: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 180,
    height: 180,
    position: 'absolute',
    top: -60,
    right: -180
  },
  iconRight: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 120,
    height: 120,
    position: 'absolute',
    top: -30,
    right: -150
  },
  iconLeft: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 120,
    height: 120,
    position: 'absolute',
    top: -30,
    left: -150
  },
  textLeft: {
    position: 'absolute',
    top: 110,
    right: -180,
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: 'white'
  },
  textRight: {
    position: 'absolute',
    top: 110,
    left: -180,
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: 'white'

  },
  iconSmall: {
    width: 100,
    height: 100,
  },
  scrollstyle: {
    marginBottom:30
  },
  font: {
    fontFamily: 'Gill Sans'
  }
});

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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Recordings: RecordingsScreen,
    RecordingDetails: RecordingDetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}