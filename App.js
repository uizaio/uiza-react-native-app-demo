import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import UZPlayer from './lib/uiza-sdk-react-native/UZPlayer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let self = this;

    this.listenerVod = {
      onReady: function() { },
      onLoad: function() { },
      onLoaded: function(evt) { },
      onFullscreenChange: function(evt) { },
      onPlaybackChange: function(evt) { },
      onError: function(evt) { },
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
    const api = 'BASE64_YOUR_API';
    const token = 'YOUR_TOKEN';
    const appId = 'YOUR_APP_ID';

    // vod config
    const entityIdVod = 'YOUR_VOD_ENTITY_ID';

    // live config
    const entityIdLive = 'YOUR_LIVE_ENTITY_ID';
    const feedId = 'YOUR_FEED_ID';
    const streamName = 'YOUR_STREAM_NAME';
    const region = 'YOUR_REGION';

    return (
      <SafeAreaView style={styles.container}>
        <Text>This is VOD demo</Text>
        <UZPlayer
          debug={true}
          token={token}
          api={api}
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
        />
        <Text>This is Live demo</Text>
        <UZPlayer
          token={token}
          api={api}
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
        />
      </SafeAreaView>
    );
  }
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
