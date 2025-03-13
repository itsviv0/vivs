import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences: Experience[] = [
    {
      title: "Data Engineer Intern",
      company: "Hinge Health",
      location: "Bengaluru, IN (On-site)",
      period: "Nov 2024 - March 2025",
      description: [
        "Developed and maintained data pipelines using Databricks and Apache Airflow, improving data processing efficiency by 35%.",
        "Collaborated with cross-functional teams to implement data solutions that supported business decision-making.",
        "Implemented real-time analytics dashboards that increased stakeholder visibility into key metrics for GROWTH Team.",
        "Optimized SQL queries resulting in 40% faster reporting dashboard performance.",
      ],
      skills: ["Databricks", "Apache Airflow", "Python", "SQL", "Datadog"],
    },
    {
      title: "Full-Stack Software Engineer Intern",
      company: "Hinge Health",
      location: "Bengaluru, IN (On-site)",
      period: "Aug 2024 - Oct 2024",
      description: [
        "Built responsive front-end interfaces using React and TypeScript, enhancing user experience for healthcare professionals on CareHub.",
        "Participated in agile development cycles, contributing to sprint planning and retrospectives.",
      ],
      skills: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    },
  ];

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

        <div
          className={`mt-16 text-center transition-all duration-700 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Leadership & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flip-card h-64">
              <div className="flip-card-inner rounded-lg shadow-lg overflow-hidden">
                <div className="flip-card-front bg-navy-light p-6 flex flex-col items-center justify-center text-center">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Joint Secretary
                  </h4>
                  <p className="text-teal">IEEE BMSCE</p>
                </div>
                <div className="flip-card-back bg-teal/10 border border-teal/30 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-slate">
                    Led technology workshops and events, fostering a community
                    of technical excellence and innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card h-64">
              <div className="flip-card-inner rounded-lg shadow-lg overflow-hidden">
                <div className="flip-card-front bg-navy-light p-6 flex flex-col items-center justify-center text-center">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Senior Graphic Designer
                  </h4>
                  <p className="text-teal">UTSAV PHASESHIFT</p>
                </div>
                <div className="flip-card-back bg-teal/10 border border-teal/30 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-slate">
                    Created compelling visual content for college festival,
                    enhancing brand recognition and attendee engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card h-64">
              <div className="flip-card-inner rounded-lg shadow-lg overflow-hidden">
                <div className="flip-card-front bg-navy-light p-6 flex flex-col items-center justify-center text-center">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Hackathon Organizer
                  </h4>
                  <p className="text-teal">ICHack 1.0</p>
                </div>
                <div className="flip-card-back bg-teal/10 border border-teal/30 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-slate">
                    Orchestrated a successful 24-hour hackathon with 200+
                    participants, securing sponsorships and managing logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
