import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../constant/colors';
import Barcode from '@kichiyaki/react-native-barcode-generator';

const {height, width} = Dimensions.get('window');

export default function CardDetails({navigation}) {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 0.3, backgroundColor: '#63B9A0'}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={1}
            style={{
              margin: 10,
              padding: 10,
              alignSelf: 'flex-start',
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png',
              }}
              style={{height: 22, width: 22, tintColor: Colors.White}}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <Image
              source={{
                uri: 'https://cdn.vectorstock.com/i/1000x1000/32/60/starbucks-corporation-logo-vector-43663260.webp',
              }}
              style={{
                height: height * 0.14,
                width: width * 0.27,
                borderRadius: 15,
              }}
            />
            <View style={{marginHorizontal: 20}}>
              <Text style={styles.cardText}>ZARA</Text>
              <Text style={styles.cardSubText}>
                200 Bay street CUR9, Toronto
              </Text>
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
                <Text
                  style={{
                    ...styles.tagText,
                    color: Colors.White,
                    paddingVertical: 5,
                  }}>
                  Gold
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 0.7}}>
          {/* offers btn */}
          <View style={styles.offersView}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              activeOpacity={0.8}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/5530/5530758.png',
                  }}
                  style={{height: 25, width: 25}}
                />
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: 18,
                    fontWeight: '600',
                    color: Colors.Black,
                  }}>
                  You have 2 offers
                </Text>
              </View>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#4A7DA3',
                }}>
                View
              </Text>
            </TouchableOpacity>
          </View>
          {/*QR Code Main View*/}
          <View style={{...styles.offersView, paddingHorizontal: 0}}>
            {/* Beverage Btn */}
            <View
              style={{
                paddingHorizontal: 15,
              }}>
              <TouchableOpacity style={styles.freeBtn} activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
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
                  <Text style={styles.freeBtnText}>Free Beverage</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/471/471662.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: Colors.White,
                    marginHorizontal: 5,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  height: height * 0.031,
                  width: width * 0.05,
                  backgroundColor: 'white',
                  position: 'absolute',
                  left: 0,
                  top: '32%',
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  height: height * 0.031,
                  width: width * 0.05,
                  backgroundColor: 'white',
                  position: 'absolute',
                  right: 0,
                  top: '32%',
                  borderRadius: 100,
                }}
              />
            </View>

            {/* Points MAin View*/}
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 15,
                alignSelf: 'flex-start',
                flexDirection: 'row',
              }}>
              <View style={{...styles.giftIcon}}>
                <View style={{...styles.giftIcon, borderColor: '#437CA9'}}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/324/324687.png',
                    }}
                    style={{
                      height: 22,
                      width: 22,
                      tintColor: '#A0BCD2',
                    }}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...styles.tagText,
                    color: Colors.black,
                    fontSize: 28,
                  }}>
                  1200 pts
                </Text>
                <Text
                  style={{
                    ...styles.tagText,
                    fontSize: 16,
                    paddingVertical: 0,
                    fontWeight: 'normal',
                  }}>
                  350 points until your next reward
                </Text>
              </View>
            </View>

            {/* addtional Rewards */}
            <View style={{paddingHorizontal: 15, marginTop: 25}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: '700'}}>NEXT REWARDS</Text>
                <Text style={{fontWeight: '700', color: '#5080A6'}}>
                  Reward Levels
                </Text>
              </View>
              <Text style={{fontWeight: '600', color: Colors.black}}>
                Free Appetizer
              </Text>
            </View>
            <Barcode
              style={{
                marginTop: 20,
              }}
              format="CODE128B"
              value="0000002021954Q"
              text="0000002021954Q"
              maxWidth={(width * 2) / 3}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.White,
  },
  cardSubText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '600',
    color: Colors.White,
  },
  tagText: {
    paddingHorizontal: 10,

    fontSize: 15,
    fontWeight: '700',
  },
  tagView: {
    borderRadius: 50,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  offersView: {
    padding: 18,
    marginTop: 10,
    elevation: 10,
    shadowOffset: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.White,
  },
  freeBtn: {
    backgroundColor: '#53AD93',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  freeBtnText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 15,
  },
  giftIcon: {
    width: 55,
    height: 55,
    borderWidth: 3,
    borderRadius: 100,
    alignSelf: 'center',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2E7EE',
  },
});
