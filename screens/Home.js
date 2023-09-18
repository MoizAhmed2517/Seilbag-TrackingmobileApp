import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import AppbarNav from '../components/AppbarNav';
import { Divider, PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6'

const buttonData = [
  {text: 'LED ON/OFF', iconName: 'power-off', link: 'text'},
  {text: 'Emergency', iconName: 'triangle-exclamation', link: 'text'},
  {text: 'Color Change', iconName: 'square', link: 'text'},
  {text: 'Brightness', iconName: 'sun', link: 'text'},
  {text: 'Function', iconName: 'shapes', link: 'text'},
  {text: 'Direction', iconName: 'arrows-left-right', link: 'text'},
]

function chunkArray(array, size) {
  const chunked = [];
  let index = 0;
  
  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }
  
  return chunked;
}

const chunkedButtonData = chunkArray(buttonData, 2);

export default function Home({ name }) {

  return (
    <PaperProvider >
      <View style={styles.container}>
        <AppbarNav />
        <Divider style={styles.divider} />

        <View style={styles.animation}>
          <View style={styles.animationContainer}>
            <Icon name="battery-empty" size={68} color="#777777" />
            <Icon name="sun" size={38} color="#777777" />
          </View>
          <View style={styles.ImageContainer}>
            <Image source={require('../static/loading.png')} resizeMode='contain' style={styles.ImageLoading}  />
          </View>
        </View>

        {/* <Divider style={styles.divider} /> */}

        <View style={styles.buttonGrid}>
          {chunkedButtonData.map((rowItems, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {rowItems.map((item, btnIndex) => (
                <TouchableOpacity key={btnIndex} style={styles.touchableButton}>
                  <View style={styles.touchableButtonContainer}>
                    <Icon name={item.iconName} size={38} color="#777777" />
                    <Text style={styles.touchableButtonText}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

      </View>
    </PaperProvider >
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040000',
  },
  divider: {
    backgroundColor: '#999999',
    height: 2,
  },
  animation: {
    height: '20%',
    flexDirection: 'column', // Stack children vertically
    justifyContent: 'space-between', // This will ensure a balanced spacing
    alignItems: 'stretch', // Make sure children take the full width
  },
  animationContainer: {
    flex: 2, // Takes up 1 part of the available space
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  buttonGrid: {
    flex: 1, // This ensures the grid takes up the remaining space
  },
  buttonRow: {
    flexDirection: 'row',
    flex: 1, // This equally divides the space among the three rows
  },
  touchableButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999999',
    borderWidth: 1,
    margin: 2, // This gives a tiny space between boxes; adjust as needed
  },
  touchableButtonText: {
    color: "#777777",
    fontSize: 25,
    fontWeight: '500',
    marginTop: 20,
  },
  touchableButtonContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    flex: 2, // Takes up 2 parts of the available space, ensuring it's larger than animationContainer
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  ImageLoading: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});
