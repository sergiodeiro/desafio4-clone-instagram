//Desenvolvido por:
//Sergio Deiró
//Mauricio Lanner
//Philipe 
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import MainNavigator from './containers/main/MainNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from 'res/images';
import colors from './res/colors';
import { users } from './res/mock'

StatusBar.setBarStyle('light-content');

export default function AppNavigator() {
  const [validate, setValidate] = React.useState(false);
  function LoginScreen() {

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const _signInAsync = async () => {
      users.map((value) => {
        if (email === value.email && password === value.password) {
          setValidate(true);
        } else {
          setValidate(false);
          Alert.alert(
            "Login",
            "Verifique os dados digitados",
            [
              { text: "OK" }
            ],
            { cancelable: false }
          );
        }
      })
    };
    return (
      <View style={Styles.container}>
        <View style={Styles.logoContainer}>
          <Image source={images.logo} style={{ height: 70, width: 200 }} />
        </View>
        <View style={Styles.userNameContainer}>
          <TextInput
            style={Styles.userNameInput}
            placeholder="E-mail"
            placeholderTextColor={colors.textFaded2}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={Styles.passwordContainer}>
          <TextInput
            secureTextEntry={true}
            style={Styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor={colors.textFaded2}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity style={Styles.loginContainer} onPress={_signInAsync}>
          <Text style={Styles.loginText}>Entrar</Text>
        </TouchableOpacity>
        <View
          style={{
            //flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#262626' }}></View>

          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#262626',
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{ color: '#969696' }}>Ainda não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={{ color: '#008bef' }}> Cadastre-se.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const Stack = createStackNavigator();
  return validate ? (
    <MainNavigator />
  ) : (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
            headerTransparent: true,
            title: '',
          }}
        />
      </Stack.Navigator>
    );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#282a36',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  userNameContainer: {
    borderColor: '#262626',
    backgroundColor: colors.loginInputBackground,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  userNameInput: {
    marginStart: 10,
    color: 'white',
  },
  passwordContainer: {
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: colors.loginInputBackground,
    marginBottom: 20,
  },
  passwordInput: { marginStart: 10, color: 'white' },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,
  },
  forgotPasswordText: {
    color: '#0088f8',
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
  },
});