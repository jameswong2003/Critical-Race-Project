let person;

function initialize(){
    
}

function generateContent(){
    random = Math.floor(Math.random() * people.length);
    person = people[random];
    display();
}

function display(){
    document.getElementById("quote").innerHTML = person.quote;
    document.getElementById("biography").innerHTML = person.bio;
    document.getElementById("name").innerHTML = person.name;
    document.getElementById("picture_src").src = person.image;
}
