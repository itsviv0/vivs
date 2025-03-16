"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Database, Layers } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // Store the current value in a variable
    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored variable in the cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        "Python",
        "TypeScript",
        "C++",
        "Kotlin",
        "JavaScript",
        "PostgreSQL",
        "Dart",
      ],
    },
    {
      category: "Frameworks and Libraries",
      items: [
        "React",
        "Next.js",
        "Shadcn",
        "Tailwind",
        "React-Native",
        "Flutter",
      ],
    },
    {
      category: "Data Engineering",
      items: ["Databricks", "Apache Airflow", "Datadog", "Firebase"],
    },
    {
      category: "Misc",
      items: [
        "Docker",
        "Postman",
        "Git",
        "Retool",
        "Figma",
        "Photoshop",
        "Illustrator",
      ],
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div
            className={`lg:col-span-2 transition-all duration-700 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg mb-6">
              Hello! I'm Vivek, a software engineer and data engineer passionate
              about building exceptional digital experiences. My journey in tech
              began during my college years, where I began development.
            </p>
            <p className="text-lg mb-6">
              I specialize in developing scalable applications with clean,
              maintainable code. Whether it's crafting intuitive user
              interfaces, building robust backends, or designing data pipelines,
              I enjoy the entire process of bringing ideas to life.
            </p>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-72 w-72 mx-auto">
              <div className="absolute inset-0 border-2 border-teal rounded-md translate-x-5 translate-y-5"></div>
              <div className="absolute inset-0 bg-navy-light rounded-md overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-navy-light to-navy-dark p-4 flex items-center justify-center">
                  <span className="text-8xl font-space font-bold text-teal/30">
                    VS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3
          className={`text-2xl font-bold text-white mt-16 mb-8 transition-all duration-700 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Key Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {skills.map((skillSet, index) => (
            <div
              key={skillSet.category}
              className={`skill-card transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {index === 0 && <Code className="text-teal mr-2" size={20} />}
                {index === 1 && <Layers className="text-teal mr-2" size={20} />}
                {index === 2 && (
                  <Database className="text-teal mr-2" size={20} />
                )}
                {index === 3 && <Code className="text-teal mr-2" size={20} />}
                <h4 className="text-white font-space font-bold">
                  {skillSet.category}
                </h4>
              </div>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="text-slate flex items-center">
                    <span className="text-teal mr-2">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
