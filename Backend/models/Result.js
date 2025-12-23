import mongoose, { Types } from "mongoose";

const resulstSchema = new mongoose.Schema({
    examId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exam",
        required:true
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    score:{
        type:Number,
        required:true
    },
},{timestamps:true})
export default mongoose.model("Result",resulstSchema)