import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView } from 'react-native';
import UZPlayer from './lib/uiza-sdk-react-native/UZPlayer';
import Event from './lib/uiza-sdk-react-native/Event';
import Utils from './lib/uiza-sdk-react-native/utils/Utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    self = this;

    self.listener = {
      onReady: function() {
        console.log('onReady receive');
        if (typeof self.player !== 'undefined') {
          Utils.getOwnPropertyNames(self.player);
        }
      },
      onLoad: function() {
        console.log('onLoad receive');
      },
      onLoaded: function(evt) {
        console.log('onLoaded receive: ', evt);
      },
      onFullscreenChange: function(evt) {
        console.log('onFullscreenChange receive: ', evt);
      },
      onPlaybackChange: function(evt) {
        // console.log('onPlaybackChange receive: ', evt);
      },
      onError: function(evt) {
        console.log('onError receive: ', evt);
      },
    }
  }

  render() {
    let api = 'YOUR_API';
    let appId = 'YOUR_APP_ID';
    let playerId = 'YOUR_PLAYER_ID';
    let entityId = 'YOUR_ENTITY_ID';

    return (
      <SafeAreaView style={styles.container}>
        <UZPlayer
          api={api}
          appId={appId}
          playerId={playerId}
          entityId={entityId}
          style={styles.player}
          listener={self.listener}
        />
        <ScrollView style={styles.description}>
          <Text>This is title</Text>
          <Text>_____________________________</Text>
          <Text>This is description.</Text>
          <Text>Line 2.</Text>
          <Text>Line 3.</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

let self = null;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'steelblue',
  },
  player: {
    width: '100%',
    height: '33%',
    backgroundColor: 'black',
  },
  description: {
    flex: 1,
    padding: 10,
  },
});
