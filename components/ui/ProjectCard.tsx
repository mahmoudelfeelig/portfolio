import { CodeBracketIcon } from '@heroicons/react/24/solid';

interface Props {
  title: string;
  desc: string;
  link?: string;
}

export default function ProjectCard({ title, desc, link }: Props) {
  const Wrapper = link ? 'a' : 'div';
  return (
    <Wrapper
      {...(link && { href: link, target: '_blank' })}
      className="group rounded-lg border border-accentLight/10 p-5 transition hover:border-accentGreen hover:shadow-lg"
    >
      <h4 className="flex items-center gap-2 font-semibold">
        <CodeBracketIcon className="h-5 w-5 text-accentGreen transition group-hover:scale-110" />
        {title}
      </h4>
      <p className="mt-2 text-sm text-accentLight/80">{desc}</p>
    </Wrapper>
  );
}
