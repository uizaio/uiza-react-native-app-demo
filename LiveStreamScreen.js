import React from 'react';
import { StyleSheet, View } from 'react-native';
import  UZPlayer from '@uiza/uiza-sdk-player-react-native';

const constants = require('./Constants.js');

export default class LiveStreamScreen extends React.Component {

    static navigationOptions = {
        title: 'Live Demo',
    };

  constructor(props) {
    super(props);
    let self = this;
    // 
    this.listenerLive = {
      onReady: function() { },
      onLoad: function() { },
      onLoaded: function(evt) { },
      onFullscreenChange: function(evt) { },
      onPlaybackChange: function(evt) { },
      onError: function(evt) { },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <UZPlayer
          token={constants.token}
          apiVersion={4}
          appId={constants.appId}
          stream='live'
          entityId={constants.entityIdLive}
          feedId={constants.feedId}
          streamName={constants.streamName}
          region={constants.region}
          style={styles.player}
          ref={
            component => {
              this.playerLive = component;
            }
          }
          listener={this.listenerLive}
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
