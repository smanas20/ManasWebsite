import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="min-h-screen bg-fixed bg-cover transition-colors duration-500 bg-gradient-to-br dark:from-gray-900 dark:via-slate-800 dark:to-slate-900 from-white via-slate-100 to-slate-200 text-gray-900 dark:text-gray-100"
      >
        <main
          className="bg-white dark:bg-white/10 dark:backdrop-blur-md text-gray-900 dark:text-gray-100 rounded-2xl shadow-2xl px-4 py-6 sm:p-8 max-w-6xl mx-auto mt-6 mb-12"
        >
          <div className="flex justify-end items-center mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} Toggle Mode
            </button>
          </div>

          <section className="text-center mb-10 px-2">
            <img
              src="/profile.JPEG"
              alt="Manas Shukla"
              className="mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">Manas Shukla</h1>
            <p className="text-lg sm:text-xl">Senior Systems Engineer | Automation & Machine Learning</p>
            <p className="text-sm mt-1">Currently open to new opportunities</p>
          </section>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-3 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">About Me</h2>
                <p>I am a Senior Systems Engineer with expertise in automation, robotics, and machine learning. I love solving engineering problems that merge software and hardware at scale.</p>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="projects">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Multistation Machine Automation:</strong> PLCs, HMI, SQL integration at Sensata Technologies.</li>
                  <li><strong>Robot Vision & Motion Planning:</strong> AI object recognition and autonomous robotics at Universal Logic.</li>
                  <li><strong>Multi-Drone Simulation Platform:</strong> ROS & Gazebo flight algorithms for drone swarms.</li>
                  <li><strong>Design Automation Platform:</strong> NX/Isight for turbine blades at Quest Global.</li>
                </ul>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="skills">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Skills</h2>
                <p><strong>Languages:</strong> Python, C++, R, MATLAB, C#, Ladder Logic, Structured Text</p>
                <p><strong>Frameworks/Tools:</strong> TensorFlow, PyTorch, ROS, TwinCAT, Siemens TIA Portal, Git, Docker</p>
                <p><strong>Industrial & DevOps:</strong> Beckhoff, PLCs, SCADA, HMI, MES Integration, AWS, SQL</p>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="experience">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Experience</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Sensata Technologies</strong> – Senior Systems Engineer (2022–2025)</li>
                  <li><strong>Universal Logic Inc.</strong> – Machine Learning Engineer (2018–2022)</li>
                  <li><strong>University of Pennsylvania</strong> – Research Assistant, Real-Time Systems Lab (2017–2018)</li>
                  <li><strong>Quest-Global Inc.</strong> – CAD Developer for Rolls-Royce (2011–2013)</li>
                </ul>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="education">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Education</h2>
                <p><strong>M.S. Mechanical Engineering</strong> – University of Pennsylvania (2014–2016)</p>
                <p><strong>B.Tech Mechanical Engineering</strong> – Vellore Institute of Technology (2007–2011)</p>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="interests">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Interests</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Violin performance and composition</li>
                  <li>Home automation & custom electronics</li>
                  <li>Hiking, nature photography, and exploring national parks</li>
                </ul>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="certifications">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Certifications & Online Courses</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Deep Learning Specialization</strong> – Coursera</li>
                  <li><strong>Generative AI with LLMs</strong> – DeepLearning.AI</li>
                  <li><strong>AI for Robotics</strong> – Georgia Tech / Udacity</li>
                  <li><strong>Machine Learning with Python</strong> – IBM / Coursera</li>
                  <li><strong>Meta Front-End Development</strong> – Coursera</li>
                  <li><strong>Industrial Automation with PLC</strong> – Udemy</li>
                </ul>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Contact</h2>
                <p>Email: manasshukla2011@gmail.com</p>
                <p>Phone: (267) 240–4348</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/shuklam20" className="text-blue-400 underline">linkedin.com/in/shuklam20</a></p>
                <p>GitHub: <a href="https://github.com/shuklam20" className="text-blue-400 underline">github.com/shuklam20</a></p>
                <p><a href="/Manas_Shukla_CV.pdf" download className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition">Download Resume</a></p>
              </CardContent></Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
