// Circle Modular File

function circleArea(radius){
    let cArea = Math.PI * Math.pow(radius,2);
    console.log("\n" + "Circle Area: " + cArea.toFixed(2));
} 

function circleCircumference(radius){
    let cCircum = 2 * Math.PI * radius;
    console.log("Circle Circum: " + cCircum.toFixed(2) + "\n"); 
} 

export {
    circleArea,
    circleCircumference,
}