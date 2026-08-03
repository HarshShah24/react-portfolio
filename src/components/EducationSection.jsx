function EducationSection({ education, certifications }) {
  return (
    <div className="grid gap-4">
      {education?.length > 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <h3 className="text-lg font-semibold text-slate-900">Education</h3>
          {education.map((item) => (
            <div
              key={item.degree}
              className="mt-3 rounded-lg border border-slate-100 bg-slate-50 p-3"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  {item.degree}
                </p>
                {item.year ? (
                  <span className="text-sm text-slate-500">{item.year}</span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-slate-600">{item.school}</p>
            </div>
          ))}
        </div>
      )}

      {certifications?.length > 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            Certifications
          </h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {certifications.map((certification) => (
              <li key={certification.name}>
                <a
                  className="text-indigo-700 hover:text-indigo-900"
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {certification.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EducationSection;
