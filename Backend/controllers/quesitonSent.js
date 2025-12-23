import Question from "../models/Question.js";

const qustionCreate = async(req,res)=>{
    try {
        const {examid,question,option,correctanswer}=req.body
        const questioncreate=await Question.create({
            examid,question,option,correctanswer
        })
        return res.status(201).json(questioncreate)
    } catch (error) {
        return res.status(500).json({"message":"Server Error",message:error.message})
    }
}
export default qustionCreate;