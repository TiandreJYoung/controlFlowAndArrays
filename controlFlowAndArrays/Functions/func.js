console.log

console.log (one());

//function declaration
function on (){
    return 'one'
}
one (); //calling a function 

//function expression
const Dre = {
    name: 'Dre',
    age: '24',
    Occupation : 'Software Engineer',
    overTwentyOne : true
}
const increaseAge = (person) => {
    //dot notation
    person.age +=1;
    console.log (`Boy you getting old ${person.age}`);
}
 increaseAge(Dre);

//circle

const circle = (radius)  => {
    let pi =3.14;
    let results = ( radius*radius)*pi;
    console.log ('the area of ')
}
 circle(12);

//planet
const planet = (earth, mars) => {
    if (planet === "earth" || planet === "mars"){
        return true;
    } else {
        return false;
    }

}
planet(earth);
planet(mars);
planet(saturn);

//




