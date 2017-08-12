import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native-elements'

export default class QRCodeScanScreen extends Component {

  static navigationOptions = {
    title: 'QR Code Scan',
  };

  state = {
    allowScan: true,
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _goBack = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        params: { title: 'Hello' },
        routeName: 'Main'
      })
    );
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      ...this.state,
      hasCameraPermission: status === 'granted',
    });
  };

  _confirmScan = (data) => {
    console.log('confirmed scan', data)
    this._goBack();
  };

  _handleBarCodeRead = data => {
    this.setState({
      ...this.state,
      allowScan: false,
    });
    Alert.alert(
      'Confirmation',
      'Do you want to join event xyz? ',
      [
        {text: 'Cancel', onPress: () => this._goBack(), style: 'cancel'},
        {text: 'OK', onPress: () => this._confirmScan(data)},
      ],
      { cancelable: false }
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Please point your camera at the QR code on the catalogue.
        </Text>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <View>
              { this.state.allowScan &&
                <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{ height: 200, width: 200 }}
                />
              }
            </View>

        }
        <View style={styles.container}>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Cancel' 
            onPress={this._goBack}
          />
        </View>
      </View>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
