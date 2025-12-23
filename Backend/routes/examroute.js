import express from 'express'
import examCreate from '../controllers/examCreate.js'
import authMiddleware from '../middleware/authmiddleware.js'
import roleMiddleware from '../middleware/rolemiddleware.js'
import getAllexam from '../controllers/getExam.js'

const router = express.Router()
router.post('/examcreate',
    authMiddleware,            // ✅ first check login
    roleMiddleware(["teacher"]),
    examCreate
)
router.get('/getexam',getAllexam)
export default router