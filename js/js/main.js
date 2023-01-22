function length() {
    let ll = "length Count";
    alert(ll.length);
}
let STringObject = "Apple, Banana, Kiwi";
console.log(STringObject.slice(7, 13));

let str = "i love joruina";
let change = str.replace('joruina', 'tamima');
console.log(change);
//Html Template Literal
let literal = `hi it's sohel`;
console.log(literal);
//Number
let num = 10;
let y = "20";
console.log(num + y);

let numeric = "100";
let plus = "10";
console.log(numeric / plus);

//array
const car = [
    "car",
    'volbo',
    'ami'
];
car[4] = "sohel";
console.log(car[car.length - 1]);

//Array Method
const sohelVai = ['sohel', 'vai', 'kemon', 'acho', 'koi'];
console.log(sohelVai.join(" * "));

let addKora = "jog koro mia ";
let hoiseADd = "yes";
console.log(addKora.concat(hoiseADd));

const fruits = ['banana', 'mango', 'orange'];
console.log(fruits.push('sohel'));

let sohelvai = {
    name: "sohel",
    age: 35
}
let sohel = sohelvai.length;
console.log(sohel);
