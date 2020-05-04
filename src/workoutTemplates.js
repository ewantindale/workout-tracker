const allRepsWereCompleted = (sets) => {
    for (set of sets){
        if (set.completed_reps < set.goal_reps){
            return false
        }
    }
    return true
}

const convertNameToVariableName = (name) => {
    return name.toLowerCase().replace(/ /g, '_');
}

export const getNewWorkingWeights = (workout, workingWeights) => {
    for (exercise of workout.exercises){
        if (allRepsWereCompleted(exercise.sets)){
            workingWeights[convertNameToVariableName(exercise.name)] = exercise.weight + 2.5
        } else {
            workingWeights[convertNameToVariableName(exercise.name)] = exercise.weight
        }
    }
    console.log('getNewWorkingWeights returning')
    console.log(workingWeights)
    return workingWeights
}

// TODO: Sort out this mess of a function
export const workoutTemplates = (day, workingWeights) => {
    console.log('workoutTemplates was called with the parameters day: ' + day + ' and workingWeights: ' + workingWeights)
    
    if(day === 0){ // PUSH DAY (A)
        return {
            name: 'Push Day (A)',
            exercises:[
                {
                    name: 'Bench Press',
                    weight: workingWeights.bench_press,
                    sets:   [
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                    ]
                },
                {
                    name: 'Overhead Press 12',
                    weight: workingWeights.overhead_press_12,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Incline Dumbbell Press',
                    weight: workingWeights.incline_dumbbell_press,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Tricep Pushdown',
                    weight: workingWeights.tricep_pushdown,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Overhead Tricep Extension',
                    weight: workingWeights.overhead_tricep_extension,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                { 
                    name: 'Lateral Raise',
                    weight: workingWeights.lateral_raise,
                    sets:   [
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                    ]
                },

            ]
        }
    } else if(day === 1){ // PULL DAY (A)
        return {
            name: 'Pull Day (A)',
            exercises:[
                {
                    name: 'Deadlift',
                    weight: workingWeights.deadlift,
                    sets:   [
                        { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                    ]
                },
                {  
                    name: 'Pullup',
                    weight: workingWeights.pullup,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Seated Cable Row',
                    weight: workingWeights.seated_cable_row,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {  
                    name: 'Face Pull',
                    weight: workingWeights.face_pull,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {   
                    name: 'Hammer Curl',
                    weight: workingWeights.hammer_curl,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                { 
                    name: 'Dumbbell Curl',
                    weight: workingWeights.dumbbell_curl,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
            ]
        }
    } else if(day === 2){ // LEG DAY (A)
        return {
            name: 'Leg Day (A)',
            exercises:[
                {
                    name: 'Squat',
                    weight: workingWeights.squat,
                    sets:   [
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                    ]
                },
                {                    
                    name: 'Romanian Deadlift',
                    weight: workingWeights.romanian_deadlift,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {                    
                    name: 'Leg Press',
                    weight: workingWeights.leg_press,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                { 
                    name: 'Leg Curl',
                    weight: workingWeights.leg_curl,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Calf Raise',
                    weight: workingWeights.calf_raise,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                }
            ]
        }
    } else if(day === 3){ // PUSH DAY (B)
        return {
            name: 'Push Day (B)',
            exercises:[
                {
                    name: 'Overhead Press',
                    weight: workingWeights.overhead_press,
                    sets:   [
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                    ]
                },
                {
                    name: 'Bench Press 12',
                    weight: workingWeights.bench_press_12,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Incline Dumbbell Press',
                    weight: workingWeights.incline_dumbbell_press,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Tricep Pushdown',
                    weight: workingWeights.tricep_pushdown,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Overhead Tricep Extension',
                    weight: workingWeights.overhead_tricep_extension,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Lateral Raise',
                    weight: workingWeights.lateral_raise,
                    sets:   [
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                        { goal_reps: 20, completed_reps: null, amrap: false },
                    ]
                },

            ]
        }
    } else if(day === 4){ // PULL DAY (B)
        return {
            name: 'Pull Day (B)',
            exercises:[
                {
                    name: 'Barbell Row',
                    weight: workingWeights.barbell_row,
                    sets:   [
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                    ]
                },
                {                    
                    name: 'Pullup',
                    weight: workingWeights.pullup,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {                    
                    name: 'Seated Cable Row',
                    weight: workingWeights.seated_cable_row,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {                    
                    name: 'Face Pull',
                    weight: workingWeights.face_pull,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {                   
                    name: 'Hammer Curl',
                    weight: workingWeights.hammer_curl,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Dumbbell Curl',
                    weight: workingWeights.dumbbell_curl,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
            ]
        }
    } else if(day === 5){ // LEG DAY (B)
        return {
            name: 'Leg Day (B)',
            exercises:[
                {
                    name: 'Squat',
                    weight: workingWeights.squat,
                    sets:   [
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: false },
                        { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                    ]
                },
                {
                    name: 'Romanian Deadlift',
                    weight: workingWeights.romanian_deadlift,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {
                    name: 'Leg Press',
                    weight: workingWeights.leg_press,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {  
                    name: 'Leg Curl',
                    weight: workingWeights.leg_curl,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                },
                {    
                    name: 'Calf Raise',
                    weight: workingWeights.calf_raise,
                    sets:   [
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                        { goal_reps: 12, completed_reps: null, amrap: false },
                    ]
                }
            ]
        }
    }
}