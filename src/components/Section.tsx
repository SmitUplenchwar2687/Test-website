interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent inline-block">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}