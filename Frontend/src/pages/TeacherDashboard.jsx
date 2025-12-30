import React from 'react'
import { useNavigate } from 'react-router-dom'

const teacherdashboard = () => {
  const navigate=useNavigate()
  return (
    <>
      <button onClick={()=>{navigate("/exam/examcreate")}}>Create Exam</button>
    </>
  )
}

export default teacherdashboard
