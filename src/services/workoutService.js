const Workout = require('../database/Workout');

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
}
const getOneWorkout = () => {
    const oneWorkout = Workout.getOneWorkout();
    return oneWorkout;
}
const createNewWorkout = () => {

}
const updateOneWorkout = () => {

}
const deleteOneWorkout = () => {

}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
