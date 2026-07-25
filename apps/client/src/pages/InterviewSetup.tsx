import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InterviewSetup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Frontend Developer");
  const [experience, setExperience] = useState("Fresher");
  const [difficulty, setDifficulty] = useState("Easy");
  const [type, setType] = useState("Technical");

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-slate-900 p-8 shadow-xl">
        <h1 className="text-4xl font-bold">
          AI Interview Setup
        </h1>

        <p className="mt-2 text-slate-400">
          Configure your interview before starting.
        </p>

        <div className="mt-8 space-y-6">

          <div>
            <label className="mb-2 block">Role</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl bg-slate-800 p-3"
            >
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Experience</label>

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full rounded-xl bg-slate-800 p-3"
            >
              <option>Fresher</option>
              <option>1-2 Years</option>
              <option>3-5 Years</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Difficulty</label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full rounded-xl bg-slate-800 p-3"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Interview Type</label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl bg-slate-800 p-3"
            >
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>
          </div>

          <button
            onClick={() => navigate("/interview/room")}
            className="mt-4 w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-700"
          >
            🚀 Start Interview
          </button>

        </div>
      </div>
    </div>
  );
}
