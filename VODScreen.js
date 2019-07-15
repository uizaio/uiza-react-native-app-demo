import React from 'react';
import { StyleSheet, View } from 'react-native';
import  UZPlayer from '@uiza/uiza-sdk-player-react-native';

const constants = require('./Constants.js');

export default class VODScreen extends React.Component {
  static navigationOptions = {
    title: 'VOD Demo',
  };

  constructor(props) {
    super(props);
    this.listenerVod = {
      onReady: function() { console.log('onReady call'); },
      onLoad: function() { console.log('onLoad call'); },
      onLoaded: function(evt) { console.log('onLoaded call', evt); },
      onFullscreenChange: function(evt) { console.log('onLoaded call', evt); },
      onPlaybackChange: function(evt) { console.log('onLoaded call', evt); },
      onError: function(evt) { console.log('onLoaded call', evt); },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <UZPlayer
          debug={true}
          token={constants.token}
          apiVersion={4}
          appId={constants.appId}
          stream='vod'
          entityId={constants.entityIdVod}
          style={styles.player}
          ref={
            component => {
              this.playerVod = component;
            }
          }
          listener={this.listenerVod}
          playerId={constants.playerId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
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
