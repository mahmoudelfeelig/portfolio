import { FadeIn } from '../motion/FadeIn';

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="leading-7 text-accentLight/90">
          Motivated Networking Engineering student (5ᵗʰ semester) with hands-on
          experience in data analysis, computer vision, web, and app
          development. Passionate about applying technical knowledge to
          real-world problems and recipient of multiple academic scholarships
          for outstanding performance.
        </p>
      </FadeIn>
    </section>
  );
}