import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Dialog, Portal, PaperProvider, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6'
import { ScrollView } from 'react-native';

const data = ['Paired Device', 'Seilbag-A01', 'Paired Device', 'Seilbag-A01','Seilbag-A01', 'Paired Device', 'Seilbag-A01']
const dataunpaired = ['Unpaired Device', 'Seilbag-A01' ]

const BluetoothDrawer = (props) => {
  return (
        <Portal>
        <Dialog visible={props.visible} onDismiss={props.hideDialog}>
            <Dialog.Title style={{ color: '#151313', fontWeight: '400', fontFamily: "Inter", marginBottom: -2  }}>Detect SeilBag Device Please select Device</Dialog.Title>
            
            <Dialog.ScrollArea>
                <ScrollView>
                    <Text style={ styles.pairedDevice }>Paired Device   __________</Text>
                    {
                        data.map((item, index) => (
                            <>
                                <View style={styles.pairedDeviceContainer} key={index}>
                                    <Text style={ styles.deviceName }>{item}</Text>
                                    <Icon name="gear" size={18} color="#323333" marginRight={25} /> 
                                </View>
                                <Divider style={ styles.divider } />
                            </>
                        ))
                    }
                    <Text style={ styles.pairedDevice }>New Device   __________</Text>
                    {
                        dataunpaired.map((item, index) => (
                            <>
                                <View style={styles.pairedDeviceContainer} key={index}>
                                    <Text style={ styles.deviceName }>{item}</Text>
                                    <Icon name="gear" size={18} color="#323333" marginRight={25} /> 
                                </View>
                                <Divider style={ styles.divider } />
                            </>
                        ))
                    }
                </ScrollView>
            </Dialog.ScrollArea>
            
            <Dialog.Actions>
                <Button 
                    onPress={props.hideDialog} 
                    style={{ 
                        backgroundColor: '#4D4E4E', 
                        borderRadius: 5, 
                        width: '100%',
                        elevation: 0, // Removes Android's default elevation shadow
                    }}
                    labelStyle={{ color: '#FFF', fontSize: 20 }}
                    mode="contained"
                >
                    OK
                </Button>
            </Dialog.Actions>

        </Dialog>
        </Portal>
  )
}

export default BluetoothDrawer

const styles = StyleSheet.create({
    pairedDevice: {
        fontSize: 24,
        fontFamily: 'Inter',
        color: '#777777',
        marginBottom: 20,
        marginTop: 20,
    },
    deviceName: {
        fontSize: 20,
        fontFamily: 'Inter',
        color: '#121212',
        marginLeft: 20,
        marginTop: 5,
        fontWeight: '400',
    },
    pairedDeviceContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    divider: {
        marginTop: 8,
        backgroundColor: '#CACAC9',
        height: 1,
    }
})