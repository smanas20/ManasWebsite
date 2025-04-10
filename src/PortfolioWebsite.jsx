import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sun, Moon } from "lucide-react";

export default function PortfolioWebsite() {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen bg-fixed bg-cover transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 via-white to-slate-100 text-gray-800"
      }`}
    >
      <main
        className={`${
          darkMode
            ? "bg-white/10 backdrop-blur-md text-gray-100"
            : "bg-white shadow-md text-gray-900"
        } rounded-2xl shadow-2xl px-4 py-6 sm:p-8 max-w-6xl mx-auto mt-6 mb-12`}
      >
        <div className="flex justify-end items-center mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            Toggle Mode
          </button>
        </div>

        <section className="text-center mb-10 px-2">
          <img
            src="/profile.jpg"
            alt="Manas Shukla"
            className="mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">Manas Shukla</h1>
          <p className="text-lg sm:text-xl">Senior Systems Engineer | Automation & Machine Learning</p>
          <p className="text-sm mt-1">Currently open to new opportunities</p>
        </section>

        <Tabs defaultValue="home" onValueChange={(val) => setActiveTab(val)}>
          <TabsList className="flex flex-wrap justify-center gap-3 mb-8">
            <TabsTrigger value="home">About</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">About Me</h2>
                <p>
                  I am a Senior Systems Engineer with experience in automation, robotics, and machine learning. I've led development of complex control systems, built scalable ML solutions for manufacturing, and worked across global teams to deliver robust, intelligent automation tools. I enjoy solving engineering challenges that bridge software and physical systems.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Projects</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Multistation Machine Automation:</strong> Developed control systems with PLCs, HMI, and SQL integration at Sensata Technologies.</li>
                  <li><strong>Robot Vision & Motion Planning:</strong> Deployed AI-based object recognition and autonomous control at Universal Logic.</li>
                  <li><strong>Multi-Drone Simulation Platform:</strong> Designed flight algorithms using ROS and Gazebo for collaborative drone swarms.</li>
                  <li><strong>Cost Optimization Platform:</strong> Delivered NX/Isight design automation tools for turbine blades at Quest Global.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Skills</h2>
                <p><strong>Languages:</strong> Python, C++, R, MATLAB, C#, Ladder Logic, Structured Text</p>
                <p><strong>Frameworks/Tools:</strong> TensorFlow, PyTorch, ROS, TwinCAT, Siemens TIA Portal, Git, Docker</p>
                <p><strong>Industrial & DevOps:</strong> Beckhoff, PLCs, SCADA, HMI, MES Integration, AWS, SQL</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Experience</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Sensata Technologies</strong> – Senior Systems Engineer (2022–2025)</li>
                  <li><strong>Universal Logic Inc.</strong> – Machine Learning Engineer (2018–2022)</li>
                  <li><strong>University of Pennsylvania</strong> – Research Assistant, Real-Time Systems Lab (2017–2018)</li>
                  <li><strong>Quest-Global Inc.</strong> – CAD Developer for Rolls-Royce (2011–2013)</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Education</h2>
                <p><strong>M.S. Mechanical Engineering</strong> – University of Pennsylvania (2014–2016)</p>
                <p><strong>B.Tech Mechanical Engineering</strong> – Vellore Institute of Technology (2007–2011)</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interests">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Interests</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Playing and composing violin music</li>
                  <li>Building custom keyboards and home IoT devices</li>
                  <li>Hiking, photography, and exploring national parks</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certifications">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Certifications & Online Courses</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Deep Learning Specialization</strong> – Coursera</li>
                  <li><strong>Generative AI with Large Language Models</strong> – DeepLearning.AI</li>
                  <li><strong>Machine Learning with Python</strong> – IBM / Coursera</li>
                  <li><strong>Industrial Automation with PLC</strong> – Udemy</li>
                  <li><strong>Meta Front-End React Certification</strong> – Coursera</li>
                  <li><strong>AI for Robotics</strong> – Udacity</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <img src="/photos/photo1.jpg" alt="Gallery 1" className="rounded-lg shadow-md" />
                  <img src="/photos/photo2.jpg" alt="Gallery 2" className="rounded-lg shadow-md" />
                  <img src="/photos/photo3.jpg" alt="Gallery 3" className="rounded-lg shadow-md" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className={darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Contact</h2>
                <p>Email: manasshukla2011@gmail.com</p>
                <p>Phone: (267) 240–4348</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/shuklam20" className="underline text-blue-500">linkedin.com/in/shuklam20</a></p>
                <p>GitHub: <a href="https://github.com/shuklam20" className="underline text-blue-500">github.com/shuklam20</a></p>
                <a
                  href="/Manas_Shukla_CV.pdf"
                  download
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                >
                  Download Resume
                </a>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
