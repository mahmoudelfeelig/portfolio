import { FadeIn } from '../motion/FadeIn';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <ul className="space-y-4 text-lg">
          <li>
            📧 
            <a
              href="mailto:mahmooudelfeelig@gmail.com"
              className="underline hover:text-accentMute"
            >
              mahmoudelfeelig@gmail.com
            </a>
          </li>
          <li>📱 +49 1523 8498263</li>
          <li>
            💻 
            <a
              href="https://github.com/mahmoudelfeelig"
              className="underline hover:text-accentMute"
            >
              github.com/mahmoudelfeelig
            </a>
          </li>
          <li>
            🌐 
            <a
              href="https://elfeel.me"
              className="underline hover:text-accentMute"
            >
              elfeel.me
            </a>
          </li>
        </ul>
      </FadeIn>
    </section>
  );
}
