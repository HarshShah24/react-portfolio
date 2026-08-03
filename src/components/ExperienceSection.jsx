function ExperienceSection({ experience }) {
  if (!experience?.length) {
    return null;
  }

  return (
    <div className="grid gap-4">
      {experience.map((item) => (
        <article key={`${item.Company}-${item.role}`} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
            <span className="text-sm text-slate-500">{item.timeline}</span>
          </div>
          <p className="mt-1 text-sm text-slate-600">
            {item.Company} • {item.location}
          </p>
          <p className="mt-1 text-sm text-slate-500">{item.duration}</p>
        </article>
      ))}
    </div>
  );
}

export default ExperienceSection;
