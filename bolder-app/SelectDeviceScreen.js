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
import styles from './src/stylesheet';
import { WeekScreen } from './WeekScreen.js';
import { App } from './App.js';

export default class SelectDeviceScreen extends Component {
	render() {
		return (
			<View></View>
		)
	};
}