import mongoose from "mongoose";
import Result from "../models/Result.js";

const findMyResult = async (req, res) => {
  try {
    const { examid } = req.params;
    const result = await Result.findOne({
      examId: new mongoose.Types.ObjectId(examid),
      studentId: new mongoose.Types.ObjectId(req.user.id),
    });

    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default findMyResult;
