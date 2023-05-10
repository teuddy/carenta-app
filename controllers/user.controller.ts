import type { NextApiRequest, NextApiResponse } from 'next'
import {createUser as createUserService,
        deleteUser as deleteUserService,
        loginUser as loginUserService } from '../services/user/user.service'
import {getUser as getUserRecord,
        updateUser as updateUserRecord } from '../services/user/user.service'
import { idUserSchema, loginSchema, userSchema } from '../validations/user.validation';

// POST: api/user // endpoint to create a user
export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

    // console.log("req.body: ", req.body);
    const newUserData = req.body
    // Validate request data - user input
    const { error } = userSchema.validate( newUserData )
    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }

    const { status, code, message, token } = await createUserService( newUserData )

    res.status( code ).send({ status, code, message, token }
    )
}

// POST: api/user/auth // endpoint to login user
export const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {

    const loginData = req.body
    // Validate request data
    const { error } = loginSchema.validate( loginData )
    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }
    // Sending validated data for the login to be processed
    const { status, code, message, token} = await loginUserService( loginData )
    res.status(code).send({ status, code, message, token })
}

// POST: api/user // endpoint to get user by id
export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
    
    const userId = req.query.id
    // Validate request data
    const { error } = idUserSchema.validate( { _id: userId } )

    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }

    // Get user data by id
    const { status, data, code, message } = await getUserRecord ( userId )

    res.status(code).send({ status, code, message, data })
}

// PUT: api/user/auth // endpoint to update user by id
export const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
    
    const userId = req.query.id
    const userDataToUpdate = req.body
    
    // Validate request data
    const { error } = userSchema.validate( userDataToUpdate )

    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }
    // Update user data
    const { status, code, data, message } = await updateUserRecord ( userId, userDataToUpdate )

    res.status(code).send({ status, code, message, data })
}

// DELETE: api/user // endpoint to delete payment by id
export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    
    const { id } = req.query
    // Validate request data
    const { error } = idUserSchema.validate({ _id: id })

    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }

    
    const { status, code, message, data } = await deleteUserService ( id )
    res.status(code).send({ status, code, message, data })
    
    
    // if (!(id === undefined) || !(id === null)) {
    //     const recordUser = await deleteUserService ( id )
    //     return res.status(200).send({ 
    //         status: "data of delete User is valid",
    //         data: recordUser
    //     })
    // }
    // try {
        
    // } catch (error) {
    //     return res.status(400).json({
    //             message: error.details[0].message
    //         })
    // }
}