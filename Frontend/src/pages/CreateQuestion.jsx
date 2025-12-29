import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/api.js"

const CreateQuestion = () => {
  const location = useLocation();
  const { examid, duration, totalmarks } = location.state;

  const [marks, setMarks] = useState(1);

  const [question, setQuestion] = useState({
    examid: examid,
    question: "",
    option: ["", "", "", ""],
    correctanswer: "",
  });

  // handle question text & correct answer
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  // handle options array
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...question.option];
    updatedOptions[index] = value;

    setQuestion({
      ...question,
      option: updatedOptions,
    });
  };

  const handleNext = async() => {
    const res=await api.post('/question/questionsent',question)
    console.log("Saved Question:", question); // later send to backend

    // reset question fields
    setQuestion({
      examid: examid,
      question: "",
      option: ["", "", "", ""],
      correctanswer: "",
    });

    setMarks(marks + 1);
  };

  return (
    <>
      <h1>{examid}</h1>
      <h2>Duration: {duration}</h2>
      <h3>Question {marks} of {totalmarks}</h3>

      <input
        placeholder={`Enter your ${marks} no question`}
        name="question"
        value={question.question}
        onChange={handleChange}
      />

      <input
        placeholder="Enter option 1"
        value={question.option[0]}
        onChange={(e) => handleOptionChange(0, e.target.value)}
      />

      <input
        placeholder="Enter option 2"
        value={question.option[1]}
        onChange={(e) => handleOptionChange(1, e.target.value)}
      />

      <input
        placeholder="Enter option 3"
        value={question.option[2]}
        onChange={(e) => handleOptionChange(2, e.target.value)}
      />

      <input
        placeholder="Enter option 4"
        value={question.option[3]}
        onChange={(e) => handleOptionChange(3, e.target.value)}
      />

      <input
        placeholder="Enter The correct answer"
        name="correctanswer"
        value={question.correctanswer}
        onChange={handleChange}
      />

      {marks < totalmarks ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button>Upload Questions</button>
      )}
    </>
  );
};

export default CreateQuestion;
