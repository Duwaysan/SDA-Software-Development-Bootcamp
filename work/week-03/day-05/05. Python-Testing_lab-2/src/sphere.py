import math
from src.circle import Circle


class Sphere(Circle):

    def __init__(self, radius=0):
        super().__init__(radius)
        pass

    def __str__(self):
        return f'Sphere with radius: {self.radius}'
    
    
    def __repr__(self):
        return f"Sphere(radius={self.radius})"

    @property
    def volume(self):
        return 4/3 * math.pi * (self.radius**3)

    @property
    def area(self):
        return 4 * math.pi * (self.radius**2)
    
    
    pass
