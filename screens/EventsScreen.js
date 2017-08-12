import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Card, ListItem, Button } from 'react-native-elements'

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  _navToQRScan = () => {
    this.props.navigation.navigate('QRScan');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Scan QR Code' 
          onPress={this._navToQRScan}
        />
        <ScrollView style={styles.container}>
            <Card
              title='Coles Catalogue Event | [ REGISTERED ]' 
              titleStyle={{color: '#2e78b7'}}>
              <Text style={{marginBottom: 10}}>
                You've registered for this event. The result will be known on 31/8/2017.
              </Text>
            </Card>

            <Card
              title='ALDI Catalogue Event | [ NOT WON] '
              titleStyle={{color: '#2e78b7'}}>
              <Text style={{marginBottom: 10}}>
                Unfortunately, you didn't won this time. Please keep on eye on the future catalogues.
              </Text>
            </Card>

            <Card
              title='ALDI Catalogue Event | [ WON ]'
              titleStyle={{color: '#2e78b7'}}>
              <Text style={{marginBottom: 10}}>
                Congratulations, you've won a free gift.
              </Text>
              <TouchableOpacity
                onPress={this._handleHelpPress}>
                <Text style={{fontSize: 14, color: '#2e78b7'}}>
                  View Details
                </Text>
              </TouchableOpacity>
            </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});
