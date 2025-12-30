import Exam from '../models/Exam.js'
const getExamT=async(req,res)=>{
    try {
      const teacherexam = await Exam.find({createdBy:req.user.id})
      res.status(200).json({message:"Fetch Sucessfully",teacherexam})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export default getExamT;