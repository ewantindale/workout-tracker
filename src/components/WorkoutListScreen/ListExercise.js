import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";

class ListExercise extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.item.name}</Text>
                <Text>{this.props.item.weight}kg</Text>
                <View>
                    {
                        this.props.item.sets.map((set, index) => (
                            <Text key={index}>Set {index+1}: {set.completed_reps === 0 || set.completed_reps > 1 ? 
                                set.completed_reps + ' reps' 
                                : (set.completed_reps === 1) ? 
                                set.completed_reps + ' rep' 
                                : '-'}
                            </Text>
                        ))
                    }
                </View>
            </View>
        );
    }
}
export default ListExercise;

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    name: {
        fontWeight: 'bold'
    }
});