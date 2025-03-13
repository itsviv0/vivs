import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <p
            className={`transition-all duration-700 ease-out text-teal text-lg md:text-xl mb-5 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Hi, my name is
          </p>

          <h1
            className={`transition-all duration-700 ease-out text-5xl md:text-7xl font-bold text-white mb-4 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Vivek G Sindagi.
          </h1>

          <h2
            className={`transition-all duration-700 ease-out text-4xl md:text-6xl font-bold text-purple mb-8 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            I create digital experiences.
          </h2>

          <div
            className={`transition-all duration-700 ease-out mb-12 text-lg md:text-xl text-slate max-w-2xl ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="">
              <span className="">I build apps.</span>
            </div>
          </div>

          <a
            href="#projects"
            className={`transition-all duration-700 ease-out inline-block border-2 border-teal text-teal px-8 py-4 rounded font-space font-medium text-lg hover:bg-teal/10 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            Check out my work
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="block text-teal hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-64 h-64 bg-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-[10%] w-80 h-80 bg-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
