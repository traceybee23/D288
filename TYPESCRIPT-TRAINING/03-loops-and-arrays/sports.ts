let sportsOne: string[] = ["soccer", "baseball", "football", "swimming"];

// for (let i=0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }

// Let's use the simplified for loop

for (const sport of sportsOne) {

    if (sport == "football") {
        console.log(sport + " <--- This is my favorite sport!");
    } else {
        console.log(sport);
    }
}
