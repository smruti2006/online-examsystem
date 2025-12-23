import mongoose from "mongoose"

const examSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    totalmarks:{
        type:Number,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
},{timestamps:true})
export default mongoose.model("Exam",examSchema)