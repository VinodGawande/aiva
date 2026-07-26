<div align="center">

# 🤖 AIVA – AI Virtual Interview Assistant

### An AI-powered mock interview platform built with the MERN Stack

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![NodeJS](https://img.shields.io/badge/Node.js-22-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![Status](https://img.shields.io/badge/Status-Under%20Development-yellow)

</p>

---

### 🚀 Build realistic AI-powered interviews and receive intelligent feedback.

</div>

---

# 📖 Table of Contents

- About AIVA
- Problem Statement
- Objectives
- Current Features
- Tech Stack
- System Architecture
- Project Workflow
- Development Status

---

# 📚 About AIVA

AIVA (AI Virtual Interview Assistant) is a production-oriented full-stack web application that simulates real technical interviews using Artificial Intelligence.

The goal of AIVA is to provide candidates with an interview environment similar to real company interviews. Instead of practicing static questions, users can interact with an intelligent interview system that asks questions, records responses, evaluates performance, and provides actionable feedback.

Unlike traditional mock interview platforms, AIVA is being designed as a complete interview ecosystem where authentication, interview management, AI evaluation, and future voice interaction work together seamlessly.

This project is currently being developed using modern web technologies including React, TypeScript, Node.js, Express.js, MongoDB, and JWT Authentication.

---

# ❓ Problem Statement

Many students prepare for interviews by reading questions or watching videos, but they rarely experience the pressure and structure of a real interview.

Current challenges include:

- No realistic interview environment
- Lack of personalized feedback
- No interview history tracking
- Limited communication practice
- No AI-based interviewer
- No performance analytics

AIVA aims to solve these problems by creating an AI-powered interview platform that closely resembles an actual technical interview.

---

# 🎯 Project Objectives

The primary objectives of AIVA are:

- Build a production-ready MERN application
- Simulate real technical interviews
- Secure user authentication using JWT
- Provide an intuitive interview dashboard
- Create reusable frontend architecture
- Integrate AI-powered interview capabilities
- Evaluate candidate performance
- Generate interview reports
- Help users improve interview skills through repeated practice

---

# ✨ Current Features

## 🔐 Authentication Module

Implemented Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Logout
- Current User API

---

## 📊 Dashboard Module

Implemented Features

- Personalized dashboard
- Display authenticated user information
- Start Interview button
- Secure route access

---

## 🎤 Interview Module

Implemented Features

- Interview Setup page
- Interview Room UI
- Interview Result UI
- Complete navigation flow

Interview Flow

Dashboard

↓

Interview Setup

↓

Interview Room

↓

Interview Result

---

## 🧩 Reusable Components

Current reusable UI components

- Navbar
- Button
- Input
- AuthLayout
- ProtectedRoute
- InterviewHeader
- CameraPreview
- QuestionPanel
- InterviewFooter

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React | User Interface |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Axios | API Requests |
| Context API | Authentication State |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Encryption |

---

# 🏗 System Architecture

```
                User
                  │
                  │
                  ▼
        React + TypeScript
                  │
             Axios Requests
                  │
                  ▼
        Express REST API
                  │
       JWT Authentication
                  │
                  ▼
             MongoDB Atlas
```

---

# 🔄 Current Application Workflow

```
Landing Page

↓

Register/Login

↓

JWT Authentication

↓

Dashboard

↓

Interview Setup

↓

Interview Room

↓

Interview Result
```

---

# 📈 Development Status

## ✅ Completed

✔ Monorepo Setup

✔ React + TypeScript

✔ Express Backend

✔ MongoDB Connection

✔ JWT Authentication

✔ Login

✔ Register

✔ Protected Routes

✔ Dashboard

✔ Interview Setup UI

✔ Interview Room UI

✔ Interview Result UI

---

## 🚧 Currently Working On

- Webcam Integration
- Camera Permission
- Microphone Access
- Countdown Timer

---

## 📅 Upcoming Milestones

- Speech-to-Text
- AI Voice Interviewer
- OpenAI Integration
- AI Evaluation
- Resume-Based Interview
- Coding Interview
- Face Detection
- Emotion Analysis
- Interview History
- PDF Report

---

> **Note:** This project is actively under development. The current implementation includes authentication, dashboard, and interview UI flow. AI-powered interview capabilities and evaluation features are planned for future development.