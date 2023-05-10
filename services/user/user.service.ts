import { User } from './../../models/userModel';
import UserModel from "../../models/userModel";
import { generateToken } from '../../helpers/tokenHelper';
import bcrypt from 'bcrypt';

// Register new user in the DB
export const createUser = async (newUserData: User ) => {
    // console.log("newUserData: ", newUserData);
    try {
        // Sanitize: convert email to lowercase
        const email = newUserData.email.toLocaleLowerCase()
        newUserData.email = email
        // Check if the user's email is already registerd in the DB to reject the register process
        const registeredUser = await UserModel.findOne({ email: newUserData.email})

        if(registeredUser) {
            return {
                status: "Registration process failed",
                code: 400,
                message: "User has been registered, please login"
            }
        }

        // Encrypt password
        const encryptedPassword = await bcrypt.hash(newUserData.password, 10)
        newUserData.password = encryptedPassword
        //  Create user and save user in the DB
        const newUser = await UserModel.create(newUserData)
        await newUser.save()
        // Create token to allow access to protected routes for refistered users
        const userToken = generateToken(newUser)
        
        return {
            status: "Successful registration",
            code: 200,
            token: userToken
        }

    } catch (error) {
        return error
    }
}

// Get user record by id
export const getUser = async ( userId: string | string[] ) => {
    
    try {
        const userData = await UserModel.findById( userId )
        return {
            status: "OK",
            code: 200,
            message: "Request succeeded",
            data: userData
        }

    } catch (error) {
        return {
            status: "Failed",
            code: 500,
            message: "Internal Server Error"
        }
    }
}

// Update user record by id
export const updateUser = async ( userId: string | string[], userDataToUpdate: User ) => {
    
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, userDataToUpdate)
        return {
            status: "OK",
            code: 200,
            message: "Request succeeded",
            data: updatedUser
        }
    } catch (error) {
        return {
            status: "Failed",
            code: 500,
            message: "Internal Server Error"
        }
    }
}

// Delete user record by id
export const deleteUser = async ( userId: string | string[] ) => {
    
    console.log("userId in delteUSer: ", userId);
    try {
        const registeredUser = await UserModel.findOne({ _id: userId})

        console.log("registeredUser: ", registeredUser);
        if(!registeredUser) {
            return {
                status: "Registration process failed",
                code: 400,
                message: "User has been registered, please login"
            }
        }

        const userDeleted = await UserModel.findByIdAndDelete( userId )
        console.log("userDeleted: ", userDeleted);
        return {
            status: "OK",
            code: 200,
            message: "Request succeeded",
            data: userDeleted
        }
    } catch (error) {
        return {
            status: "Failed",
            code: 500,
            message: "Internal Server Error"
        }
    }
}

// Login user registered in the DB
export const loginUser = async (userData: User ) => {

    try {
        // Sanitize: convert email to lowercase
        const email = userData.email.toLocaleLowerCase()
        userData.email = email
        // Validate if user exist in the DB
        const registeredUser = await UserModel.findOne({ email: userData.email})

        if(!registeredUser) {
            return {
                status: "Access failed",
                code: 400,
                message: "Invalid credentials"
            }
        }
        // Password validation against the registered in the DB
        const result = await bcrypt.compare(userData.password, registeredUser.password)
        
        if(registeredUser && (result)) {
            var userToken = generateToken(registeredUser)

            return {
                status: "Successful access",
                code: 200,
                message: "Valid credentials",
                token: userToken
            }
        }

        return {
            status: "Access failed",
            code: 400,
            message: "Invalid credentials"
        }

    } catch (error) {
        return error
    }
}