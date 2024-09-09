const tinderUser = {}

tinderUser.id = "l1f21bscs0081"
tinderUser.name = "yahya"
tinderUser.isLoggedIn = false

 console.log(tinderUser);

const regularUser = {
    email: "yahya123ayaz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yahya",
            lastname: "gujjar"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 const obj3 = { obj1, obj2 }
 const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
 console.log(obj3);


const users = [
    {
        id: 1,
        email: "yahya123ayaz@gmail.com"
    },
    {
        id: 1,
        email: "yahya123ayaz@gmail.com"
    },
    {
        id: 1,
        email: "yahya123ayaz@gmail.com"
    },
]

users[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const controller = {
    coursename: "controller price",
    price: "999",
    controller_seller: "hitesh"
}

 course.controller

const {controller_seller: controller} = controller1

 console.log(controller1);
console.log(controller);
