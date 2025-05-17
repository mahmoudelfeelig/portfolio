import { ArrowUpIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="mt-24 py-12 text-center text-sm bg-primaryMid/10">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full
                   bg-accentGreen/20 hover:bg-accentGreen/40 transition"
      >
        <ArrowUpIcon className="h-5 w-5 text-accentLight" />
      </button>
      <p className="flex items-center justify-center gap-2">
        <EnvelopeIcon className="h-4 w-4" />
        <a
          href="mailto:mahmooudelfeelig@gmail.com"
          className="underline hover:text-accentGreen"
        >
          mahmooudelfeelig@gmail.com
        </a>
      </p>
      <p className="mt-2 opacity-60">© {new Date().getFullYear()} Mahmoud Elfeel</p>
    </footer>
  );
}
