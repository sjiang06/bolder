<<<<<<< HEAD
import React from 'react';
import {Button, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    const resizeMode = 'cover';
    const text = 'I am some centered text'
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
        <View style={styles.container}>
        
        <TouchableOpacity onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}>
          <View>
            <Image style={styles.buttonLeft} source={{uri: 'https://i.ibb.co/6D7f4kq/blue-blob.png'}} 
              resizeMode="contain"
           />
            <Image style={styles.iconLeft} source={{uri: 'https://i.ibb.co/RHhhSgB/noun-Playlist-972339.png'}} 
              resizeMode="contain"
            />
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
          </View>
        </TouchableOpacity>

      </View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
=======
import React, { Component } from 'react';
import { SQLite } from 'expo';
import styled from 'styled-components/native';
import {Button, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const db = SQLite.openDatabase('db.db');

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
        <View style={styles.container}>
        
        <TouchableOpacity onPress={() => {
            /* 1. Navigate to the Recordings route with params */
            this.props.navigation.navigate('Recordings', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
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
>>>>>>> 5e45f28b9054ffcd77224cd17bf940030f61255f
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
                    <Text style={{fontSize:16, color: '#FE938C', paddingVertical: 10, fontFamily: 'Gill Sans'}}> {MEMORIES[0].goals[0]} </Text>
                </View>
            </View>
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#00B2CA', fontFamily: 'Gill Sans'}}>SHOW: All</Text>
        <ScrollView vertical={true} fillViewPort="true" contentContainerStyle={styles.scrollstyle}>
          <ImageContainer>
            {MEMORIES.map((memory, index) => (
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('RecordingDetails', index)}
                key={index}>
                <View style={{flexDirection:'row'}}>
                  <Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}} key ={index} />
                  <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20, color: '#FBD1A2', fontFamily: 'Gill Sans'}}> {"November "}{memory.date} </Text>
                    <Text style={{fontSize:16, color: '#FBD1A2', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.skill} </Text>
                    <Text style={{fontSize:16, color: '#FE938C', paddingVertical: 0, fontFamily: 'Gill Sans'}}> {memory.goals[0]} </Text>
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

class RecordingDetailsScreen extends React.Component {
  render() {
    const { index } = this.props.navigation.state;
    const memory = MEMORIES[index];
    return (
      <View>
      <Text> {Memory Details View} </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
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
<<<<<<< HEAD
  }
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
=======
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

for(count = 0; count < 10; count++) {
  var skillArr = [];
  var skillChosen = SKILLS[getRandomInt(goalMap.size)];
  var goalsArr = [];
  var skillArr = goalMap.get(skillChosen);
  var i;
  for(i = 0; i < 2; i++){
    goalsArr.push(skillArr[getRandomInt(skillArr.length)]);
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
>>>>>>> 5e45f28b9054ffcd77224cd17bf940030f61255f
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