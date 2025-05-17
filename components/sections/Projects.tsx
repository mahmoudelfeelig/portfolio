import { FadeIn } from '../motion/FadeIn';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const items = [
    {
      title: 'Portfolio Website',
      desc: 'Modern React + Tailwind portfolio showcasing projects & skills.',
      link: '#', // add live link later
    },
    {
      title: 'Network Communication System',
      desc: 'Robust TCP/IP client-server architecture in Python.',
    },
    {
      title: 'AI Board Game',
      desc: 'JavaFX game with MinMax AI opponent.',
    },
  ];

  return (
    <section id="projects" className="container-section">
      <FadeIn>
        <h2 className="section-title">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
