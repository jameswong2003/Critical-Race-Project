import json

class person:
    def __init__(self, name, quote, image):
        self.name = name
        self.quote = quote
        self.image = image
    
    def contact(self):
        return self.name + " " + self.quote


class people:
    def __init__(self, people1, people2, people3):
        self.people1 = people1
        self.people2 = people2
        self.people3 = people3

person1 = person('James', 'python', 'image1')
person2 = person('Mathew', 'java', 'image2')
person3 = person('Way', 'Javascript', 'image2')

group = people(person1, person2, person3)
