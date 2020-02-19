# import sys
# x = 'runoob' 
# sys.stdout.write(x)

# x="a"
# y="b"
# # 换行输出
# print( x )
# print( y )
 
# print('---------')
# # 不换行输出
# print( x, end=" " )
# print( y, end=" " )
# print()

# import sys
# print('================Python import mode==========================')
# print ('命令行参数为:')
# for i in sys.argv:
#     print (i)
# print ('\n python 路径为',sys.path)

# student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
# student2 = {'Tom', 'Jim', 'Mary', 'Tom'}
 
# print(student-student2)   # 输出集合，重复的元素被自动去掉

# a,b = 1, "a"
# print(a>b)

# list = [1,2,3, "a"]
# it = iter(list)
# for x in it:
#   print(x,end=" ")

# 可写函数说明
# sum = lambda arg1, arg2: arg1 + arg2
 
# # 调用sum函数
# print ("测试只：", sum( 10, 20 ))
# print ("相加后的值为 : ", sum( 20, 20 ))

# str = input("请输入：")
# print ("你输入的内容是: ", str)

# if True:
#     print("Hello")

class Test:
    def __init__(self):
        self.foo = 11
        self._bar = 23

t = Test()
print(t.foo, t._bar)