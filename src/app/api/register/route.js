import mongoose from "mongoose";
import {User} from "../../models/User.js";
import bcrypt from 'bcrypt';


export async function POST(req) {
    const body = await req.json();
    mongoose.connect("mongodb+srv://oriental-foods:akSbtQxy9zCLwcYs@cluster0.dnjx3w0.mongodb.net/oriental-foods");
    const pass = body.password;
    if(!pass?.length || pass.length < 5){
        new Error ('password must be atleast 5 characters');
        
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);

    body.password = bcrypt.hashSync (notHashedPassword,salt);

    const createdUser = await User.create(body);
    return Response.json(createdUser);
}






// Method to compare the incoming plain text password with the hashed one in database, try doing it properly