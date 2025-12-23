import mongoose from "mongoose"

const questionSchema=new mongoose.Schema({
    examid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exam",
        required:true
    },
    question:{
        type:String,
        required:true
    },
    option:{
        type:[String],
        required:true
    },
    correctanswer:{
        type:String,
        required:true
    }
},{timestamps:true})
export default mongoose.model("Question",questionSchema)