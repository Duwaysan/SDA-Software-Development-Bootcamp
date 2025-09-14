import math


class Circle:
    
    def __init__(self,radius=0):
        self.radius = radius
        pass
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter/2)


    @property
    def diameter(self):
        return self.radius*2
    
    @diameter.setter
    def diameter(self, diameter):
        self.radius = diameter/2

    @property
    def area(self):
        return math.pi*(self.radius**2)
    
    def __str__(self):
        return f'Circle with radius: {self.radius}'

    def __repr__(self):
        return f"Circle(radius={self.radius})"
    
    def __add__(self,another_cir):
        return self.__class__(self.radius+another_cir.radius)
    
    def __mul__(self,num):
        if isinstance(num, (int, float)):
            return self.__class__(self.radius * num)
        return NotImplemented

    def __eq__(self, c2): return self.radius == c2.radius
    def __lt__(self, c2): return self.radius < c2.radius
    def __le__(self, c2): return self.radius <= c2.radius
    def __gt__(self, c2): return self.radius > c2.radius
    def __ge__(self, c2): return self.radius >= c2.radius
    #or we can import @total_ordering to write 1 comparison operation and it automatically import the rest
    pass




c1 = Circle(2)         
# # c.diameter = 2   
# c.area = 12  
c2 = Circle(4)
c3 = c1 + c2
print(c3.radius)
# print(c.diameter)
# print(c.diameter)     
# print(c.radius)  
# print(c.area)
# print(c.__repr__())
