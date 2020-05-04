import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from "react-native";

import { connect } from 'react-redux'
import WorkoutListItem from '../components/WorkoutListScreen/WorkoutListItem'
import { createNewWorkout } from '../redux/actions' 
import { PRIMARY_COLOR } from "../colors";
import Icon from 'react-native-vector-icons/MaterialIcons'


class WorkoutListScreen extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

        this.props.navigation.setOptions({ 
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}>
                        <Icon name='menu' size={25} color='white' />
                    </TouchableOpacity>
                </View>
            )  
        })
    }

    createNewWorkout = () => {
        this.props.dispatch(createNewWorkout(
            this.props.workouts.next_workout_in_cycle, 
            this.props.workouts.workingWeights
        ))
        this.props.navigation.navigate('NewWorkout')
    }

    resumeWorkout = () => {
        this.props.navigation.navigate('NewWorkout')
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.workouts.workouts}
                    renderItem={({item, index}) => <WorkoutListItem item={item} index={index}/>}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                />
                {this.props.workoutInProgress ? 
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button} onPress={this.resumeWorkout}>
                            <Text style={styles.buttonText}>Resume Workout</Text>
                        </TouchableOpacity>
                    </View>
                :
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button} onPress={this.createNewWorkout}>
                            <Text style={styles.buttonText}>Begin Workout</Text>
                        </TouchableOpacity>
                    </View>   
                }
            </View>
        );
    }
}

const mapStateToProps = ({ workouts, currentWorkout, user }) => ({
    workouts: workouts,
    workoutInProgress: currentWorkout.workoutInProgress,
    user: user
});

export default connect(mapStateToProps)(WorkoutListScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonView:{
        padding: 10
    },
    button: {
        padding: 10,
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        elevation: 3
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});