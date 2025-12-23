import Exam from "../models/Exam.js";

const getAllexam= async (req,res)=>{
    try {
        const allexam = await Exam.find()
        res.status(200).json({message:"fetch successfully",allexam})
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}
export default getAllexam