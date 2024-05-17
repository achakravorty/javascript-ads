// Map the Debris
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    

    return arr.map(({name, avgAlt}) => {
        const a = (Math.pow(earthRadius + avgAlt, 3));
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt( a / GM));
        return {name, orbitalPeriod};
    });
}
  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));