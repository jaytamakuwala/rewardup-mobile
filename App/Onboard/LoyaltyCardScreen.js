import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constant/colors';

const {height, width} = Dimensions.get('window');

export default function LoyaltyScreen({navigation}) {
  const demoJson = [
    {
      imageUrl:
        'https://media.istockphoto.com/id/1436433087/video/abstract-liquid-color-gradient-neon-colorful-background.jpg?s=640x640&k=20&c=GkjezX83t2LftDbjeaFlxn1y7OovcVSiAC5kByPJXcY=',
      cardHeading: 'ZARA',
      subHeading: '200 Bay street CUR9, Toronto',
      points: '1200 pts',
      membership: 'Gold',
      percentage: '70',
      color: '#62B69E',
    },
    {
      imageUrl:
        'https://i.pinimg.com/736x/fd/8c/d2/fd8cd276b86211220ddc65c0bd2ce69c.jpg',
      cardHeading: 'ZARA',
      subHeading: '200 Bay street CUR9, Toronto',
      points: '1200 pts',
      membership: 'Platinum',
      percentage: '80',
      color: '#759AE2',
    },
    {
      imageUrl:
        'https://i.pinimg.com/736x/fd/8c/d2/fd8cd276b86211220ddc65c0bd2ce69c.jpg',
      cardHeading: 'ZARA',
      subHeading: '200 Bay street CUR9, Toronto',
      points: '1200 pts',
      membership: 'Gold',
      percentage: '40',
      color: '#DF7790',
    },
  ];
  const demoSearch = ['Frequently used', 'Food & Drinks', 'Salon & Spa'];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('CardDetails')}
        activeOpacity={0.8}
        style={{...styles.cardView, backgroundColor: item?.color}}>
        <View style={styles.mainImgView}>
          <View style={styles.imgView}>
            <Image
              source={{
                uri: item?.imageUrl,
              }}
              style={{
                ...StyleSheet.absoluteFill,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
          </View>
          <View style={{marginTop: 12, marginLeft: 20}}>
            <Text style={styles.cardText}>{item?.cardHeading}</Text>
            <Text style={styles.cardSubText}>{item?.subHeading}</Text>
          </View>
          <View style={styles.giftIcon}>
            <View style={{...styles.giftIcon, borderColor: Colors.White}}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/324/324687.png',
                }}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: Colors.White,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginVertical: 20}}>
            <Text
              style={{...styles.tagText, color: Colors.White, fontSize: 28}}>
              {item?.points}
            </Text>
          </View>
          <View style={styles.tagView}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/734/734548.png',
              }}
              style={{
                width: 15,
                height: 15,
                tintColor: Colors.White,
              }}
            />
            <Text style={{...styles.tagText, color: Colors.White}}>
              {item?.membership}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSearchItem = ({item}) => {
    return (
      <View
        style={{
          borderRadius: 50,
          alignSelf: 'flex-start',
          backgroundColor: '#e8eaed',
        }}>
        <Text style={{...styles.tagText, fontWeight: 'normal', fontSize: 16}}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <Text style={styles.heading}>Loyalty Cards</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3409/3409518.png',
          }}
          style={{height: 27, width: 27}}
        />
      </View>
      <View style={{flex: 0.05, marginBottom: 10}}>
        <FlatList
          contentContainerStyle={{flex: 1, justifyContent: 'space-evenly'}}
          horizontal
          data={demoSearch}
          renderItem={renderSearchItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.listView}>
        <FlatList
          data={demoJson}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  subView: {
    marginVertical: 12,
    flexDirection: 'row',
    marginHorizontal: 12,
    justifyContent: 'space-between',
  },
  listView: {
    flex: 0.95,
    marginHorizontal: 12,
  },
  heading: {
    textAlign: 'left',
    fontSize: 27,
    fontWeight: 'bold',
    color: Colors.Black,
  },
  cardView: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'lightblue',
    marginBottom: 10,
  },
  mainImgView: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  imgView: {
    height: height * 0.1,
    width: width * 0.2,
  },
  cardText: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.White,
  },
  cardSubText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
    color: Colors.White,
  },
  tagText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: '700',
  },
  tagView: {
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  giftIcon: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderRadius: 100,
    alignSelf: 'center',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0,0,0,0.2)',
  },
});
