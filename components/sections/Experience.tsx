import { FadeIn } from '../motion/FadeIn';

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <article>
          <h3 className="text-xl font-semibold">
            Working Student — IAV GmbH
          </h3>
          <p className="text-sm text-accentLight/70">
            Berlin, Germany · Oct 2024 – Present
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Conducted data analysis for automotive applications using YOLO</li>
            <li>Built computer-vision pipelines for image-based insights</li>
            <li>Developed web applications with Next.js</li>
            <li>Created iOS apps using Swift</li>
          </ul>
        </article>
      </FadeIn>
    </section>
  );
}
