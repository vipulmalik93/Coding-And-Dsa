// In JavaScript, objects are stored by reference, not by value. This means that when you assign an object to a new 
// variable, you're not copying the object itself, but instead, you're copying the reference to that object.

// KEY TAKEAWAYS

// Objects in JavaScript are stored by reference.
// Assigning an object to another variable does not create a copy; it just copies the reference.
// Modifying an existing property updates all references.
// If two variables point to the same object, any change to that object is reflected in both.
// Reassigning an object creates a new reference.
// If you do obj = { newObject }, you're creating a new object instead of modifying the original.



// CASE1:
let obj = {name: "vipul"}
let variable = obj.name;
 obj.name = "malik"
console.log(obj.name, variable)


// CASE2:
let obj1 = { name: "vipul" };
let realCity = obj1;  // realCity now holds a reference to obj
obj1.name = "malik"; // Modifying the existing object
console.log("obj1:", obj1,   "realCity:", realCity);


// CASE3:
let obj2 = { name: "vipul" };
let refToObj = obj2; // Stores a reference to obj
obj2 = { name: "malik" }; // Creates a new object!
console.log( "obj2:", obj2,"refToObj", refToObj, "refToObj.name",  refToObj.name); // vipul (old object)