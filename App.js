import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView } from 'react-native';
import UZPlayer from './lib/uiza-sdk-react-native/UZPlayer';

export default class App extends React.Component {
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
