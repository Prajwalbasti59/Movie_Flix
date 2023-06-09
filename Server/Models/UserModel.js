import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        userName:
        {
            type: String,
            required: true
        },

        password:
        {
            type: String,
            required: true
        },
        firstName:
        {
            type: String,
            required: true
        },
        lastName:
        {
            type: String,
            required: true
        },

        isAdmin:
        {
            type:Boolean,
            default: false
        },

        profilePicture:
        {
            type:String
        },
        coverPicture:
        {
            type:String
        },
        livesIn:
        {
            type:String
        },
        about:
        {
            type:String
        },
        worksAt:
        {
            type:String
        },
         relationship:
        {
            type:String
        },
        followers: [],
        following: []
        
    },
    {timestamps: true}
)

const UserModel = mongoose.model("Users",UserSchema)
export default UserModel;