import Result from "../models/Result.js"
const getallstudentResult=async(req,res)=>{
    try {
        const result=await Result.find()
        return res.status(201).json(result)
    } catch (error) {
        return res.status(501).json({message:error.message})
    }
}
export default getallstudentResult;