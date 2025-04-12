
import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ProjectsHybrid from "@/components/ProjectsHybrid";
import AboutEnhancements from "@/components/AboutEnhancements";

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <head>
        <title>Manas Shukla - Automation & ML Portfolio</title>
        <meta name="description" content="Portfolio of Manas Shukla - Senior Systems Engineer specializing in Automation, Robotics, and Machine Learning." />
        <meta name="keywords" content="Manas Shukla, Automation Engineer, Robotics, Machine Learning, PLC, SCADA, HMI, Python, ROS, Penn" />
        <meta name="author" content="Manas Shukla" />
        <meta property="og:title" content="Manas Shukla - Automation & ML Portfolio" />
        <meta property="og:description" content="Explore Manas's work in industrial automation, robotics, and machine learning." />
        <meta property="og:url" content="https://manaswebsite.vercel.app" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Manas Shukla",
          "url": "https://manaswebsite.vercel.app",
          "sameAs": [
            "https://linkedin.com/in/shuklam20",
            "https://github.com/shuklam20"
          ],
          "jobTitle": "Senior Systems Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Sensata Technologies"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "University of Pennsylvania"
          },
          "knowsAbout": ["Automation", "Machine Learning", "Robotics", "PLCs", "ROS", "SCADA"]
        }` }} />
      </head>

      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-fixed bg-cover transition-colors duration-500 bg-gradient-to-br dark:from-gray-900 dark:via-slate-800 dark:to-slate-900 from-white via-slate-100 to-slate-200 text-gray-900 dark:text-gray-100">
          <main className="bg-white dark:bg-white/10 dark:backdrop-blur-md text-gray-900 dark:text-gray-100 rounded-2xl shadow-2xl px-4 py-6 sm:p-8 max-w-6xl mx-auto mt-6 mb-12">
            <div className="flex justify-end items-center mb-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
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
              <p className="inline-block mt-2 px-3 py-1 text-sm font-medium text-green-700 bg-green-200 dark:text-green-200 dark:bg-green-700 rounded-full">
                Available for Work
              </p>
              <p className="text-lg sm:text-xl mt-2">Senior Systems Engineer | Automation & Machine Learning</p>
              <p className="text-sm mt-1">Currently open to new opportunities</p>
            </section>

            <Tabs defaultValue="about" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-3 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="interests">Interests</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card><CardContent>
                  <AboutEnhancements />
                </CardContent></Card>
              </TabsContent>

            <TabsContent value="experience">
              <Card><CardContent>
                <h2 className="text-2xl font-bold mb-2">Experience</h2>
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    <strong>Sensata Technologies</strong>: Senior Systems Engineer (January 2022 – March 2025)
                    <p>Led automation design for multistation manufacturing setups. Developed and deployed industrial control systems using Siemens TIA Portal, Beckhoff TwinCAT, and SQL-based MES integrations, improving line efficiency by 20%.</p>
                  </li>
                  <li>
                    <strong>Universal Logic Inc.</strong>: Machine Learning Engineer (May 2018 – January 2022)
                    <p>Developed and deployed AI-based robotic vision systems for material handling. Implemented object detection pipelines using TensorFlow and trained deep neural nets for real-time pick-and-place applications, reducing manual intervention by 35%.</p>
                  </li>
                  <li>
                    <strong>University of Pennsylvania</strong>: Research Assistant, Real-Time Systems Lab (June 2017 – May 2018)
                    <p>Designed flight coordination algorithms for multi-drone simulation environments using ROS and Gazebo. Conducted research on real-time path planning and collision avoidance in dynamic obstacle environments.</p>
                  </li>
                  <li>
                    <strong>University of Pennsylvania</strong>: Graduate Research Assistant, Vagelos Lab (May 2016 – June 2017)
                    <p>Developed a 3D mathematical model using the Lattice Boltzmann Method (LBM) to analyze platelet aggregation in blood flow. Applied parallelization techniques to reduce simulation time by 25%. Implemented local mesh refinement for micro-particle tracking, increasing simulation resolution by 10%. Wrote high-performance C++ code and visualized data using Tecplot and ParaView.</p>
                  </li>
                  <li>
                    <strong>Quest-Global Inc</strong>: Geometry Automation Engineer (June 2017 – May 2018)
                    <p>Automated turbine blade design workflows using NX and Isight. Created custom CAD utilities and scripts for blade geometry generation, reducing design time by 30% while improving consistency across CAD pipelines.</p>
                  </li>
                </ul>
              </CardContent></Card>
            </TabsContent>

              <TabsContent value="projects">
                <Card><CardContent>
                  <ProjectsHybrid />
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

              <TabsContent value="education">
                <Card><CardContent>
                  <h2 className="text-2xl font-bold mb-2">Education</h2>
                  <p><strong>M.S. Mechanical Engineering</strong> – University of Pennsylvania, Philadelphia, PA, USA (August 2014 – May 2016)</p>
                  <p><strong>B.Tech Mechanical Engineering</strong> – Vellore Institute of Technology, Vellore, TN, India (July 2007 – June 2011)</p>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="interests">
                <Card><CardContent>
                  <h2 className="text-2xl font-bold mb-2">Interests</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Playing violin</li>
                    <li>Cooking, enjoying time with my son</li>
                    <li>Running, boxing and working out</li>
                    <li>Hiking, nature photography, and exploring trails near and far</li>
                  </ul>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="certifications">
                <Card><CardContent>
                  <h2 className="text-2xl font-bold mb-2">Certifications & Online Courses</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Deep Learning Specialization</strong> – Coursera</li>
                    <li><strong>Car Driving NanoDegree</strong> – Udacity</li>
                    <li><strong>Generative AI with LLMs</strong> – DeepLearning.AI</li>
                    <li><strong>AI for Robotics</strong> – Georgia Tech / Udacity</li>
                    <li><strong>Machine Learning with Python</strong> – IBM / Coursera</li>
                    <li><strong>Meta Front-End Development</strong> – Coursera</li>
                    <li><a href="https://www.udemy.com/course/from-wire-to-plc-a-to-z-compilation/"><strong>From Wire to PLC , A Bootcamp In Industrial Automation</strong> – Udemy</a></li>
                  </ul>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="contact">
                <Card><CardContent>
                  <h2 className="text-2xl font-bold mb-2">Contact</h2>
                  <p>Email: manasshukla2011@gmail.com</p>
                  <p>Phone: (267) 240–4348</p>
                  <p>LinkedIn: <a href="https://linkedin.com/in/shuklam20" className="text-blue-400 underline">linkedin.com/in/shuklam20</a></p>
                  <p>GitHub: <a href="https://github.com/smanas20" className="text-blue-400 underline">github.com/smanas20</a></p>
                  <p><a href="/Manas_Shukla_CV.pdf" download className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition">Download Resume</a></p>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </>
  );
}
