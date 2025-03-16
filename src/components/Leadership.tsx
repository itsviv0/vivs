"use client";

import { useEffect, useState, useRef } from "react";

const Leadership = () => {
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
    <section
      id="leadership"
      ref={sectionRef}
      className="container py-20 relative"
    >
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
            <div className="flip-card-inner rounded-lg shadow-lg">
              <div className="flip-card-front bg-navy-light p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Joint Secretary
                </h4>
                <p className="text-teal">IEEE BMSCE</p>
              </div>
              <div className="flip-card-back bg-teal/10 border border-teal/30 p-6 flex flex-col items-center justify-center text-center">
                <p className="text-slate">
                  Led technology workshops and events, fostering a community of
                  technical excellence and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card h-64">
            <div className="flip-card-inner rounded-lg shadow-lg">
              <div className="flip-card-front bg-navy-light p-6">
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
            <div className="flip-card-inner rounded-lg shadow-lg">
              <div className="flip-card-front bg-navy-light p-6">
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
    </section>
  );
};

export default Leadership;
