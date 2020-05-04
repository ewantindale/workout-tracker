import {
    UPDATE_SET,
    TIMER_START,
    TIMER_STOP,
    TIMER_RESET,
    TIMER_INCREMENT,
    WORKOUT_CANCEL,
    LOG_WORKOUT,
    CREATE_NEW_WORKOUT,
    STARTING_WEIGHTS_SET,
    UPDATE_ONBOARDING_EXERCISE,
    UPDATE_WORKING_WEIGHT,
    MESSAGE_UPDATE
} from './actions'

import { workoutTemplates, getNewWorkingWeights } from '../workoutTemplates'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const customFloor = (x) => Math.floor(x/2.5) * 2.5

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const workoutsInitialState = {
    workouts: [],
    error: null,
    next_workout_in_cycle: 0,

    workingWeights: {
        squat: 60,
        bench_press: 60,
        overhead_press: 40,
        bench_press_12: 40,
        overhead_press_12: 30,
        deadlift: 60,
        barbell_row: 40,
        pullup: 0,
        seated_cable_row: 20,
        face_pull: 10,
        hammer_curl: 10,
        dumbbell_curl: 10,
        incline_dumbbell_press: 10,
        tricep_pushdown: 10,
        lateral_raise: 10,
        overhead_tricep_extension: 10,
        romanian_deadlift: 40,
        leg_press: 60,
        leg_curl: 20,
        calf_raise: 20
    },

    startingOneRepMaxes: [
        {
            name: 'Squat',
            weight: 100,
        },
        {
            name: 'Bench Press',
            weight: 100,
        },
        {
            name: 'Overhead Press',
            weight: 100,
        },
        {
            name: 'Deadlift',
            weight: 100,
        },
        {
            name: 'Barbell Row',
            weight: 100,
        },
    ]
}

export const workouts = (state = workoutsInitialState, action) => {
    switch(action.type){
        case LOG_WORKOUT:
            return {
                ...state,
                workouts: [
                    ...state.workouts,
                    action.workout
                ],
                next_workout_in_cycle: state.next_workout_in_cycle < 5 ? state.next_workout_in_cycle + 1 : 0, 
                workingWeights: {
                    ...getNewWorkingWeights(action.workout, state.workingWeights)
                }
            }
        case UPDATE_ONBOARDING_EXERCISE:
            const newState = state
            newState.startingOneRepMaxes[action.exercise_index].weight = action.weight
            return newState
        case STARTING_WEIGHTS_SET:
            return {
                ...state,
                workingWeights: {
                    ...state.workingWeights,
                    squat: customFloor(state.startingOneRepMaxes[0].weight * 0.7),
                    
                    bench_press: customFloor(state.startingOneRepMaxes[1].weight * 0.7),
                    bench_press_12: customFloor(state.startingOneRepMaxes[1].weight * 0.4),

                    overhead_press: customFloor(state.startingOneRepMaxes[2].weight * 0.7),
                    overhead_press_12: customFloor(state.startingOneRepMaxes[2].weight * 0.4),

                    deadlift: customFloor(state.startingOneRepMaxes[3].weight * 0.7),
                    barbell_row: customFloor(state.startingOneRepMaxes[4].weight * 0.7)
                }
            }
        default:
            return state;
    }
};

const currentWorkoutInitialState = {
    workoutInProgress: false,
    currentWorkout: {}
}

export const currentWorkout = (state = currentWorkoutInitialState, action) => {
    switch(action.type){
        case CREATE_NEW_WORKOUT:
            const newWorkout = workoutTemplates(action.day, action.workingWeights)
            const today = new Date();
            const workoutID = uuidv4();
            return {
                workoutInProgress: true, 
                currentWorkout: {
                    id: workoutID,
                    ...newWorkout,
                    date_added: today.getDate().toString() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear().toString()
                }
            }
        case UPDATE_SET:
            const newState = state
            newState.currentWorkout.exercises[action.exercise_index].sets[action.set_index].completed_reps = action.reps
            return newState
        case UPDATE_WORKING_WEIGHT:
            newState2 = state
            newState2.currentWorkout.exercises[action.exercise_index].weight = action.weight
            return newState2
        case LOG_WORKOUT:
        case WORKOUT_CANCEL:
            return currentWorkoutInitialState
        default:
            return state
    }
}

const timerInitialState = {
    active: false,
    reset: true,
    seconds: 0,
    minutes: 0
}

export const timer = (state = timerInitialState, action) => {
    switch(action.type){
        case TIMER_START:
            return {
                ...state,
                active: true,
                reset: false,
                minutes: state.active ? 0 : state.minutes,
                seconds: state.active ? 0 : state.seconds
            }
        case TIMER_STOP:
            return {
                ...state,
                active: false
            }
        case TIMER_RESET:
            return {
                ...state,
                active: false,
                reset: true,
                seconds: 0,
                minutes: 0
            }
        case TIMER_INCREMENT:
            return (state.seconds >= 59) ? {
                ...state,
                seconds: 0,
                minutes: state.minutes + 1
            } : {
                ...state,
                seconds: state.seconds + 1
            }
        default:
            return state
    }
}

const messagesInitialState = {
    currentMessage: "To begin, perform your first set, then tap the first circle to log your reps."
}

export const messages = (state = messagesInitialState, action) => {
    switch (action.type){
        case MESSAGE_UPDATE:
            return {
                currentMessage: action.message
            }
        case CREATE_NEW_WORKOUT:
            return messagesInitialState
        default:
            return state
    }
}

const userInitialState = {
    onboarding_completed: false,
}

export const user = (state = userInitialState, action) => {
    switch (action.type){
        case STARTING_WEIGHTS_SET:
            return {
                ...state,
                onboarding_completed: true
            }
        default:
            return state
    }
}