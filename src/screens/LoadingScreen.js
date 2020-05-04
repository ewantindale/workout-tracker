import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text,
} from "react-native";

import { PRIMARY_COLOR } from "../colors";
import Icon from 'react-native-vector-icons/MaterialIcons'

class LoadingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Icon name='fitness-center' size={80} color='ghostwhite' style={styles.headerIcon}/>
                    <Text style={styles.headerText}>
                        PPL Workout Tracker
                    </Text>
                </View>
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        padding: 25,
    },
    headerView:{
        flex: 1,
        marginTop: 100,
    },
    headerText: {
        color: 'ghostwhite',
        fontSize: 40,
        textAlign: 'center'
    },
    headerIcon: {
        color: 'ghostwhite',
        alignSelf: 'center'
    },
});