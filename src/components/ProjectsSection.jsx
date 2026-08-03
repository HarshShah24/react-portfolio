import { useState } from "react";

function formatLabel(label) {
  return label.replace(/([A-Z])/g, " $1").trim();
}

function ProjectsSection({ projects }) {
  const [openProject, setOpenProject] = useState(null);

  if (!projects?.length) {
    return null;
  }

  const toggleProject = (title) => {
    setOpenProject((current) => (current === title ? null : title));
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
      {projects.map((project) => {
        const isOpen = openProject === project.title;

        return (
          <article
            key={project.title}
            className="rounded-[20px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-6 text-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleProject(project.title)}
              className="flex w-full flex-col items-start gap-2 text-left"
            >
              <div className="flex w-full items-center justify-between gap-2">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-200">
                  {project.company}
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
                  {isOpen ? "Hide" : "Details"}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-sm text-indigo-100">
                {project.role}
              </span>
            </button>

            {!isOpen ? (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-slate-200">
                  {project.contributions[0]?.description ??
                    "Tap to view the full project story."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(project.technologies?.[0] ?? {}).flatMap(
                    ([key, values]) =>
                      values.slice(0, 2).map((value) => (
                        <span
                          key={`${key}-${value}`}
                          className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-slate-100"
                        >
                          {value}
                        </span>
                      )),
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                <ul className="space-y-2 text-sm text-slate-200">
                  {project.contributions.map((contribution) => (
                    <li key={contribution.description} className="flex gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-300" />
                      <span>{contribution.description}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid gap-3">
                  {Object.entries(project.technologies?.[0] ?? {}).map(
                    ([key, values]) => (
                      <div
                        key={key}
                        className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm"
                      >
                        <h4 className="mb-1 text-sm font-semibold text-white">
                          {formatLabel(key)}
                        </h4>
                        <p className="text-sm text-slate-200">
                          {values.join(", ")}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default ProjectsSection;
