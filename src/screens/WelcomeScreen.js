import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    Image,
    Alert
} from "react-native";

import { connect } from 'react-redux';
import { PRIMARY_COLOR } from "../colors";

import Icon from 'react-native-vector-icons/MaterialIcons'

class WelcomeScreen extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerShown: false
        })
        if (this.props.user.onboarding_completed){
            this.props.navigation.reset({routes: [{ name: 'WorkoutList' }]})
        }
    }

    componentDidUpdate() {
        if (this.props.user.userid) {
            if (this.props.user.onboarding_completed) {
                this.props.navigation.reset({routes: [{ name: 'WorkoutList' }]})
            } else {
                this.props.navigation.navigate('Setup')
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Icon name='fitness-center' size={80} color='ghostwhite' style={styles.headerIcon}/>
                    <Text style={styles.headerText}>
                        PPL Workout Tracker
                    </Text>
                </View>
                
                <View style={styles.getStartedView}>
                    <Text style={styles.getStartedText}>
                        Get Stronger and Build Muscle
                    </Text>
                    <TouchableOpacity style={styles.getStartedButton} onPress={() => this.props.navigation.navigate('Setup')}>
                        <Text style={styles.getStartedButtonText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottom}>
                    
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ user, workouts }) => ({
    user,
    workouts
})
export default connect(mapStateToProps)(WelcomeScreen);

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
    getStartedView: {
        alignItems: 'center'
    },
    getStartedText: {
        fontSize: 18,
        color: 'ghostwhite'
    },
    getStartedButton: {
        marginTop: 50,
        backgroundColor: 'ghostwhite',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    getStartedButtonText: {
        fontSize: 20,
        color: PRIMARY_COLOR
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonView: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    loginButton: {

    },
    loginButtonText: {
        color: 'ghostwhite',
        fontSize: 18
    },
    
});