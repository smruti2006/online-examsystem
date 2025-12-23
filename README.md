# Online Exam System (Backend)

An Online Exam System where **teachers can create exams** and **students can attempt exams online**.  
The system **automatically checks answers**, **calculates results**, and **stores them in the database**.

---

## 🚀 Features

- User Signup & Login
- JWT Authentication
- Role-Based Access Control
  - Teacher
  - Student
- Teacher can:
  - Create exams
  - Add questions with correct answers
- Student can:
  - View exams
  - Attempt exams
  - Submit answers
- Automatic result calculation
- Secure password storage using Bcrypt

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- Bcrypt (Password Hashing)

---

## 🔁 Project Flow

1. User signs up and logs in
2. JWT token is generated
3. Role is checked (Teacher / Student)
4. Teacher:
   - Creates an exam
   - Adds questions and correct answers
5. Student:
   - Attempts the exam
   - Submits answers
6. System:
   - Checks answers automatically
   - Calculates score
   - Stores result in database
7. Student and Teacher can view results

---

## 🗂 Database Models

### User Model
- name
- email
- password
- role (teacher / student)

### Exam Model
- title
- duration
- totalMarks
- createdBy (Teacher ID)
- isActive

### Question Model
- examId
- question
- options
- correctAnswer

### Result Model
- examId
- studentId
- score

---

## 🔐 Authentication & Authorization

- JWT based authentication
- Protected routes
- Role-based access
  - Only teachers can create exams
  - Only students can attempt exams

---

## 📦 Installation & Setup

```bash
git clone https://github.com/your-username/online-exam-system.git
cd online-exam-system
npm install
