import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TextInput
} from "react-native";

import { connect } from 'react-redux'
import { updateSet, messageUpdate, timerStart } from '../../redux/actions'
import { PRIMARY_COLOR } from "../../colors";

class Set extends Component {

    state = {
        reps: this.props.item.completed_reps,
        isFocused: false
    }

    updateSet = () => {
        // update the redux store
        console.log('SET COMPONENT: Updating set ' + this.props.index + ' of exercise ' + this.props.exercise_index + ' with reps: ' + this.state.reps)
        this.props.dispatch(updateSet(parseInt(this.state.reps), this.props.index, this.props.exercise_index))
        this.props.dispatch(messageUpdate("Good job! Rest 3-5 mins then perform your next set."))
        this.props.dispatch(timerStart())
    }

    handleFocus = () => this.setState({
        reps: this.state.reps,
        isFocused: true
    })

    handleBlur = () => this.setState({
        reps: this.state.reps,
        isFocused: false
    })

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={{ 
                        padding: 10,
                        textAlign: 'center',
                        fontSize: 15, 
                        backgroundColor: this.props.item.completed_reps != null ? PRIMARY_COLOR : '#ebebeb',
                        color: this.props.item.completed_reps != null ? 'white' : 'black',
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                        borderColor: this.state.isFocused ? 'black' : this.props.item.completed_reps ? PRIMARY_COLOR : '#ebebeb',
                        borderWidth: 1
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChangeText={(reps) => this.setState({reps})}
                    value={this.state.reps != null ? this.state.reps.toString() : ''}
                    selectTextOnFocus={true}
                    maxLength={2}
                    onSubmitEditing={this.updateSet}
                    placeholder={(this.props.item.amrap) ? this.props.item.goal_reps.toString() + '+' : this.props.item.goal_reps.toString()}
                    keyboardType='number-pad'
                />
            </View>
            
        );
    }
}
export default connect()(Set);

const styles = StyleSheet.create({

});