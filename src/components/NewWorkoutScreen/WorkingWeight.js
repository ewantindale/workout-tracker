import React, { Component } from 'react'

import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

class WorkingWeight extends Component {

    openModal = () => {
        this.props.openSetWorkingWeightModal(this.props.exercise_index)
    }
    render() {
        return (    
            <TouchableOpacity style={styles.container} onPress={this.openModal}>
                <Text style={styles.text}>{this.props.sets}x{this.props.reps} {this.props.weight}kg</Text> 
            </TouchableOpacity>
        )
    }
}

export default WorkingWeight

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',        
    },
    text:{
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
        fontSize: 15
    },
    textInput: {
        padding: 0
    },
})