import User from "./userSchema"

class userService{
async addUser(data:any){
    try {
        const user= await User.create(data)
    return user;
    } catch (error) {
        console.error("Error creating user: ", error);
    }
}
async getUserById(id:any){
    const user= await User.findById(id)
    return user;
}

async getUsers(){
    const user= await User.find()
    return user;
}

async deleteUser(id:any){
    const user= await User.findByIdAndDelete(id)
    return user;
}

async updateUser(id:any,data:any){
    const user= await User.findByIdAndUpdate(id,{email:data.email,firstName:data.firstName,lastName:data.Lastname,age:data.age},{new:true})
    return user;
}
}

export default new userService()