var sportsOne = ["soccer", "baseball", "football", "swimming"];
// for (let i=0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }
// Let's use the simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == "football") {
        console.log(sport + " <--- This is my favorite sport!");
    }
    else {
        console.log(sport);
    }
}
