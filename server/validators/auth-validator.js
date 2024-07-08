const {z} = require("zod");

const loginSchema = z.object({
    email:z
        .string({required_error:"Email is required"})
        .trim()
        .email({message:"Invalid email address"})
        .min(3, {message:"Email must be of least 3 characters"})
        .max(255,{message:"Email must not be more than 255 characters"}),
    password:z
        .string({required_error:"Password is required"})
        .min(7, {message:"Password must be of least 7 characters"})
        .max(200,{message:"Password must not be more than 200 characters"}),

})


// creating an object schema

const signupSchema = loginSchema.extend({
    username:z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"Name must be of least 3 characters"})
        .max(255,{message:"Name must not be more than 255 characters"}),

    phone:z
        .string({required_error:"Phone is required"})
        .trim()
        .min(10, {message:"Phone must be of least 10 characters"})
        .max(20,{message:"Phone must not be more than 20 characters"}),
   
});


//object for login


// const signinSchema = z.object({
//     email:z
//     .string({required_error:"Email is required"})
//     .trim()
//     .email({message:"Invalid email address"})
//     .min(3, {message:"Email must be of least 3 characters"})
//     .max(255,{message:"Email must not be more than 255 characters"}),
//     password:z
//     .string({required_error:"Password is required"})
//     .min(7, {message:"Password must be of least 7 characters"})
//     .max(200,{message:"Password must not be more than 200 characters"}),

module.exports = {signupSchema , loginSchema};