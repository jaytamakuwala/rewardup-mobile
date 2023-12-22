import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '../constant/colors';
import {fetchOfferData} from '../services/OnBoardApis';
import axios from 'axios';
import {offersList} from '../redux/actions/onBoardActions';

const {height, width} = Dimensions.get('window');

export default function OnboardingScreen() {
  const [offerData, setOfferData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchOfferData()
      .then(async response => {
        setOfferData(response?.data);
        // offersList(response?.data);
      })
      .catch(err => {
        console.log('err :>> ', err);
      });
  };

  const renderItem = ({item}) => {
    console.log('item :>> ', item);
    return (
      <View style={{...styles.cardView, elevation: 10}}>
        <View style={styles.imgView}>
          <Image
            source={{
              uri: item?.image
                ? item?.image
                : 'https://media.istockphoto.com/id/1436433087/video/abstract-liquid-color-gradient-neon-colorful-background.jpg?s=640x640&k=20&c=GkjezX83t2LftDbjeaFlxn1y7OovcVSiAC5kByPJXcY=',
            }}
            style={StyleSheet.absoluteFill}
          />
          {/* <View style={styles.likeBtn}>
            {console.log('item?.image :>> ', item?.image);}
            <Image
              source={{
                uri: item?.image,
              }}
              style={{height: 20, width: 20, tintColor: Colors.White}}
            />
          </View> */}
        </View>
        <View style={{marginHorizontal: 15}}>
          <View style={{marginTop: 12}}>
            <Text style={styles.cardText}>{item?.name}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.cardSubText}>{item?.address}</Text>
              <Text style={styles.cardSubText}>{item?.distance} KM</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              marginVertical: 10,
              borderColor: Colors.lightGray,
            }}
          />
          <View>
            <Text
              style={{
                ...styles.cardSubText,
                color: Colors.black,
                fontSize: 16,
              }}>
              {item?.items}
            </Text>
            <View
              style={{
                borderRadius: 5,
                alignSelf: 'flex-start',
                backgroundColor: Colors.Yellow,
                marginBottom: 10,
              }}>
              <Text style={styles.tagText}>{item?.discount}% off</Text>
            </View>
            {/* <Text style={styles.offerText}>{item?.similarOffersCount}</Text> */}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <Text style={styles.heading}>Top Offers for you</Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={offerData}
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
    backgroundColor: '#edeff2',
  },
  subView: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  listView: {
    flex: 1,
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
    backgroundColor: 'white',
    marginBottom: 10,
  },
  imgView: {
    height: height * 0.2,
  },
  cardText: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.black,
  },
  cardSubText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '600',
  },
  tagText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: Colors.White,
    fontSize: 15,
    fontWeight: '700',
  },
  offerText: {
    marginHorizontal: 10,
    marginVertical: 18,
    fontSize: 16,
    fontWeight: '800',
    color: '#2798e3',
  },
  likeBtn: {
    top: 10,
    right: 10,
    padding: 8,
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});
