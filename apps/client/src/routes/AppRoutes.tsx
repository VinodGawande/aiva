import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import InterviewSetup from "../pages/InterviewSetup";
import InterviewRoom from "../pages/InterviewRoom";
import InterviewResult from "../pages/InterviewResult";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[120px]" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview/setup"
            element={
              <ProtectedRoute>
                <InterviewSetup />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview/room"
            element={
              <ProtectedRoute>
                <InterviewRoom />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview/result"
            element={
              <ProtectedRoute>
                <InterviewResult />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

