"# Online-Exam-System" 

This is a Online Exam system where Teacher can create exam online and student attempt the exam and 
the system automatically calculate the result and get the result back

"#Backend"

"#Features"
>User Signup and Login with JWT Authontication
>Role based acess
>Create and manage the exam
>Add question to the exam
>Student can attempt the exam
>Automatica Result calculation

"#Tech Stack Used"

>Node.js
>Express.js
>Mongodb
>Mongoose
>JWT Authentication
>Bcrypt


"#Project Flow"
>User Signup & Login with JWT Authentication
>With Rolebase acess Teacher only can create Exam
>Teacher add question and answer of the exam
>Student Attempt the exam
>Student submit the exam
>The system automatically checks the correctness of the exam
>The result is calculated and stored in the DB


"#Database Model"
>User
    >Name
    >Email
    >Password
    >role
>Exam
   >Title
   >Duration
   >Totalmarks
   >createdBy
   >isActive
>Question
  >Examid
  >Question
  >Option
  >Correct answer
>Results
  >Examid
  >Studentid
  >Score
