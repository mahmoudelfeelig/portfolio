import { FadeIn } from '../motion/FadeIn';
import ExperienceCard from '../ui/ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="container-section">
      <FadeIn>
        <h2 className="section-title">Experience</h2>

        <div className="grid gap-8">
          <ExperienceCard
            company="IAV GmbH"
            role="Working Student – Data & CV"
            period="Oct 2024 – Present"
            bullets={[
              'Built computer-vision pipelines with YOLO',
              'Developed data analytics dashboards',
              'Created internal tools in Next.js & Swift',
            ]}
          />
        </div>
      </FadeIn>
    </section>
  );
}
