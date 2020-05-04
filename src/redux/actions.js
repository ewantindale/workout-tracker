export const CREATE_NEW_WORKOUT = 'CREATE_NEW_WORKOUT'
export const UPDATE_SET = 'UPDATE_SET'
export const LOG_WORKOUT = 'LOG_WORKOUT'
export const WORKOUT_CANCEL = 'WORKOUT_CANCEL'
export const UPDATE_WORKING_WEIGHT = 'UPDATE_WORKING_WEIGHT'
export const TIMER_START = 'TIMER_START'
export const TIMER_STOP = 'TIMER_STOP'
export const TIMER_RESET = 'TIMER_RESET'
export const TIMER_INCREMENT = 'TIMER_INCREMENT'
export const MESSAGE_UPDATE = 'MESSAGE_UPDATE'
export const STARTING_WEIGHTS_SET = 'STARTING_WEIGHTS_SET'
export const UPDATE_ONBOARDING_EXERCISE = 'UPDATE_ONBOARDING_EXERCISE'

export const createNewWorkout = (day, workingWeights) => ({
    type: CREATE_NEW_WORKOUT,
    day,
    workingWeights
});

export const updateSet = (reps, set_index, exercise_index) => ({
    type: UPDATE_SET,
    reps,
    set_index,
    exercise_index
});

export const workoutCancel = () => ({
    type: WORKOUT_CANCEL
});

export const logWorkout = (workout) => ({
    type: LOG_WORKOUT,
    workout
});

export const updateWorkingWeight = (weight, exercise_index) => ({
    type: UPDATE_WORKING_WEIGHT,
    weight,
    exercise_index
});

export const timerStart = () => ({
    type: TIMER_START
});

export const timerReset = () => ({
    type: TIMER_RESET
});

export const messageUpdate = (message) => ({
    type: MESSAGE_UPDATE,
    message
})

export const startingWeightsSet = () => ({
    type: STARTING_WEIGHTS_SET
})

export const updateOnboardingExercise = (weight, exercise_index) => ({
    type: UPDATE_ONBOARDING_EXERCISE,
    weight,
    exercise_index
});