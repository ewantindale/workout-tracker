import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
} from "react-native";

import { connect } from 'react-redux'
import { updateOnboardingExercise } from '../../redux/actions'

class Exercise extends Component {

    state = {
        weight: this.props.item.weight
    }

    updateOnboardingExercise = () => {
        this.props.dispatch(updateOnboardingExercise(parseFloat(this.state.weight), this.props.index))
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.labelText}>{this.props.item.name}</Text>
                <View style={styles.inputView}>
                    <TextInput 
                        style={{
                            fontSize: 18,
                            backgroundColor: 'ghostwhite',
                            paddingHorizontal: 10,
                            paddingVertical: 4
                        }} 
                        onChangeText={(weight) => this.setState({weight})}
                        onEndEditing={this.updateOnboardingExercise}
                        value={this.state.weight != null ? this.state.weight.toString() : ''}
                        keyboardType='number-pad'
                        selectTextOnFocus={true}
                        maxLength={5}
                    />
                    <Text style={{color: 'ghostwhite', fontSize: 20}}> kg </Text>
                </View>         
            </View>
        )
    }
}
const mapStateToProps = ({ workouts }) => ({
    workouts
})
export default connect(mapStateToProps)(Exercise);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'ghostwhite',
        paddingVertical: 15
    },
    labelText: {
        color: 'ghostwhite',
        fontSize: 18,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hintText:{
        color: 'ghostwhite',
    }
});