# Defining a class
class Animal:
    def __init__(self, color, name, height):
        """Initialization of attributes"""
        self.color =  color
        self.name = name
        self.height = height
        
    def __str__(self) -> str:
        return self.name + " is " + self.height
    
    def sound(self, noise):
        """A method that returns the sound of the animal"""
        return f'{self.name} {noise}'


# defining an object (An object is an instance of a class)
dog = Animal('red', 'Bingo', '1ft')
result = dog.sound('Barks')
print(dog)
print(result)

print()

dog_1 = Animal('white', 'Jack', '1.5ft')
result = dog_1.sound('Barks')
print(dog_1)
print(result)
