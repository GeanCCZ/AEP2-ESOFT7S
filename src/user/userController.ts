import { Request, Response } from 'express';
import userService from './userService';


class userController{
public async addUser(req:Request,res:Response){
    await userService.addUser(req.body)
    return res.status(201).send();
}
public async getUserById(req:Request,res:Response){
    const user = await userService.getUserById(req.params.id)
    return res.json(user)
}
public async getUsers(req:Request,res:Response){
    const user = await userService.getUsers()
    return res.json(user)
}

public async deleteUser(req:Request,res:Response){
    const user=await userService.deleteUser(req.params.id)
    return res.json(user)
}

public async updateUser(req:Request,res:Response){
    const user=await userService.updateUser(req.params.id,req.body)
    return res.json(user)

}


}

export default new userController()