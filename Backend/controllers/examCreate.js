import Exam from "../models/Exam.js";

const examCreate = async (req, res) => {
    try {
        const { title, duration, totalmarks, createdby,isActive } = req.body
        const exam = await Exam.create({
            title, duration, totalmarks, createdBy:req.user.id,isActive
        })
        return res.status(201).json({
            message:"Exam created successfully",
            exam
        })
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
export default examCreate