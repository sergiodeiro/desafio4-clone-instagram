import React from 'react';
import {View, Text} from 'react-native';
import palette from 'res/palette';
import AddPostGrid from './addPostGrid';
import {createStackNavigator} from '@react-navigation/stack';
import colors from 'res/colors';

export default function addPostScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Adicionar um post"
        component={AddPostGrid}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
          headerTitle: () => <View></View>,
          headerLeft: () => (
            <View style={{marginHorizontal: 5, marginVertical: 10}}>
              <TextInput
                style={{
                  backgroundColor: colors.textInputBackground,
                  height: 35,
                  width: Dimensions.get('screen').width - 10,
                  fontWeight: 'bold',
                  borderRadius: 10,
                  paddingStart: 20,
                  fontSize: 16,
                  color: 'white',
                }}
                placeholder="Search"
                placeholderTextColor={colors.textFaded2}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
