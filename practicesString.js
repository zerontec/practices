//verificar si un string contine lo mismo caracteres de otro string sin importar su orden
// es decir ordenando uno de ellos se obtiene la misma palabra de lo contrario es false

function compareChart(string1, string2) {
  if (string1.length > string2.length || string1.length < string2.length )
    return false;
  return new Set(string1).size === new Set(string1 + string2).size;
}

string1 = "hells";
string2 = "hellos";

compareChart(string1, string2);


//Suma recursion

const sum = (array) => {

if(array.length === 0) return 0;
const rest = array.slice(1);

return array[0] + sum(rest)


}
console.log(sum([1,5,7,-3]))

//tIME O(n+n) = O(n2)
//space = O(n)



const sumA = (array) => {
  return _sum(array, 0);
};

const _sum = (array, idx) => {
  if (idx === array.length) return 0;
  return array[idx] + _sum(array, idx + 1);
};

//time O(n)
//space O(n)