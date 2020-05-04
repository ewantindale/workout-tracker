import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from "react-native";

import ListExercise from './ListExercise'

class WorkoutListItem extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Text style={styles.date}>{this.props.item.date_added}</Text>
                    <Text style={styles.name}>{this.props.item.name}</Text>
                </View>
                
                <FlatList
                    data={this.props.item.exercises}
                    renderItem={({item}) => <ListExercise item={item}/>}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={this.props.item.notes ? <Text style={styles.notes}>Notes: {this.props.item.notes}</Text> : null}
                    contentContainerStyle={{
                        paddingHorizontal: 10
                    }}
                />
                
            </View>
        );
    }
}
export default WorkoutListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'darkgrey'
    },
    header: {
        alignItems:'center',
        padding: 10,
        paddingHorizontal: 50
    },
    date: {
        fontSize: 18
    },
    name: {

    }
});