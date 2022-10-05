// Retornar array sin elementos repetdios 

const unique = (array) => {

const newArray = [];

for (let i = 0; i < array.length; i ++){

const ele = array[i];
if(!newArray.includes(ele)){

newArray.push(ele);

}

}

return newArray


}

// BIG O  es temporal  O(n2) espacial O(n) 


//fucnion Factorizada 

const uniqueA = (array) => {

const onlyUniques = new Set();

for(let i = 0; i< array.length; i ++){

const ele= array[i];
onlyUniques.add(ele);

}
return Array.from(onlyUniques)



}
// BIG O  es temporal  O(n) espacial O(n) 

// para prbar eficiencia de las funciones anterirore

const randomArray= [];
for(let i = 0; i < 100; i ++){

const randomNumber = Math.floor(Math.random() *100);
randomArray.push(randomNumber);


}

const startSlow = new Date();
console.log(unique(randomArray));
const endSlow = new Date();
console.log(`alow n*2 finished ${endSlow - startSlow} es`)


const startFast = new Date();
console.log(uniqueA(randomArray));
const endFast = new Date();
console.log(`Fast n finished ${endFast- startFast} es`)