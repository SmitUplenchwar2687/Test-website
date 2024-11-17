interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-sm glass border border-gray-300 text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          className="text-black hover:text-gray-700 font-medium inline-flex items-center group"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      )}
    </div>
  );
}