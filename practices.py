
import math

# Detrminar un año biciesto  
# 
def bicesYear(year):
     messagueYes= 'Es Un Año Biciesto'
     messagueNo=  ' No es un Año biciesto'
     if year % 400 == 0:
         return print( str(year)+messagueYes)
     elif year % 4 == 0 & year % 100 != 0:
         return print( str(year)+ messagueYes)
     else:
         return print(str(year)+messagueNo)
         
             
   
     

bicesYear(2001)


# Calculadora IMC 

# peso= float(input('Ingrese su peso en Kilogramos : '))

# estatura =  float(input('Ingrse su estatura en Metros: '))

# IMC = round(peso/math.pow(estatura, 2), 1)
# print('Su IMC es ' + str(IMC))







