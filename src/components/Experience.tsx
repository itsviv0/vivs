"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import experiences from "../data/experience";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
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

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>

        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-navy-light rounded-lg p-6 border border-teal/10 hover:border-teal/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-teal font-medium">{exp.company}</h4>
                  </div>

                  <div className="mt-2 md:mt-0 md:text-right">
                    <div className="flex items-center text-slate mb-1 md:justify-end">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-slate md:justify-end">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-slate flex">
                      <span className="text-teal mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-navy rounded-full text-xs text-teal border border-teal/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
