import clsx from 'clsx';

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={clsx('flex flex-1 justify-around px-4', className)}>
      <div className="flex w-full max-w-breakpoint-md flex-col">{children}</div>
    </div>
  );
}
