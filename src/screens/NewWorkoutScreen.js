import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
    Modal,
    TextInput
} from "react-native";

import { connect } from 'react-redux'
import Exercise from '../components/NewWorkoutScreen/Exercise'
import StatusBar from '../components/NewWorkoutScreen/StatusBar'
import { workoutCancel, timerReset, logWorkout, updateWorkingWeight } from '../redux/actions'
import { PRIMARY_COLOR } from "../colors";
import Icon from 'react-native-vector-icons/MaterialIcons'


class NewWorkoutScreen extends Component {
    constructor(props){
        super(props);

        this.props.navigation.setOptions({ title: this.props.currentWorkout.name })
    }

    state = {
        modalVisible: false,
        exercise_index: null,
        weight: null
    };

    openSetWorkingWeightModal = (exercise_index) => {
        this.setState({ 
            modalVisible: true, 
            exercise_index: exercise_index,
            weight: this.props.currentWorkout.exercises[exercise_index].weight
        })
    }

    closeSetWorkingWeightModal = () => {
        this.setState({ modalVisible: false })
    }

    submitSetWorkingWeightModal = () => {
        this.props.dispatch(updateWorkingWeight(parseFloat(this.state.weight), this.state.exercise_index))
        this.setState({ modalVisible: false })
    }

    incrementSetWorkingWeightModal = () => {
        this.setState((state) => ({ weight: parseFloat(state.weight) + 2.5}))
    }

    decrementSetWorkingWeightModal = () => {
        this.setState((state) => ({ weight: parseFloat(state.weight) > 2.5 ? parseFloat(state.weight) - 2.5 : 2.5}))
    }

    finishWorkout = () => {
        Alert.alert('Finish Workout', 'Finish workout and add it to the workout log?', 
        [
            {text: 'Finish', onPress:() => {
                workout = this.props.currentWorkout

                // Add workout to local store
                this.props.dispatch(logWorkout(workout))
                this.props.dispatch(timerReset())
                this.props.navigation.navigate('WorkoutList')
            }},
            {text: 'Cancel'}
        ])
        
    }

    cancelWorkout = () => {
        Alert.alert('Cancel Workout', 'Are you sure you want to cancel your workout?', 
        [
            {text: 'Yes', onPress:() => {
                this.props.dispatch(workoutCancel()),
                this.props.dispatch(timerReset()),
                this.props.navigation.navigate('WorkoutList')
            }},
            {text: 'No'}
        ])
    }

    render() {
        return (
            <>
                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitleText}>Set Working Weight</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                padding: 10,
                            }}>
                                <TouchableOpacity 
                                    onPress={this.decrementSetWorkingWeightModal}
                                    style={{
                                        padding: 5,
                                    }}
                                >
                                    <Icon name='remove' size={20}/>
                                </TouchableOpacity>
                                <TextInput 
                                    value={this.state.weight ? this.state.weight.toString() : null}
                                    selectTextOnFocus={true}
                                    autoFocus={true}
                                    style={styles.modalTextInput}
                                    onChangeText={(weight) => this.setState({weight})}
                                    keyboardType='number-pad'
                                    maxLength={5}
                                />
                                <TouchableOpacity 
                                    onPress={this.incrementSetWorkingWeightModal}
                                    style={{
                                        padding: 5,
                                    }}
                                >
                                    <Icon name='add' size={20}/>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.modalButtonView}>
                                <TouchableOpacity style={styles.modalCancelButton} onPress={this.closeSetWorkingWeightModal}>
                                    <Text style={styles.modalCancelButtonText}>CANCEL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.modalOKButton} onPress={this.submitSetWorkingWeightModal}>
                                    <Text style={styles.modalOKButtonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={styles.container}>
                    <View style={styles.flatList}>
                        <FlatList
                            data={this.props.currentWorkout.exercises}
                            renderItem={({item, index}) => <Exercise item={item} index={index} openSetWorkingWeightModal={this.openSetWorkingWeightModal}/>}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={{padding: 10}}
                            ListFooterComponent={<View style={styles.buttonView}>
                            <TouchableOpacity style={styles.cancelWorkoutButton} onPress={this.cancelWorkout}>
                                <Text style={styles.cancelWorkoutButtonText}>
                                    Cancel Workout
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.finishWorkoutButton} onPress={this.finishWorkout}>
                                <Text style={styles.finishWorkoutButtonText}>
                                    Finish Workout
                                </Text>
                            </TouchableOpacity>
                        </View>}
                        />
                        
                    </View>
                    
                    <StatusBar/>

                </View>
            </>
        );
    }
}

const mapStateToProps = ({currentWorkout, timer, user, workouts}) => ({
    currentWorkout: currentWorkout.currentWorkout,
    timer,
    user,
    workouts
});

export default connect(mapStateToProps)(NewWorkoutScreen);

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000080',
        paddingHorizontal: 25
    },
    modalView: {
        backgroundColor: "white",
        padding: 10,
        elevation: 5,
    },
    modalTitleText: {
        fontSize: 18
    },
    modalTextInput: {
        borderBottomWidth: 2,
        borderBottomColor: PRIMARY_COLOR,
        paddingBottom: 0,
        textAlign: 'center',
        fontSize: 25
    },
    modalButtonView: {
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    modalCancelButton: {
        padding: 10
    },
    modalOKButton: {
        padding: 10
    },
    modalCancelButtonText: {
        color: 'firebrick',
        fontWeight: 'bold'
    },
    modalOKButtonText: {
        color: PRIMARY_COLOR,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
    },
    flatList:{
        flex: 1, 
    },
    
    smallText:{
        color: 'darkgrey'
    },
    buttonView:{
        flexDirection: 'row',
        padding: 10
    },
    cancelWorkoutButton: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'firebrick',
        elevation: 3,
        marginRight: 5,
    },
    cancelWorkoutButtonText: {
        color: 'white',
        fontSize: 18
    },
    finishWorkoutButton: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: PRIMARY_COLOR,
        elevation: 3,
        marginLeft: 5
    },
    finishWorkoutButtonText: {
        color: 'white',
        fontSize: 18
    },
});