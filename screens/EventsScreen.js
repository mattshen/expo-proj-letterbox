import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Card, ListItem, Button } from 'react-native-elements'

import apis from '../api/apis';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  state = {
    refreshing: false,
    registrations: [],
  };

  componentDidMount () {
    this._fetchData();
  }

  _fetchData = () => {
    apis.eventRegistrations.findAllRegistrations().then(res => {
      
      this.setState({
        ...this.state,
        refreshing: false
      });

      if (res && res.success) {
        this.setState({
          ...this.state,
          registrations: res.results,
        })
      } else {
        Alert.alert('Something went wrong!');
      }
    });
  };
  
  _navToQRScan = () => {
    this.props.navigation.navigate('QRScan');
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this._fetchData();
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
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >

            {this.state.registrations.map((reg, i) => {
              const title = `${reg.title} | ${reg.status}`;
              return (
                <Card key={reg.id}
                  title={title} titleStyle={{color: '#2e78b7'}}>
                  <Text style={{marginBottom: 10}}>
                    QR Code Event. Expires on {reg.expiration}.
                  </Text>
                </Card>
              );
            })}

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
