# 🤖 AIVA – AI Voice Interview Assistant

AIVA is a full-stack AI-powered interview platform that simulates real technical interviews using voice interaction. Users can log in, start an interview, answer questions using speech, and receive AI-powered feedback in future versions.

---

# 🚀 Features Implemented

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Persistent Login using Local Storage
- Logout Functionality
- Current User Profile Fetch

---

## 🎨 Frontend

### Landing Page
- Modern UI
- Responsive Layout
- Navigation Bar

### Dashboard
- User Welcome Screen
- Logged-in User Details
- Start Interview Button
- Logout Button

---

## 🎤 Interview Module

### Interview Setup
- Dedicated Interview Setup Page
- Protected Route

### Interview Room
- Professional Interview Layout
- Responsive Design
- Live Interview Interface

---

## 📷 Webcam Integration

- Live Camera Preview
- Camera Permission Handling
- Camera Error Handling
- Live Camera Status

Built using:

- react-webcam

---

## 🎙️ Microphone

- Microphone Permission Check
- Permission Status Display
- Recording Status Indicator

---

## 🗣 Speech Recognition

Implemented using the browser Web Speech API.

Features:

- Start Recording
- Stop Recording
- Live Speech-to-Text
- Continuous Listening
- Live Transcript Display
- Error Handling

---

## ⏱ Interview Timer

Custom React Hook

Features:

- 15 Minute Countdown
- Live Timer
- Auto Redirect on Completion

---

## 📝 Interview Engine (Phase 1)

Implemented using a custom hook.

Features:

- Dynamic Question Loading
- Multiple Questions
- Question Progress
- Previous Question
- Next Question
- Answer Storage
- Interview Reset
- Progress Calculation

---

## 📊 Progress Tracking

- Dynamic Progress Bar
- Question Counter
- Percentage Completion

---

## ⚛ React Architecture

Custom Hooks

- useInterview()
- useInterviewTimer()
- useSpeechRecognition()

Reusable Components

- Navbar
- AuthLayout
- ProtectedRoute
- CameraPreview
- MicrophoneStatus
- InterviewHeader
- ProgressBar
- QuestionPanel
- TranscriptPanel
- InterviewFooter

---

## 🗂 Project Structure

```
src
│
├── api
├── components
│   └── interview
├── context
├── data
├── hooks
├── pages
├── routes
├── styles
├── types
└── utils
```

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Webcam

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

# 📌 Current Status

### ✅ Completed

- Authentication System
- Protected Routing
- Dashboard
- Interview Setup
- Interview Room
- Webcam Integration
- Speech Recognition
- Live Transcript
- Progress Bar
- Interview Timer
- Dynamic Question Engine
- Answer Management Foundation

---

# 🚧 In Progress

- Interview Session Management
- MongoDB Interview Storage
- Auto Save Answers

---

# 🔜 Upcoming Features

- AI Generated Interview Questions
- OpenAI Integration
- AI Voice (Text-to-Speech)
- AI Interview Evaluation
- Interview Score
- Detailed Feedback Report
- Interview History
- Resume Based Interview
- Company Specific Interview
- Coding Interview Module
- Admin Dashboard

---

# 📷 Screenshots

> Screenshots will be added after UI completion.

---

# 👨‍💻 Author

**Vinod Gawande**

GitHub:
https://github.com/VinodGawande
