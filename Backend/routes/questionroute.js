import express from 'express'
import questionSent from '../controllers/quesitonSent.js'
import authMiddleware from '../middleware/authmiddleware.js'
import roleMiddleware from '../middleware/rolemiddleware.js'
import getQuestion from '../controllers/getQuestion.js'
const router = express.Router()
router.post(
    '/questionsent',authMiddleware,roleMiddleware('teacher'),questionSent
)
router.get('/getquestion/:examid',authMiddleware,getQuestion)
export default router;