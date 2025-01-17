import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {Icon} from '../../assets';

const Login = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <View>
        <Image
          source={Icon.AppIcon}
          style={{width: windowWidth * 0.7, height: windowWidth * 0.2}}
        />
      </View>
      <View>
        <View
          style={{
            backgroundColor: Platform.OS == 'ios' ? 'grey' : 'yellow',
            borderRadius: 5,
          }}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={'white'}
            style={{width: windowWidth * 0.75, margin: 5}}
          />
        </View>
        <View style={{backgroundColor: 'grey', borderRadius: 5, marginTop: 10}}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={'white'}
            style={{width: windowWidth * 0.75, margin: 5}}
          />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'blue',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
});
