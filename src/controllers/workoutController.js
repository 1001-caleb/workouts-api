const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const AllWorkouts = workoutService.getAllWorkouts();
    res.send({status: 'Ok', data: AllWorkouts});
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send({status: 'Ok', data: workout});
}

const createNewWorkout = (req, res) => {
    req.body
    const createdWorkout = workoutService.createNewWorkout();
    res.send(`create workout ${req.params.workoutId}`);
}

const updateOneWorkout = (req, res) => {
    req.body
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send(`update workout ${req.params.workoutId}`);
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`delete workout ${req.params.workoutId}`);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}

