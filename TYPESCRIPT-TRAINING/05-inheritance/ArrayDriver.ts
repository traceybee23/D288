import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

//declare an array of shapes ... initally empty
let theShapes: Shape[] = [];

//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

//loop through the array and print info about each shape
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
