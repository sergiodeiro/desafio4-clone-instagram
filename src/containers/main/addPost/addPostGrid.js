import React from 'react';
import {View, Image, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {key: '1'},
];

function Test() {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{uri: 'https://picsum.photos/512'}}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />

        <Image
          source={{uri: 'https://picsum.photos/512'}}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />

        <Image
          source={{uri: 'https://picsum.photos/512'}}
          style={{
            height: 150,
            flex: 1,
            //marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{uri: 'https://picsum.photos/512'}}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />

        <Image
          source={{uri: 'https://picsum.photos/512'}}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />

        <Image
          source={{uri: 'https://picsum.photos/512'}}
          style={{
            height: 150,
            flex: 1,
            //marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Image
            source={{uri: 'https://picsum.photos/512'}}
            style={{
              height: 150,
              flex: 1,
              marginEnd: 2,
              marginBottom: 2,
              alignItems: 'center',
            }}
          />
          <Image
            source={{uri: 'https://picsum.photos/512'}}
            style={{
              height: 150,
              flex: 1,
              marginEnd: 2,
              marginBottom: 2,
              alignItems: 'center',
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <Image
            source={{uri: 'https://picsum.photos/512'}}
            style={{
              height: 150,
              flex: 1,
              //marginEnd: 2,
              marginBottom: 2,
              alignItems: 'center',
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default function SearchGrid() {
  return (
    <FlatList
      data={data}
      //style={{marginTop: 2, marginStart: 2}}
      renderItem={({item, index}) => <Test />}
      //numColumns={3}
      indicatorStyle={'white'}
      showsVerticalScrollIndicator={true}
    />
  );
}
