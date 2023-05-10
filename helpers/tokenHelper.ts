import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';

const secretKey = "SECRET_KEY_TO_JWT";

export const generateToken = (newUser: User) => {
    // console.log("generateToken START");
    // const secretKey = "SECRET_KEY_TO_JWT"
    // const userData = newUser._id
    
    const token = jwt.sign({user_id: newUser._id, email: newUser.email}, secretKey)

    return token
}

export const verifyToken = (userToken: string) => {

    if (!userToken) {
        return "Token is required for authentication"
    }
    try {
        const decoded = jwt.verify(userToken, secretKey)
        return decoded
    } catch (error) {
        return "Invalid Token"
    }
}