import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import Set from './Set'
import WorkingWeight from './WorkingWeight'

class Exercise extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>{this.props.item.name.replace(/([0-9])\w+/, '')}</Text>
                    <View style={styles.headerSecondary}>
                        <WorkingWeight 
                            openSetWorkingWeightModal={this.props.openSetWorkingWeightModal} 
                            exercise_index={this.props.index} 
                            sets={this.props.item.sets.length} 
                            reps={this.props.item.sets[0].goal_reps} 
                            weight={this.props.item.weight.toString()}
                        />
                    </View>
                </View>
                
                <FlatList
                        data={this.props.item.sets}
                        renderItem={({item, index}) => <Set index={index} exercise_index={this.props.index} item={item}/>}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={{
                            flex: 1,
                            justifyContent: 'space-evenly'
                        }}
                />
            </View>
            
        );
    }
}
export default Exercise;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        elevation: 3
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerSecondary: {
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 18,
        marginBottom: 5
    },
});