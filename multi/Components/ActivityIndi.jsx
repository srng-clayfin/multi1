import { ActivityIndicator, StyleSheet, Text, View }
    from "react-native";


export const Activityindi = () => {


    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
});
