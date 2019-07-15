import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Button, Platform } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'UIZA Player Demo',
  };

  constructor(props) {
    super(props);
    let self = this;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[{width: "90%", margin: 10, backgroundColor: "red"}]}>
          <Button 
            title="VOD"
            color="#841584"
            onPress={() => this.props.navigation.push('Vod')}
          />
        </View>
        <View  style={{ padding: 16 }}/>
        <View style={[{width: "90%", margin: 10, backgroundColor: "red"}]}>
          <Button 
            title="LIVE"
            color="#841584"
            onPress={() => this.props.navigation.push('Live')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "center",
    // paddingTop: (Platform.OS === 'android') ? StatusBar.height : 22
  }
});

import VODScreen from './VODScreen';
import LiveStreamScreen from './LiveStreamScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Vod: VODScreen,
  Live: LiveStreamScreen
},{
  initialRouteName: 'Home',
  backBehavior: 'order',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}