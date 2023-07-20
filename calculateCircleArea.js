// The area of a circle with a radius of (Radius) is (Area).

const radius = parseFloat(process.argv[2]);

if (isNaN(radius)) {
    console.log("Invalid input! Please enter a valid radius value.");
} else {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area of a circle with a radius of ${radius} is ${area.toFixed(2)}`);
}