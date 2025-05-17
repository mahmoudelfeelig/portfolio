import { BriefcaseIcon } from '@heroicons/react/24/solid';

interface Props {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export default function ExperienceCard({ company, role, period, bullets }: Props) {
  return (
    <div className="rounded-lg bg-primaryMid/20 p-6 backdrop-blur">
      <div className="flex items-center gap-3 text-accentLight">
        <BriefcaseIcon className="h-6 w-6 flex-none text-accentGreen" />
        <div>
          <h3 className="font-semibold">{role}</h3>
          <p className="text-sm text-accentLight/70">
            {company} · {period}
          </p>
        </div>
      </div>

      <ul className="mt-4 list-disc list-inside space-y-2 text-sm leading-6">
        {bullets.map(b => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}