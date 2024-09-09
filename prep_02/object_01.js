const mySym = Symbol("0081")


const JsUser = {
    name: "Yahya",
    "full name": "Yahya Ayaz",
    [mySym]: "0081",
    age: 18,
    location: "lahore",
    email: "yahya123ayz@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])

JsUser.email = "gujjar@chatgpt.com"
 Object.freeze(JsUser)
JsUser.email = "gujjar@microsoft.com"
 console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello this JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user from greeting two , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());