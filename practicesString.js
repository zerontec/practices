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
