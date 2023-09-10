import { userModel } from "./models/user.model.js";

class UserManager {
    async addUser(user) {
        try {
            const newUser = await userModel.create(user); 
            console.log("User added!");
    
            return newUser; 
        } catch (error) {
            console.error("Error adding user:", error.message);
            throw error; 
        }
    }

    async login(user) {
        try {
            const userLogged = await userModel.findOne({ email: user }) || null;
            
            if (userLogged) {
                console.log("User logged!");
                return userLogged;
            }

            return null; 
        } catch (error) {
            console.error("Error during login:", error.message);
            throw error; 
        }
    }

    async restorePassword(user, pass) {
        try {
            const updatedUser = await userModel.findOneAndUpdate(
                { email: user },
                { password: pass },
                { new: true } 
            );
            
            if (updatedUser) {
                console.log("Password Restored!");
                return updatedUser;
            }

            return null; 
        } catch (error) {
            console.error("Error restoring password:", error.message);
            throw error; 
        }
    }
}

export default UserManager;
