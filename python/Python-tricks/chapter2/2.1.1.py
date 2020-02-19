

def apply_discount(product, discount):
    price = int(product['price'] * (1.0 - discount))
    assert 0 <= price <= product['price']
    return price

print(apply_discount({'price':5}, 0.5))


# dict = {'a': 1, 'b': 2, 'b': '3'} 
# print(dict['b'])
