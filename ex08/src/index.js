var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Phyton", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    },
];
function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var i=0; i < contacts.length - 1; i++){
        if(contacts[i].firstName == name){
            if(typeof contacts[i][prop] === "undefined"){
                return "No such property";
            }
            return contacts[i][prop];
        }
    }
    return "No such contact";
    // Only change code above this line
}
console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;