import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    Image,
    Alert,
    FlatList
} from "react-native";

import { connect } from 'react-redux';
import { PRIMARY_COLOR } from "../colors";
import Exercise from '../components/SetupScreen/Exercise'
import { startingWeightsSet } from '../redux/actions'

class SetupScreen extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerShown: false
        })
    }

    setStartingWeights = () => {
        this.props.dispatch(startingWeightsSet())

        this.props.navigation.reset({routes: [{ name: 'WorkoutList' }]})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>
                        Set your starting weights
                    </Text>
                    <Text style={styles.subHeaderText}>
                        Enter your 1 rep max for the following exercises so that we can set your starting weights. You can always adjust these later on.
                    </Text>
                </View>

                <FlatList
                    data={this.props.workouts.startingOneRepMaxes}
                    renderItem={({item, index}) => <Exercise item={item} index={index}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
                
                <View style={styles.bottom}>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.backButtonText}>
                                BACK
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.continueButton} onPress={() => this.setStartingWeights()}>
                            <Text style={styles.continueButtonText}>
                                CONTINUE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ user, workouts }) => ({
    user,
    workouts
})
export default connect(mapStateToProps)(SetupScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        padding: 25
    },
    headerText: {
        fontSize: 25,
        color: 'ghostwhite',
    },
    subHeaderText: {
        marginTop: 20,
        color: 'ghostwhite'
    },
    flatList: {
        marginTop: 20
    },
    bottom: {
        justifyContent: 'flex-end',
    },
    buttonView: {
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'ghostwhite',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    continueButton:{
        backgroundColor: 'ghostwhite',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    continueButtonText: {
        color: PRIMARY_COLOR,
        fontSize: 18
    },
    backButton:{
        backgroundColor: PRIMARY_COLOR,
    },
    backButtonText: {
        color: 'ghostwhite',
        fontSize: 18
    },
});