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
        />
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
  }
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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