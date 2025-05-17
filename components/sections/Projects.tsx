import { FadeIn } from '../motion/FadeIn';

export default function Projects() {
  const items = [
    {
      title: 'Personal Portfolio Website (2025)',
      detail:
        'Designed and developed a responsive portfolio using modern web technologies, highlighting front-end skills and personal branding.',
    },
    {
      title: 'Network Communication System (2024)',
      detail:
        'Built a robust client-server architecture in Python using TCP/IP sockets; improved reliability for multiple concurrent clients.',
    },
    {
      title: 'AI Board Game with GUI (2024)',
      detail:
        'Implemented MinMax AI and smooth JavaFX GUI to create a competitive strategy board game.',
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-8">
          {items.map(p => (
            <div key={p.title}>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-7 text-accentLight/90">{p.detail}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
