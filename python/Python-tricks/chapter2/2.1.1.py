

# def apply_discount(product, discount):
#     price = int(product['price'] * (1.0 - discount))
#     assert 0 <= price <= product['price']
#     return price

# print(apply_discount({'price':5}, 0.5))


# dict = {'a': 1, 'b': 2, 'b': '3'} 
# print(dict['b'])

class Indenter:
    def __init__(self):
        self.level = 0

    def __enter__(self):
        self.level += 1
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.level -= 1

    def print(self, text):
        print('   ' * self.level + text)

with Indenter() as indent:
    indent.print('hi!')
    with indent:
        indent.print('hello')
        with indent:
            indent.print('bonjour')
    indent.print('hey')
