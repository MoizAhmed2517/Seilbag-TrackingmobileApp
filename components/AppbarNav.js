import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6'
import BluetoothDrawer from './BluetoothDrawer';

export default function AppbarNav({name}) {

  const [visible, setVisible] = useState(false);

  const handleBluetooth = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleLogout = () => {
    console.log("Logout")
  }

  const handleNav = () => {
    console.log("Nav")
  }

  return (
    <>
      <Appbar.Header style={styles.titleNav}>

        <View style={styles.sideContentLeft}>
          <Appbar.Action icon={() => <Icon name="bars" size={26} color="#777777" />} onPress={handleNav}></Appbar.Action>
        </View>
  
        <View style={styles.centerContent}>
          <Appbar.Action icon={() => (
            <View style={styles.circleWrapperbg}>
              <Icon name="bluetooth-b" size={25} color="#8F9092" />
            </View>
          )} 
            onPress={handleBluetooth} 
          />
          <Appbar.Content title="Device Name" titleStyle={styles.titleContent} />
        </View>
  
        <View style={styles.sideContentRight}>
          <Appbar.Action icon={() => (
            <View style={styles.circleWrapper}>
              <Icon name="unlock-keyhole" size={15} color="#777777" />
            </View>
          )} 
            onPress={handleLogout} 
          />
        </View>

      </Appbar.Header>
      <BluetoothDrawer visible={visible} hideDialog={hideDialog}  />
    </>
  )
  
}

const styles = StyleSheet.create({
  sideContentLeft: {
    flex: 1, 
    justifyContent: 'center',  // Vertically centered
    alignItems: 'flex-start'   // Pushed to the left
  },
  sideContentRight: {
    flex: 1, 
    justifyContent: 'center',  // Vertically centered
    alignItems: 'flex-end'    // Pushed to the right
  },
  centerContent: {
    flexDirection: 'row',
    flex: 3,  // Give more space to the center content
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNav: {
    backgroundColor: '#040000',
    marginTop: -3,
  },
  titleContent: {
    alignSelf: 'center',
    color: '#777777',
    fontSize: 23,
    marginTop: 3
  },
  iconStyle: {
    color: '#8F9092',
    height: 30,
  },
  circleWrapper: {
  width: 31,  // Adjust based on your needs
  height: 31,  // Adjust based on your needs
  borderRadius: 15,  // Half of width and height to make it a circle
  backgroundColor: 'transparent',  // Adjust color as needed
  borderWidth: 2,  // Define the border thickness
  borderColor: '#777777',
  justifyContent: 'center',
  alignItems: 'center', // Optional: To provide some space around the circle
  },
  circleWrapperbg: {
    width: 31,  // Adjust based on your needs
    height: 31,  // Adjust based on your needs
    borderRadius: 15,  // Half of width and height to make it a circle
    backgroundColor: '#FFFFFF',  // Adjust color as needed
    borderWidth: 2,  // Define the border thickness
    borderColor: '#777777',
    justifyContent: 'center',
    alignItems: 'center', // Optional: To provide some space around the circle
  }
})