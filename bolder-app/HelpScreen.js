import React, { Component } from 'react';
import { SQLite } from 'expo';
import styled from 'styled-components/native';
import {WebView, Button, View, 
  Text, StyleSheet, 
  Image, ScrollView, 
  TouchableOpacity, PanResponder,
  Animated} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './src/stylesheet';
import { App } from './App.js';
import {Youtube} from 'react-native-youtube';


export default class HelpScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'#fbd1a2', width:'100%', height:'100%'}}>
        <WebView
	        style={{flex:1}}
	        javaScriptEnabled={true}
	        source={{uri: 'https://www.youtube.com/watch?v=7TVjui5GhhY&feature=youtu.be'}}
		/>
      </View>
    );
  }
}