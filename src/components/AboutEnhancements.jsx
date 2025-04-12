import React from "react";

export default function AboutEnhancements() {
  return (
    <section className="space-y-12 p-4">
      {/* Highlights Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 grid sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Career Highlights</h2>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-800 dark:text-gray-200">
            <li>10+ years of experience in automation & robotics</li>
            <li>Expert in PLCs, SQL, ROS, AI/ML, and real-time systems</li>
            <li>Industry: Aerospace, Automotive, Manufacturing, Research</li>
            <li>40+ GitHub repositories, 10+ public ML/AI projects</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Tech Stack Snapshot</h2>
          <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-orange-400 text-white px-2 py-1 rounded-full">Automation</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full">Control Systems</span>
                  <span className="bg-purple-400 text-white px-2 py-1 rounded-full">Machine Learning</span>
                  <span className="bg-red-600 text-white px-2 py-1 rounded-full">Robotics</span>
                  <span className="bg-blue-400 text-white px-2 py-1 rounded-full">Deep Learning</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full">Python</span>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded-full">C++</span>
                  <span className="bg-red-800 text-white px-2 py-1 rounded-full">SQL</span>
                  <span className="bg-yellow-600 text-white px-2 py-1 rounded-full">MATLAB</span>
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full">ROS</span>
                  <span className="bg-yellow-700 text-white px-2 py-1 rounded-full">PLC</span>
          </div>
        </div>
      </div>

      {/* Purpose Statement */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Purpose</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          I’m passionate about building automation systems that solve real-world problems — especially at the intersection of hardware and intelligence. My mission is to simplify complexity, scale performance, and drive innovation through automation and applied machine learning.
        </p>
      </div>

      {/* Why Me */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Why Me</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          With a rare combination of mechanical intuition and AI expertise, I bridge the gap between the physical and digital worlds. I’ve built control systems for production lines and trained deep learning models for autonomous navigation. I don’t just deliver projects — I build scalable, resilient solutions.
        </p>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">What Others Say</h2>
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            “I have known Manas as a fellow colleague of mine during our time at the University of Pennsylvania. 
            Having interacted with Manas, I have come to know him as a very disciplined and motivated Mechanical Engineer. 
            His strengths lie in his ability to break bigger tasks into action plans and device methodological ways to find solutions. 
            His knowledge and skills as a Mechanical Engineer are also very strong. I would definitely recommend Manas as a strong team player who would add value to a team. 
            I wish him the best in his professional endeavors. ”
            <br /><span className="block mt-1 text-xs font-semibold">– Akshay Varik, Sr. HW Development Engineer at Nokia</span>
          </blockquote>
          <blockquote className="border-l-4 border-green-500 pl-4 italic">
            “Manas is an amazing, creative and helpful person I've had pleasure working with him. We were team-mates at QuEST. 
            Thinking out of the box makes him unique in the field of KBE (Knowledge Based Engineering); 
            which he always implemented to give the best solution to any challenging project from the customers. 
            That is why he was the all time favorite of the customers. All the best. ”
            <br /><span className="block mt-1 text-xs font-semibold">– Tarun Choudhary, Software Engineer at Siemens</span>
          </blockquote>
        </div>
      </div>

      {/* ... remaining tabs and content ... */}
      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-2">Let’s Build the Future Together</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">I’m actively seeking impactful opportunities in automation and machine learning.</p>
        <div className="flex justify-center gap-4">
          <a href="/Manas_Shukla_CV.pdf" download className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">Download Resume</a>
        </div>
      </div>


    </section>
  );
}