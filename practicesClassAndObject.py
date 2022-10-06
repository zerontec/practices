from turtle import color
from abc import ABC, abstractmethod 


class Dino:
    _encendido = True  #propiedad
    
    def enciende(self):
        self._encendido = True

    def apaga(self):
        self._encendido = False

    def isEncendido(self):
        return self._encendido    


#crear una instancia significa crear un objeto 
# self hago referencia a una variabler del  metodo de mi clase 


d = Dino()
d.apaga()
d.enciende()
print(d.apaga())

d2 = Dino()
d2.isEncendido()
print(d2.isEncendido())


# Clases Estaticas 

# en Python todo es public cuanqlquier metodo y funcion de la clase se puede modificar 
# convension si una propiedad o metodo lleva un guion bajo no deberias modificarla _metodo

class Estatica:
    numero = 1

    def incrementa():
        Estatica.numero += 1



#### Clases estaticas #####
Estatica.incrementa()

print(Estatica.numero)

class Opciones:
   ServidorSeguro = true
   Reiniciar= false

if Opciones.Reiniciar:
     


# #################### herencia ######################

    class Juguete:
        _encendido = True

    def __init__(self) :
       print('estoy en la clase juguete en su constructor')

    def encendido(self):
        self._encendido = True

    def apaga(self):
        self._encendido = False

    def isEncendido(self):
        return self._encendido 



# hereda de  la clase Juguete
class Potato(Juguete):
 
    def quitarOreja(self):
        pass
    
    def ponerOreja(self):
        pass


p = Potato()

p.encendido
# ##################-----------------------------------------------#####################


# ############################### Constructor ############################################
       
class DinoA(Juguete):
    color = None
    nombre = None
    
    def __init__(self, nombre):   # declaro un constructor con _iniT_
       print ('Estoy en el constructor', nombre)
       self.color= 'Verde',
       self.nombre =nombre
    #    Juguete.__init__(self, nombre)  #opcion para llamar al constructor de la clase base 
    super().__init__()  # determina cual es la clase padre lleva implicito el self
    
    def __del__(self): # Destructor 
        print('Estoy en el destructor de la clase ', self.__class__)

     



p = Potato()
p.encendido()

c = DinoA('Leoberto')
c.quitarOreja
# print(dir(c))

print(c.color)
print(c.nombre)
# ##################################--------------------------##########################################

# ############################  clases abstractas  #################


class Animal(ABC):
   @abstractmethod
   def sonido(self):
    pass
def diHola():
    print('hi')


class Perro(Animal):
    def sonido(self):
        print('Guao')
    def diHola(self):
        print('Hola')    
   

class Gato(Animal):
    def sonido(self):
        print('Miau')


p = Perro()

p.sonido
p.diHola

g = Gato()
g.sonido


# # a  = Animal()  # no podemos instanciar una clase abstracta tenemos que drivarla sirve para definir 
#                  # un conjunto de las clases abstarcta 
#                  # tambien pueden tener metodos no abstras


#                  ###################-----------Relaciones is has   has A----------##############

# #Las Relaciones is Has se llaman Herencia  ejemplo perro es un animal derivan una de otra                 
# # has A contiene es decir composicion es decir una clase esta compuesta de otras clases 


class Motor:
    pass

class Ventanas:
    pass

class Carroceria:
    ventanas = Ventanas

class Coche:
    motor = Motor()
    carroceria = Carroceria()


v = Coche()

print(v.carroceria.ventanas)



#PRACTICES RECURSION 
def suma(list):
    return sumaB(list, 0)

def sumaB(list, idx):
    if idx == len(list): return 0
    return list[idx]  +  sumaB(list, idx + 1)

print(suma([1,5,7,-3]))