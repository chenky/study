# def yell(text):
#   print( text.upper() + "!" )

# # yell("hello")

# list(map(yell,["a","b","c"]))

# def curry(fn):
#   def _(*args):
#     newArgs = 
#     if(fn.length<=newArgs.length):
#       fn(newArgs)
#     else:
#       return _(newArgs)

# def testCurry(a,b,c,d):
#   return a+b+c+d

# curryFn = curry(testCurry)
# res = curryFn(1)(2,3)(4)
# print(res)

# callable 检查一个对象是否可以调用
# class Adder:
#   def __init__(self, n):
#     self.n = n
#   def __call__(self, x):
#     return self.n + x

# plus3 = Adder(3)
# print( plus3(4) )

# add = lambda x,y: x+y
# res = add(1,2)
# print(res)

# tuples = [(1, 'd'), (2, 'b'), (4, 'a'), (3, 'c')]
# res = sorted(tuples,key=lambda x: x[1])
# print(res)
# res = [x for x in range(16) if x % 2 == 0]
# res = [x for x in range(16)]
# print( res )

# def upperCase(fn):
#   def wrap():
#     originalRes = fn()
#     return originalRes.upper()
#   return wrap

# @upperCase
# def greet():
#   return "hello"

# ret = greet()
# print(ret)
'''
@strong
@emphasis

def greet():
    return 'Hello!'

same as decorated_greet = strong(emphasis(greet))
'''

# def proxy(func):
#   def wrapper(*args, **kwargs):
#     return func(*args, **kwargs)
#   return wrapper
# @proxy
# def greet(txt1,txt2):
#   return txt1+"_"+txt2

# ret = greet("hello", "world")
# print(ret)

# def trace(func):
#   def wrapper(*arg, **kw):
#     print(f'TRACE: calling {func.__name__}() '
#               f'with {arg}, {kw}')
#     original_result = func(*arg, **kw)

#     print(f'TRACE: {func.__name__}() '
#           f'returned {original_result!r}')

#     return original_result
#   return wrapper

# @trace
# def greet(txt1,txt2,tmp):
#   return txt1+"_"+txt2

# ret = greet("hello", "world",tmp=2)
# print(ret)

# import functools

# def uppercase(func):
#   @functools.wraps(func)
#   def wrapper():
#     return func().upper()
#   return wrapper

# @uppercase
# def greet():
#     """Return a friendly greeting."""
#     return 'Hello!'

# print(greet.__name__)
# print(greet.__doc__)

# def print_vector(x, y, z):
#     print('<%s, %s, %s>' % (x, y, z))

# tuple_vec = (1, 0, 1)
# print_vector(*tuple_vec)
# list_vec = [1, 0, 1]
# print_vector(*list_vec)

# dict_vec = {'y': 0, 'z': 1, 'x': 1}
# print_vector(**dict_vec)

a=[1,2,3]
b = list(a)
print(b)