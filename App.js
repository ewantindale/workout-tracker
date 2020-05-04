import 'react-native-gesture-handler';

import React, { Component } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import WorkoutListScreen from './src/screens/WorkoutListScreen';

import NewWorkoutScreen from './src/screens/NewWorkoutScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import SetupScreen from './src/screens/SetupScreen';

import { PRIMARY_COLOR } from './src/colors'

const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<LoadingScreen/>} persistor={persistor}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ 
                            headerTitleAlign: 'center', 
                            headerTitleStyle: {
                                color: 'white'
                            },
                            headerStyle: {
                                backgroundColor: PRIMARY_COLOR,
                            },
                            headerTintColor: 'white',
                        }}> 
                            <Stack.Screen
                                name="WorkoutList"
                                component={WorkoutListScreen}
                                options={{
                                    title: 'PPL Workout Tracker',
                                    headerTitleAlign: 'left',
                                }}
                            />
                            <Stack.Screen
                                name="NewWorkout"
                                component={NewWorkoutScreen}
                                options={{title: 'NewWorkoutScreen'}}
                            />
                            
                            <Stack.Screen
                                name="Welcome"
                                component={WelcomeScreen}
                                options={{
                                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                                }}
                            />
                            <Stack.Screen
                                name="Setup"
                                component={SetupScreen}
                                options={{
                                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                                }}
                            />
                            
                            
                        </Stack.Navigator>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;