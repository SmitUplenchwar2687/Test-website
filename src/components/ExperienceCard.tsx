interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export default function ExperienceCard({
  company,
  position,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="glass rounded-xl p-6 mb-6 hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-xl font-semibold text-black">{position}</h3>
      <div className="text-gray-700 font-medium mb-2">{company}</div>
      <div className="text-gray-500 text-sm mb-4">{period}</div>
      <ul className="space-y-2 text-gray-600">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-black mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}