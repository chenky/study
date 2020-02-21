# def greeting(userid):
#   name_for_userid = {
#       382: 'Alice',
#       950: 'Bob',
#       590: 'Dilbert',
#   }
#   if userid in name_for_userid:
#     return name_for_userid[userid]
#   else:
#     return "this userid is not exist"

# from string import Template

# name_for_userid = {
#     382: 'Alice',
#     950: 'Bob',
#     590: 'Dilbert',
# }

# def greeting(userid):
#     # return 'Hi %s!' % name_for_userid.get( userid, 'there')
#     return 'Hi ${name}'.format(name=name_for_userid.get(userid,'there')) 
#     # tmpl = Template('hi ${name}')
#     # return tmpl.substitute(name=name_for_userid.get(userid,'there'))

# print(greeting(382))
# print(greeting(555))

# import operator

# xs = {'a': 4, 'c': 2, 'b': 3, 'd': 1}
# print(sorted(xs.items()))
# print(sorted(xs.values()))
# print(sorted(xs.items(),key=lambda x: x[1]))
# print(sorted(xs.items(),key=operator.itemgetter(1),reverse=False))


# func_dict.get(cond, handle_default)()

# def add(x,y):
#   return x+y
# def sub(x,y):
#   return x-y

# funcs = {
#   'add': add,
#   'sub': sub
# }

# addres = funcs.get("add",lambda x,y: x*y)(1,2);
# subres = funcs.get("sub",lambda x,y: x*y)(1,2);
# otherres = funcs.get("aaaa",lambda x,y: x*y)(1,2);
# print(addres,subres,otherres)

# def dispatch_dict(operator,x,y):
#   return {
#     'add': lambda: x+y,
#     'sub': lambda: x-y
#   }.get(operator, lambda:None)()

# print(dispatch_dict('add', 2, 8))
# print(dispatch_dict('mul', 2, 8))

# print({True: 'yes', 1: 'no', 1.0: 'maybe'});
# print(True == 1 == 1.0)

# class AlwaysEquals:
#   def __eq__(self, other):
#     return True
#   def __hash__(self):
#     return id(self)

# objects = [AlwaysEquals(),
#                AlwaysEquals(),
#                AlwaysEquals()]

# print( [hash(obj) for obj in objects] )

xs = {'a': 1, 'b': 2}
ys = {'b': 3, 'c': 4}
# zs = {}
# zs.update(xs)
# zs.update(ys)
# zs = dict(xs,**ys)
zs = {**xs, **ys}
print(zs)
