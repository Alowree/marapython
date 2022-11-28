import random

def get_random_color(length=6):
  '''
  To generate a random color code
  '''
  digits = '0123456789'
  letters = 'abcdef'
  str_list = [random.choice(digits + letters) for i in range(length)]
  random_str = ''.join(str_list)
  random_color = '#' + random_str
  return random_color

def get_random_location():
  x = random.randint(1, 99)
  y = random.randint(1, 99)
  return (str(x) + 'vw', str(y) + 'vh')

def get_random_duration():
  t = 3 * random.random()
  return (str(t) + 's')
def get_random_delay():
  t = 3 * random.random()
  return ('-' + str(t) + 's')


colors = [get_random_color() for i in range(500)]
print(colors)
locations = [get_random_location() for i in range(500)]
print(locations)
durations = [get_random_duration() for i in range(500)]
print(durations)
delays = [get_random_delay() for i in range(500)]
print(delays)

with open("nth-child.css", 'a+', encoding='utf-8') as f:
  for i in range(500):
    content = f".particle:nth-child({i+1}) {{\n\tbackground: {colors[i]};\n\ttransform: translate({locations[i][0]}, {locations[i][1]});\n\tanimation-duration: {durations[i]};\n\tanimation-delay: {delays[i]};\n}}\n"
    f.write(content)