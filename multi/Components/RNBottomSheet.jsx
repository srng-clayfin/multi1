import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { RNSwitch } from './RNSwitch';



export const RNBottomSheet = () => {

    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Button
                    onPress={toggleBottomNavigationView}
                    title="Start"
                />
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}
                >
                    <View style={styles.bottomNavigationView}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    padding: 20,
                                    fontSize: 20,
                                }}>
                            </Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <RNSwitch />
                            </View>
                        </View>
                    </View>
                </BottomSheet>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
