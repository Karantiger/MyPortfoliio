type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
      <div className="mt-6 w-12 h-px bg-primary" />
    </div>
  );
}
