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
import App from './App.js'
import styles from './src/stylesheet';


export default class HomeScreen extends React.Component {
  constructor() {
  	super();
  	var chosenSkill = SKILLS[getRandomInt(SKILLS.length)];
  }

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
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('NewRecordingScreen', {title:'[New Recording]', date:'5', params:{
                  skill: chosenSkill,
                  goalChosen: 'SET GOAL',
                  color: colorMap.get(chosenSkill),
                }})}>
	        <View style={style={paddingTop: 3, width: 300, height: 150, alignItems: 'center', position: 'absolute'}}>
	          <View style={{backgroundColor:'grey', width: 250, height: 130, alignItems: 'center', borderRadius:25, flexDirection:'row', top: 150, borderWidth:3, borderColor: 'white'}}>
	            <Image style={styles.iconSmall} source={{uri: 'https://i.ibb.co/D4Hwg4L/Screen-Shot-2018-11-30-at-2-33-39-AM.png'}}/>
	            <Text style={{fontSize:20, width: 130, textAlign: 'center', color: 'white', paddingVertical: 0, fontFamily: 'Gill Sans'}}> You have one new recording! </Text>
	          </View>
	        </View>
	    </TouchableOpacity>

      </View>
        <Button
          title="Go to Recordings"
          onPress={() => {this.props.navigation.navigate('Recordings');
          }}
        />
      </View>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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