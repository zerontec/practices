// Haga que la función FindIntersection( strArr ) lea la matriz de cadenas almacenada en strArr que contendrá 2 elementos: el primer elemento representará una lista de números separados por comas ordenados en orden ascendente,
// el segundo elemento representará una segunda lista de números separados por comas números (también ordenados). Su objetivo es devolver una cadena separada por comas que contenga los números que aparecen en los elementos de strArr en orden. Si no hay intersección, devuelve la cadena false .
// Ejemplos
// Entrada: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Salida: 1,4,13
// Entrada: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Salida: 1,9,10
// Etiquetas

function FindIntersection(strArr) {
  // code goes here

  let arr1 = strArr[0].split(",");
  let arr2 = strArr[1].split(",");

  const resp = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) != -1) {
      resp.push(arr1[i]);
    }
  }
  if (resp.length === 0) {
    return false;
  }
  return resp.join(",");
}

// keep this function call here
console.log(FindIntersection(readline()));

/// other resp
function FindIntersection(strArr) {
  const intersection = [];
  const arr1 = strArr[0].split(", ");
  const arr2 = strArr[1].split(", ");

  arr1.map((item) => {
    if (arr2.includes(item)) {
      intersection.push(item);
    }
  });

  return intersection.join(",");
}

// keep this function call here
console.log(FindIntersection(readline()));

/// con Set
function FindIntersection(strArr) {
  // code goes here
  let arrA = new Set(strArr[0].split(","));
  let arrB = new Set(strArr[1].split(","));

  let _intersection = new Set();
  for (let elem of arrB) {
    if (arrA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

// keep this function call here
console.log(FindIntersection(readline()));
