function myNes(){
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
    // Only change code below this line
    var gloveBoxContents = myStorage.car.inside["glove box"];
    return gloveBoxContents;
    // Only change code above this line
}
console.log(myNes());
module.exports = myNes;