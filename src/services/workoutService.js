const Workout = require('../database/Workout');

const getAllWorkouts = async () => {
    try {
        const allWorkouts = Workout.getAllWorkouts();
    
        return allWorkouts;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getAllWorkouts
}