
class Animal:


    def __init__(self, name, color,stuff_in_belly = [], position = 0):
        self.name = name
        self.color = color
        self.stuff_in_belly = stuff_in_belly
        self.position = position
        pass

    def talk(self,sound=None):
        if not sound:
            print(f"{self.name} has nothing to say right now.")
        else:
            print(f"{self.name} says { sound }")
        pass

    def walk(self, walk_increment):
        self.position += walk_increment
        print(f"{self.name} walked {walk_increment} steps and is now at position {self.position}.")
        pass

    def run(self, run_increment):
        self.position += run_increment
        print(f"{self.name} ran {run_increment}steps and is now at position {self.position}!")
        pass
    
    def is_hungry(self):
        return  len(self.stuff_in_belly)<4 
    
    def eat(self,food):
        if self.is_hungry():
            self.stuff_in_belly.append(food) 
            print(f"{self.name} ate {food}. Yum!")
        else:
            print(f"{self.name} doesn't want to eat {food} right now.")

class Dog(Animal):
    def talk(self,sound="Bark Bark!"):
        if sound  != "Bark Bark!":
            super().talk(sound)
        else: super().talk(sound)
        pass

    def fetch(self, item):
        print(f"{self.name} brought {item} and is eager for your approval.")
        pass

    pass

class Sheep(Animal):
    def __init__(self, name, color, stuff_in_belly=[], position=0, is_shorn = False):
        super().__init__(name, color, stuff_in_belly=[], position=0)
        self.is_shorn = is_shorn
        pass

    def talk(self,sound="Baaah Baah!"):
        if sound  != "Baaah Baah!":
            super().talk(sound)
        else: super().talk(sound)
        pass
    
    def shear(self):
        if not self.is_shorn:
            print(f"{ self.name } is now naked, and you have a basket of wool.")
        else: print(f"{self.name} has already been shorn!!")
    pass

class Pig(Animal): 
    def __init__(self, name, color, stuff_in_belly=[], position=0, filthiness=0):
        super().__init__(name, color, stuff_in_belly, position)
        self.filthiness = filthiness
        pass

    def talk(self,sound="Oink Oink!"):
        if sound  != "Oink Oink!":
            super().talk(sound)
        else: super().talk(sound)
        pass
    
    def wallow(self): 
        self.filthiness += 1
        print(f"{self.name} rolled in the muck and is now at filthiness level {self.filthiness}.")
        if self.filthiness>= 5:
            print(f"{self.name} is already as dirty as a li'l piggy could possible be!")
        pass

    pass
    
sparky = Dog('Sparky', 'brown', ["dog food", "McDonald's wrapper"])
dog = Dog("Blitzer", "yellow")

# Output the dog's attributes
print(f"Our dog's name is {dog.name}. He has {dog.color} fur.")

# Invoke some behavior
dog.talk()
dog.talk('whimper whimper')
dog.fetch('a stick')

# Walk the dog
dog.walk(4)

# Run the dog
dog.run(16)

# Feed the dog
dog.eat('pie')
dog.eat('dead woodchuck')
dog.eat('pretzels')

# Is the dog hungry?
if dog.is_hungry:
    print("He's still hungry!")
else:
    print("He's stuffed!")

# Feed the dog some more
dog.eat('bugs')
dog.eat('dog food')

print("===================")

# Create a sheep
sheep = Sheep("Shaun", "white")

# Test out some Sheep moves
sheep.talk
sheep.shear()
sheep.run(12)

print("===================")

# Create a pig
pig = Pig("Carl", "pink")

# Have your pig act very piggy
pig.wallow()
pig.talk()
pig.wallow()
pig.wallow()
pig.talk('I am so happy!')
pig.wallow()
pig.wallow()
pig.wallow()

