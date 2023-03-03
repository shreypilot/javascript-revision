let user = {
    name: " Ankita",
}
//user.info.age;

//In above code i will get runtime error when i try to access an object property that is not present

// we will get an error because info is not present in the user object so info is undefined 
//we will get an error when we try to perform some operation on undefined or null


//To solve the issue in the code above,check if property exists:
//solve using conditional operator 

// let age = user.info ? (user.info ? user.info.age :undefined) : undefined 

// age = user.info && user.info.age;

//the above problem can be solved neatly with new optional chainig operator


user?.info?.age;//undefined is returned

//console.log(age)


// above are optional chaining(?.) is used to chec and access the property 0f an object ;
// if an intermediate property is undefined or null,then undefined is returned


//in this line , user?.info?.age:

//user?

//will check if the user object is undefined or null

//.info

// if the user object is undefined or null, then undefined is returned
//if the user object is not undefined or null ,then its info property is accesssed

//info?
//checks if info is valid(not undefined or null)

//.age
//if info is valid the age is accessed
// otherwise returned undefined


{/**user?.info?.age;
the above code is equal to

// user ? (user.info ? user.info.age :undefined) : undefined 
or
// user &% user.info && user.info.age;
 */}


