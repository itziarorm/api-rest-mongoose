const Workout = require('../models/workoutModel');

const getAllWorkouts = async () => {
    try {
        
        const workouts = await Workout.find();
        console.log(workouts);
        return workouts;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getAllWorkouts
}