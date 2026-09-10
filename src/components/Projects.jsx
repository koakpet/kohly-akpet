import Link from "next/link";

const projects = [
  {
    name: "CoA-MPCS Member Portal",
    link: "https://coampcs-portal.vercel.app/",
    description:
      "A web application for the Multi-Purpose Cooperative Societies of staff of all the Court of Appeal Divisions, covering member registration, contribution tracking, and loan management.",
    skills: ["NextJS", "React", "API", "PostgreSQL"],
  },
  {
    name: "Sedek Doors and Cabinet",
    link: "https://www.sedekdoors.com.ng/",
    description:
      "A Nigerian door manufacturer and retailer, with operations spanning Calabar, Lagos, and Port Harcourt. The site showcases their product catalog with photo galleries for each style, plus a contact form and direct phone/WhatsApp lines. It's built as a simple lead-generation and catalog site rather than an e-commerce store: customers browse styles and inquire directly rather than checking out online, with detailed terms covering deposits, production timelines (8–12 weeks), and returns.",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="flex flex-col gap-2">
          <div className="mono text-sm tracking-widest text-[#9aa5ac]">
            03 - Projects
          </div>
          <div className="text-2xl font-black tracking-wider">
            Selected work
          </div>
        </div>

        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="grid grid-cols-6 mt-6 py-12 border-y border-[#1e2731]"
            >
              <div className="col-span-2">
                <Link href={project.link}>
                  <span className="mono text-[#4fa9a0] text-sm">
                    {project.name}
                  </span>
                </Link>
              </div>

              <div className="col-span-4 flex flex-col gap-3">
                <div className="text-lg font-semibold">{project.name}</div>
                <div className="text-[#9aa5ac] tracking-wide">
                  {project.description}
                </div>
                <div className="mono text-sm flex gap-3">
                  {project.skills.map((skill) => {
                    return (
                      <div
                        key={skill}
                        className="py-1 px-2 bg-[#1e2731] border border-[#2b3541] rounded-sm"
                      >
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
