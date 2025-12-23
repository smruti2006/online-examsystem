import express from "express";
import submitExam from "../controllers/result.js";
import authMiddleware from "../middleware/authmiddleware.js"
import findResult from "../controllers/findResult.js"
import rolemiddleware from "../middleware/rolemiddleware.js"
import getallstudentResult from "../controllers/getallstudentResult.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitExam);
router.get("/getresult/:examid",authMiddleware,findResult)
router.get("/getallresult",
    authMiddleware,
    rolemiddleware(["teacher"]),
    getallstudentResult
)

export default router;
