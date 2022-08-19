const DB = require('./db.json');

const getAllWorkouts = ( ) =>{
   const workouts = DB.workouts;
   return workouts;
}

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find(workout => workout.id === workoutId);
    return workout;
}

module.exports = {
    getAllWorkouts,
    getOneWorkout
}