
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 \${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <main className="max-w-5xl mx-auto py-10 px-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Manas Shukla</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            Toggle Mode
          </button>
        </div>

        <section className="mb-8 text-center">
          <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-blue-500" />
          <h2 className="text-3xl font-bold">Senior Systems Engineer</h2>
          <p className="text-gray-400">Automation & Machine Learning</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p>
            I’m a systems engineer with experience in industrial automation and machine learning. I’ve worked on advanced robotics,
            data-driven MES integration, and global-scale manufacturing platforms. Always exploring the edge between software and control systems.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Certifications & Courses</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deep Learning Specialization – Coursera</li>
            <li>Generative AI with LLMs – DeepLearning.AI</li>
            <li>AI for Robotics – Georgia Tech / Udacity</li>
            <li>Industrial Automation with PLC – Udemy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p>Email: manasshukla2011@gmail.com</p>
          <p>LinkedIn: <a className="text-blue-400 underline" href="https://linkedin.com/in/shuklam20">linkedin.com/in/shuklam20</a></p>
          <p>GitHub: <a className="text-blue-400 underline" href="https://github.com/shuklam20">github.com/shuklam20</a></p>
          <a
            href="/Manas_Shukla_CV.pdf"
            download
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Download Resume
          </a>
        </section>
      </main>
    </div>
  );
}
