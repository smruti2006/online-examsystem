import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import CreateExam from "./pages/CreateExam.jsx";
import Exam from "./pages/Exam.jsx";
import Result from "./pages/Result.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Unuthorized from "./pages/Unuthorized.jsx";
import Pagenotfound from "./pages/Pagenotfound.jsx";
import CreateQuestion from "./pages/CreateQuestion.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unuthorized" element={<Unuthorized />} />
        <Route element={<ProtectedRoute allowedroles={["teacher"]} />}>
          <Route
            path="/dashboard/teacherdashboard"
            element={<TeacherDashboard />}
          />
          <Route path="/exam/examcreate" element={<CreateExam/>}/>
          <Route path="/exam/questiosent" element={<CreateQuestion/>}/>
        </Route>
        <Route element={<ProtectedRoute allowedroles={["student"]} />}>
          <Route
            path="/dashboard/studentdashboard"
            element={<StudentDashboard />}
          />
        </Route>
        <Route path="/exam" element={<Exam/>}/>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
};

export default App;