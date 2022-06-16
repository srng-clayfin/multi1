import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { Activityindi } from "./ActivityIndi";


export const RNSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [flag, setFlag] = useState(false);
    const toggleSwitch = () => {
        setFlag(!flag)
        setIsEnabled(previousState => !previousState);
    }

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            {flag ?
                <View>
                    <Text style={styles.text}>
                        Srng 0702
                    </Text>
                </View>

                :
                <View>
                    <Activityindi />
                </View>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 32,
        fontWeight: "bold"
    }
});
