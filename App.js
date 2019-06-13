import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import  UZPlayer from '@uiza/uiza-sdk-player-react-native';
import { Dimensions, Platform } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let self = this;

    this.listenerVod = {
      onReady: function() { console.log('onReady call'); },
      onLoad: function() { console.log('onLoad call'); },
      onLoaded: function(evt) { console.log('onLoaded call', evt); },
      onFullscreenChange: function(evt) { console.log('onLoaded call', evt); },
      onPlaybackChange: function(evt) { console.log('onLoaded call', evt); },
      onError: function(evt) { console.log('onLoaded call', evt); },
    };

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
    // get from email at registration
    const token = 'YOUR_TOKEN';
    // get from email at registration
    const appId = 'YOUR_APP_ID';

    // vod config
    const entityIdVod = 'YOUR_VOD_ENTITY_ID';

    // live config
    const entityIdLive = 'YOUR_LIVE_ENTITY_ID';
    const feedId = 'YOUR_FEED_ID';
    const streamName = 'YOUR_STREAM_NAME';
    const region = 'YOUR_REGION';
    const playerId = 'YOUR_PLAYER_ID';

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{marginTop: isAndroid()? 0 : isIphoneX()? 0 : 20}}>This is VOD demo</Text>
        <UZPlayer
          debug={true}
          token={token}
          apiVersion={4}
          appId={appId}
          stream='vod'
          entityId={entityIdVod}
          style={styles.player}
          ref={
            component => {
              this.playerVod = component;
            }
          }
          listener={this.listenerVod}
          playerId={playerId}
        />
        <Text style={{marginTop: isAndroid()? 0 : isIphoneX()? 0 : 20}}>This is Live demo</Text>
        <UZPlayer
          token={token}
          apiVersion={4}
          appId={appId}
          stream='live'
          entityId={entityIdLive}
          feedId={feedId}
          streamName={streamName}
          region={region}
          style={styles.player}
          ref={
            component => {
              this.playerLive = component;
            }
          }
          listener={this.listenerLive}
          playerId={playerId}
        />
      </SafeAreaView>
    );
  }
}

export const isIphoneX = () => {
  let d = Dimensions.get('window');
  const { height, width } = d;

  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&

    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
}

export const isAndroid = () => {
  let d = Dimensions.get('window');
  return (
    // This has to be iOS duh
    Platform.OS === 'android'
  );
}


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
