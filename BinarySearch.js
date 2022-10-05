//la busqueda binaria funciona con una colleccion de cosas 

// TRack left and right indices



// target 7 

//find the mid    (0+8)/ 2 = 4  

 //   0 1  2  3  4  5  6  7  8  
// 2  7  8  9 10 13 17 19  9
 

 //compare target to the mid

 // mid = 10 > target = 7

 // repeat steps 1 -3   habian quedado 4

   //  0 1  2  3   
 // 2  7  8  9

// (0 + 3) / 2 = 1.5

// 7 = 7 


// stop search when left >= Right


let nums = [2,7,8,9,10,13,17,17,21]

function binarySearch(array, target){

    let left = 0;
    let right = array.length -1;


while(left < right){

let mid = Math.floor(left + right)/ 2;

if(target === array[mid]){
    return mid;
}else if(target < array[mid]){

right = mid -1; // ya no necesitamos la parte actual right , right mid - 1

}else {

left = mid+1 // si es mayor el target nos quedamos con la mitad de arriba osea left es mid +1

}

}

return false 




}


// Time complexity  O (long(n))    space complexity O(1)

//implementacion recursiva 

function binarySearchR(array, target){
return binarySearchHelper(array, target, left, right)

}


function binarySearchHelper(array, target, left, right){

if(left > right){

    return false
}

let mid = Math.floor((left + right)/ 2);
if(target === array[mid]){

return mid

}else if(target < array[mid]){

return binarySearchHelper(array, target, left, mid-1 ) // nuestra nueva derecha mid-1

}else{

    return binarySearchHelper(array, target, mid +1, right) // nuestra nueva izquierda
}

}

//time complexity O(long) spce complexity O(long)