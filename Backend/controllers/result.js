import Question from '../models/Question.js'
import Result from '../models/Result.js';
const submitExam = async (req, res) => {
    try {
        const { examId, answers } = req.body;
        const studentId = req.user.id;
        let totalscore = 0;
        for (let ans of answers) {
            const question = await Question.findById(ans.questionid)
            if (!question) continue
            if (question.correctanswer == ans.selectedanswer) {
                totalscore += 1
            }

        }
        const result = await Result.create({
            examId,
            studentId,
            score: totalscore
        });
        return res.status(201).json({Message:"Exam Submitted successfully",result})
    } catch (error) {
        return res.status(500).json({ "Message": error.message })
    }
}
export default submitExam;