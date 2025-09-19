import math
import unittest
from src import circle, sphere


class TestCircle(unittest.TestCase):

    def setUp(self):
        print("Setting up!")
        self.CONST_TEST_RADIUS = 5
        self.CONST_TEST_DIAMETER = 8

    def tearDown(self):
        print("Tearing down!\n")

    def test_circle_creation(self):
        circle_obj = circle.Circle(5)
        self.assertGreater(circle_obj.radius,0)
        pass

    def test_circle_property_diameter(self):
        pass

    def test_circle_set_diameter(self):
        circle_obj = circle.Circle(5)
        self.assertEqual(circle_obj.diameter/2, circle_obj.radius)
        pass

    def test_circle_area(self):
        circle_obj = circle.Circle(45)
        self.assertEqual(circle_obj.area,math.pi*(circle_obj.radius**2))
        pass

    def test_cls_method(self):
        circle_obj = circle.Circle.from_diameter(10)
        self.assertIsInstance(circle_obj,circle.Circle)
        pass

    def test_circle_str(self):
        circle_obj = circle.Circle(5)
        self.assertEqual(circle_obj.__str__(),f'Circle with radius: {circle_obj.radius}')
        pass

    def test_circle_repr(self):
        circle_obj = circle.Circle(5)
        self.assertEqual(circle_obj.__repr__(),f"Circle(radius={circle_obj.radius})")
        pass

    def test_circle_add(self):
        c1 = circle.Circle(2)
        c2 = circle.Circle(4)
        result_c3 = c1+c2
        self.assertEqual(c1.radius+c2.radius,result_c3.radius)
        pass

    def test_circle_multi(self):
        c2 = circle.Circle(4)
        num = 3
        result_c3 = c2*num
        self.assertEqual(num*c2.radius,result_c3.radius)
        pass

    def test_comparison_operators(self):
        c1, c2 = circle.Circle(2), circle.Circle(4)
        self.assertFalse(c1.radius > c2.radius)
        self.assertTrue(c1.radius < c2.radius)
        self.assertFalse(c1.radius == c2.radius)

        c3 = circle.Circle(4)
        self.assertTrue(c2.radius == c3.radius)
        self.assertFalse(c1.radius == c3.radius)
        circles = [circle.Circle(6), circle.Circle(7), circle.Circle(8), circle.Circle(4), circle.Circle(0),
                   circle.Circle(2), circle.Circle(3), circle.Circle(5), circle.Circle(9), circle.Circle(1)]
        circles.sort()
        self.assertEqual([c.radius for c in circles], list(range(10)))
        pass

    def test_sphere_volume(self):
        s1 = sphere.Sphere.from_diameter(8)
        self.assertEqual(s1.volume, 4/3 * math.pi * ((s1.radius)**3))
        pass

    def test_sphere_area(self):
        s1 = sphere.Sphere.from_diameter(8)
        self.assertEqual(s1.area, 4 * math.pi * (s1.radius**2))
        pass

    def test_sphere_add(self):
        s1 = sphere.Sphere(2)
        s2 = sphere.Sphere(4)
        result_s3 = s1+s2
        self.assertEqual(s1.radius+s2.radius,result_s3.radius)
        self.assertIsInstance(result_s3,sphere.Sphere)
        pass

    def test_sphere_comparison_operators(self):
        s1, s2 = sphere.Sphere(2), sphere.Sphere(4)
        self.assertFalse(s1.radius > s2.radius)
        self.assertTrue(s1.radius < s2.radius)
        self.assertFalse(s1.radius == s2.radius)

        s3 = sphere.Sphere(4)
        self.assertTrue(s2.radius == s3.radius)
        self.assertFalse(s1.radius == s3.radius)
        spheres = [sphere.Sphere(6), sphere.Sphere(7), sphere.Sphere(8), sphere.Sphere(4), sphere.Sphere(0),
                   sphere.Sphere(2), sphere.Sphere(3), sphere.Sphere(5), sphere.Sphere(9), sphere.Sphere(1)]
        spheres.sort()
        self.assertEqual([s.radius for s in spheres], list(range(10)))
        pass


if __name__ == "__main__":
    unittest.main()
