import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,//cloudanry url
            required:true
        },
        coverimage:{
            type:String,//cloudanry url
           
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
        }],

});


export const User = mongoose.model("User", userSchema);