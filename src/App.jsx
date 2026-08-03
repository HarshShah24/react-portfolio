import resume from "./resume-contents.json";
import Section from "./components/Section";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import profileImage from "./assets/IMG_3717 (2025-11-21T20_39_42.086).JPG";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  const {
    name,
    quote,
    introduction,
    contact,
    education,
    certifications,
    technicalSkills,
    experience,
    projects,
  } = resume;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <Card className="overflow-hidden border-slate-200 bg-white p-0 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
          <CardContent className="flex flex-col items-center gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
            <img
              src={profileImage}
              alt={name}
              className="h-40 w-40 shrink-0 rounded-lg border border-slate-100 object-cover shadow-lg sm:h-48 sm:w-48"
            />
            <div className="min-w-0 text-center sm:text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Software Engineer Portfolio
              </p>
              <h1 className="mb-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                {name}
              </h1>
              <p className="mb-3 text-base italic text-slate-600">“{quote}”</p>
              <p className="max-w-2xl text-base text-slate-600">
                {introduction}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-slate-50 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              Reach out through the links below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <a
              className="block text-indigo-700 hover:text-indigo-900"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
            <a
              className="block text-indigo-700 hover:text-indigo-900"
              href={`tel:${contact.phone}`}
            >
              {contact.phone}
            </a>
            <a
              className="block text-indigo-700 hover:text-indigo-900"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="block text-indigo-700 hover:text-indigo-900"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="/Harsh Shah.pdf" download className="mt-4 inline-flex">
              <Button type="button">Download Resume</Button>
            </a>
          </CardContent>
        </Card>
      </header>

      <div className="mt-6 grid gap-5">
        <Section title="Technical Skills">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkills?.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-sm text-indigo-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <ExperienceSection experience={experience} />
        </Section>

        <Section title="Projects">
          <ProjectsSection projects={projects} />
        </Section>

        <Section title="Education & Certifications">
          <EducationSection
            education={education}
            certifications={certifications}
          />
        </Section>
      </div>
    </main>
  );
}

export default App;
