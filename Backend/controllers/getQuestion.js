import Question from "../models/Question.js"
const getQuestion= async(req,res)=>{
    try {
        const {examid}=req.params
        const questions = await Question.find({examid})
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(501).json({"Message":"Server Error"})
    }

}
export default getQuestion