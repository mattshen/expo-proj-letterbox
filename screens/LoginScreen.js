import React, { Component } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';
import { FormLabel, FormInput, Button, Text, Divider} from 'react-native-elements'

import apis from '../api/apis';
import Layout from '../constants/Layout';

export default class LoginScreen extends Component {

  state = {
    username: '',
    password: '',
    logining: false,
  }

  _login = () => {
    this.setState({
      ...this.state,
      logining: true,
    });
    if (this.state.username && this.state.password) {
      apis.users.login(this.state.username, this.state.password)
      .then(res => {
        this.setState({
          ...this.state,
          logining: false,
        });
        if (res && res.success) {
          this.props.navigation.navigate('Main');
        } else {
          Alert.alert('Login failed');
        }
      })
    } else {
      Alert.alert('Both username and password are required');
      this.setState({
        ...this.state,
        logining: false,
      });
    }
  };

  _navToMain = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'height'}>
        <Text h3 style={{color : '#03A9F4'}}>Letterbox Surprise</Text>
        <View style={{width: Layout.window.width - 20, paddingBottom: 30,}}>
          <FormLabel>Username</FormLabel>
          <FormInput autoCapitalize={'none'} autoCorrect={false} 
            onChangeText={text => this.setState({...this.state, username: text})}
          />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry={true} 
            onChangeText={text => this.setState({...this.state, password: text})}
          />
                    
          <Divider style={{backgroundColor: '#ecf0f1', margin: 10}} />
          { this.state.logining && 
            <ActivityIndicator/>
          }
          { !this.state.logining && 
            <Button
              raised
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Login In' 
              onPress={this._login}
              />
          }
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});