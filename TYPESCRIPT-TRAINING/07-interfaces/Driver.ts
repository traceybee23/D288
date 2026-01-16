import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//declare an array for coaches... initally empty
let theCoaches: Coach[] = [];

//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

//loop through the coaches and print their daily workouts
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
