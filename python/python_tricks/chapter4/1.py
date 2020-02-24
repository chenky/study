'''
使用__str__和__repr__双下划线方法能够自行控制类中的字符串转换。
__str__的结果应该是可读的。__repr__的结果应该是无歧义的。
总是为类添加__repr__。__str__默认情况下会调用__repr__。
在Python 2中使用__unicode__而不是__str__。
'''

# 定义自己的异常类
'''
定义自己的异常类型能让代码清楚地表达出自己的意图，并易于调试。
要从Python内置的Exception类或特定的异常类（如ValueError或KeyError）派生出自定义异常。
可以使用继承来根据逻辑对异常分组，组成层次结构。
'''

# 克隆对象
# python内置的可变容器，如列表，字典，集合，调用对应的工厂函数即可完成复制(浅复制) 
# same as copy.copy()函数会创建对象的浅副本
'''
new_list = list(original_list)
new_dict = dict(original_dict)
new_set = set(original_set)
'''

# from copy import deepcopy

# xs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# zs = deepcopy(xs)
# xs[1][0] = 'X'
# print(xs)
# print(zs)


# class Point:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

#     def __repr__(self):
#         return f'Point({self.x!r}, {self.y!r})'

# print(Point(1,2))

'''
创建的浅副本不会克隆子对象，因此副本和原对象并不完全独立。
对象的深副本将递归克隆子对象。副本完全独立于原对象，但创建深副本的速度较慢。
使用copy模块可以复制任意对象（包括自定义类）。
'''

# 抽象基类（abstract base class，ABC）用来确保派生类实现了基类中的特定方法

# class Base:
#   def foo(self):
#     raise NotImplementedError()
#   def bar(self):
#     raise NotImplementedError()

# class Concrete(Base):
#   def foo(self):
#     return 'foo() called'

# b1 = Base()
# b1.foo()

# c1 = Concrete()
# print(c1.foo())
# c1.bar()

# from abc import ABCMeta, abstractmethod

# class Base(metaclass=ABCMeta):
#   @abstractmethod
#   def foo(self):
#     pass
#   @abstractmethod
#   def bar(self):
#     pass

# class Concrete(Base):
#   def foo():
#     return "foo() called"

# assert issubclass(Concrete, Base)

# c1 = Concrete()

'''
抽象基类（ABC）能在派生类实例化时检查其是否实现了基类中的某些特定方法。
使用ABC可以帮助避免bug并使类层次易于理解和维护。
'''

# 元组只能通过索引访问
# 顺序不同，哪怕数量和值都相同也会出错

# a=[1,2]
# b=[2,1]
# print(a==b)
# print(a is b)

# from collections import namedtuple

# Car = namedtuple("Car",['color', 'mileage'])
# my_car = Car('red',3000)
# print(my_car.color)
# print(my_car.mileage)
# color,mileage = my_car
# print(color,'\n',mileage)
# print(*my_car)

# namedtuple适合在Python中以节省内存的方式快速手动定义一个不可变的类。

# class Dog:
#   num_leg=4

#   def __init__(self, name):
#     self.name = name

# jack_dog = Dog('jack')
# lily_dog = Dog('lily')

# print(jack_dog.name,lily_dog.name,jack_dog.num_leg,lily_dog.num_leg,Dog.num_leg)

# class CountedObject:
#   num_instances = 0
#   def __init__(self):
#     self.__class__.num_instances+=1

'''
类变量用于类的所有实例之间共享数据。类变量属于一个类，在类的所有实例中共享，而不是属于某个特定的实例。
实例变量是特定于每个实例的数据，属于单个对象实例，不与类的其他实例共享。每个实例变量都针对特定实例单独存储了一份。
因为类变量可以被同名的实例变量“遮盖”，所以很容易（意外地）由于覆盖类变量而引入bug和奇怪的行为。
'''

# class MyClass:
#   def method(self):
#     return 'instance method called', self
#   @classmethod
#   def classmethod(cls):
#     return 'class method called', cls
#   @staticmethod
#   def staticmethod():
#     return 'static method called'

# obj = MyClass()
# print(obj.method())
# print(obj.classmethod())

# 之前已经介绍了，静态方法不能访问类或实例的状态，因为静态方法不会接受cls或self参数。这是一个很大的局限性，但也很好地表明了静态方法与类的其他所有内容都无关。
# import math

# class Pizza:
#   def __init__(self, radius, ingredients):
#     self.radius = radius
#     self.ingredients = ingredients
#   def __repr__(self):
#       return (f'Pizza({self.radius!r}, '
#               f'{self.ingredients!r})')
#   def area(self):
#     return self.circle_area(self.radius)

#   @staticmethod
#   def circle_area(r):
#     return r**2*math.pi

'''
实例方法需要一个类实例，可以通过self访问实例。
类方法不需要类实例，不能访问实例（self），但可以通过cls访问类本身。
静态方法不能访问cls或self，其作用和普通函数相同，但属于类的名称空间。
静态方法和类方法能（在一定程度上）展示和贯彻开发人员对类的设计意图，有助于代码维护。
'''