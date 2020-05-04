import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux'

class StatusBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.timerView}>
                    <Icon style={{
                        color: this.props.active ? '#fafafa' : '#3b3b3b',
                        paddingRight: 5
                    }} name="timer" size={25}/>
                    <Text style={{
                        fontSize: 30,
                        color: this.props.active ? '#fafafa' : '#3b3b3b'
                    }}>
                        {this.props.minutes}:{this.props.seconds.toString().padStart(2, '0')}
                    </Text> 
                </View>

                <View style={styles.messageView}>
                    <Text style={styles.messageText}>
                        {this.props.message}
                    </Text> 
                </View>
                
            </View>
        );
    }
}

const mapStateToProps = ({timer, messages}) => ({
    seconds: timer.seconds,
    minutes: timer.minutes,
    active: timer.active,
    message: messages.currentMessage
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#171717',
        padding: 10
    },
    timerView:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    messageView:{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    messageText:{
        color: '#fafafa'
    }

})

export default connect(mapStateToProps)(StatusBar);

