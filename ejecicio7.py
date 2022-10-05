
class Alumno:
    nombre = None
    nota = 0

    def __init__(self, nombre):
        
        self.nombre= nombre
        self.nota= 9
        if self.nota >= 6:
            print('Aprobado')
        else:
            print('Reprobado')


estudiante = Alumno('Leoberto')

print(estudiante.nota)
print(estudiante.nombre)



