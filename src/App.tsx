import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import { ArrowDown, Code2, Briefcase, Layout } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="mb-6 animate-gradient bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            <h1 className="text-6xl font-bold mb-4">
              Your Name
            </h1>
            <p className="text-2xl">Full Stack Developer</p>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Crafting beautiful and functional web experiences with modern technologies
          </p>
          <a
            href="#about"
            className="animate-bounce inline-block text-black"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-6">
            <Code2 className="w-8 h-8 text-black flex-shrink-0 mt-1" />
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies,
                I enjoy creating elegant solutions to complex problems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-6 mb-8">
            <Briefcase className="w-8 h-8 text-black flex-shrink-0 mt-1" />
            <div className="flex-1">
              <ExperienceCard
                company="Tech Company"
                position="Senior Developer"
                period="2020 - Present"
                description={[
                  "Led development of key features for flagship product",
                  "Mentored junior developers and conducted code reviews",
                  "Implemented CI/CD pipelines reducing deployment time by 50%"
                ]}
              />
              <ExperienceCard
                company="Startup"
                position="Full Stack Developer"
                period="2018 - 2020"
                description={[
                  "Developed and maintained multiple client projects",
                  "Implemented responsive designs and optimized performance",
                  "Collaborated with cross-functional teams to deliver projects on time"
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start space-x-6">
            <Layout className="w-8 h-8 text-black flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title="E-commerce Platform"
                  description="A full-featured e-commerce platform built with React and Node.js"
                  technologies={["React", "Node.js", "MongoDB", "Redux"]}
                  link="https://github.com"
                />
                <ProjectCard
                  title="Task Management App"
                  description="A real-time task management application with collaborative features"
                  technologies={["TypeScript", "Next.js", "Prisma", "Tailwind"]}
                  link="https://github.com"
                />
                <ProjectCard
                  title="Weather Dashboard"
                  description="A weather dashboard that displays forecast data with interactive charts"
                  technologies={["React", "D3.js", "OpenWeather API"]}
                  link="https://github.com"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A modern portfolio website built with React and Tailwind CSS"
                  technologies={["React", "TypeScript", "Tailwind CSS"]}
                  link="https://github.com"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;