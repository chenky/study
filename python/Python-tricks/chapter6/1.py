# emails = {
#   'Bob': 'bob@example.com',
#   'Alice': 'alice@example.com',
# }

# for name, value in emails.items():
#   print(name,', ',value)

# 列表解构
# values = [expression for item in collection]
'''
values = [expression
          for item in collection
          if condition]
same as
values = []
for item in collection:
    if condition:
        values.append(expression)
'''

'''
解析式是Python中的一个关键特性。理解和应用解析式会让代码变得更具Python特色。
解析式只是简单for循环模式的花哨语法糖。在理解其中的模式之后，就能对解析式有直观的理解。
除了列表解析式之外，还有集合解析式和字典解析式。
'''

# lst[start:end:step]
# numbers[::-1]

# numbers = [1, 2, 3]
# for n in numbers:
#     print(n)

# class Repeater:
#   def __init__(self, value):
#     self.value = value
#   def __iter__(self):
#     return self
#   def __next__(self):
#     return self.value

# my_list=[1,2,3]
# iterator = iter(my_list)
# print(next(iterator))
# print(next(iterator))
# print(next(iterator))

# def repeater(value):
#   while True:
#     yield value

# def bounded_repeater(value, max_repeats):
#   for i in range(max_repeats):
#     yield value

# items = bounded_repeater(1,3)
# for item in items:
#   print(item)
# print(next(items))
# print(next(items))
# print(next(items))

# genexpr = (expression for item in collection)
# same as 
# def generator():
#     for item in collection:
#         yield expression

# for x in ('Bom dia' for i in range(3)):
#     print(x)

'''
生成器可以链接在一起形成高效且可维护的数据处理管道。
互相链接的生成器会逐个处理在链中通过的每个元素。
生成器表达式可以用来编写简洁的管道定义，但可能会降低代码的可读性。
'''

import functools

def compose(*functools):
  