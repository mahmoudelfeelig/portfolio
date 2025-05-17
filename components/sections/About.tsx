import { FadeIn } from '../motion/FadeIn';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="leading-7 text-neutr`al-300">
          I’m Mahmoud, a full-stack engineer who …
        </p>
      </FadeIn>
    </section>
  );
}