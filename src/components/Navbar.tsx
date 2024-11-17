import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="glass mx-4 mt-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
                <a href="#experience" className="text-gray-700 hover:text-black transition-colors">Experience</a>
                <a href="#projects" className="text-gray-700 hover:text-black transition-colors">Projects</a>
                <div className="flex items-center space-x-4 ml-4 border-l border-gray-300 pl-4">
                  <a href="https://github.com" className="text-gray-700 hover:text-black transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" className="text-gray-700 hover:text-black transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:your@email.com" className="text-gray-700 hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-black">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-black">About</a>
              <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-black">Experience</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-black">Projects</a>
              <div className="flex space-x-4 px-3 py-2">
                <a href="https://github.com" className="text-gray-700 hover:text-black">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-gray-700 hover:text-black">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:your@email.com" className="text-gray-700 hover:text-black">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}