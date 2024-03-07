import { Body } from '../typography/Body';
import { Title } from '../typography/Title';

interface SectionProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
}

export function PortfolioSection({ title, desc, children }: SectionProps) {
  return (
    <>
      <Title>{title}</Title>
      <div className="mb-4">{desc && <Body className="mt-1">{desc}</Body>}</div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </>
  );
}
