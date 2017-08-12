import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, ListItem, Button } from 'react-native-elements'

import { MonoText } from '../components/StyledText';


export default class MessagesScreen extends React.Component {
  static navigationOptions = {
    title: 'Messages',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Card
            title='New Catalogue Arrived'
            titleStyle={{color: '#2e78b7'}}>
            <Text style={{marginBottom: 10}}>
              A new Woolworths catalogue has been delivered to your letterbox. 
              It has a QR code you can scan to get free samples, until out of stock or by 31/8/2017.
            </Text>
            <TouchableOpacity
              onPress={this._handleViewDetails}>
              <Text style={{fontSize: 14, color: '#2e78b7'}}>
                Scan Now
              </Text>
            </TouchableOpacity>
          </Card>

          <Card
            title='New Catalogue Arrived'
            titleStyle={{color: '#2e78b7'}}>
            <Text style={{marginBottom: 10}}>
              A new Coles catalogue has been delivered to your letterbox. 
              It has a QR code you can scan to join an event with a chance to win a free gift.
            </Text>
            <TouchableOpacity
              onPress={this._handleViewDetails}>
              <Text style={{fontSize: 14, color: '#2e78b7'}}>
                Scan Now
              </Text>
            </TouchableOpacity>
          </Card>

          <Card
            title='Free Gift Won'
            titleStyle={{color: '#2e78b7'}}>
            <Text style={{marginBottom: 10}}>
              You've won a free gift for the last event you've joined. 
            </Text>
            <TouchableOpacity
              onPress={this._handleViewDetails}>
              <Text style={{fontSize: 14, color: '#2e78b7'}}>
                View Details
              </Text>
            </TouchableOpacity>
          </Card>

        </ScrollView>

      </View>
    );
  }

  _handleViewDetails = () => {
    WebBrowser.openBrowserAsync(
      'https://www.google.com'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 5,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  MessagesScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
