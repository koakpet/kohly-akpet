import Link from "next/link";

const skills = [
  {
    name: "Business Intelligence Analyst",
    tag: "turning data into decisive business decisions",
    color: "[#e7a33e]",
    tools: [
      "Excel — PivotTables, Power Query, formulas",
      "Power BI — data modelling, DAX, dashboards",
      "SQL — querying, joins, aggregations",
      "Data cleaning & transformation",
    ],
  },
  {
    name: "Fullstack Development",
    tag: "turning decisions into web applications",
    color: "[#4fa9a0]",
    tools: [
      "JavaScript / TypeScript",
      "React & Next.js",
      "Node.js & REST APIs",
      "Git & version control",
    ],
  },
];

export default function Skills() {
  return (
    <>
      <section id="projects" className="my-21">
        <div className="flex flex-col gap-2">
          <div className="mono text-sm tracking-widest text-[#9aa5ac]">
            02 - Skills
          </div>
          <div className="text-2xl font-black tracking-wider">
            Two toolkits, one workflow
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 mt-6 gap-6">
          {skills.map((skill) => {
            return (
              <div
                key={skill.name}
                className={`col-span-1 p-6 border border-[#2b3541] bg-[#1e2731] border-t-3 border-t-${skill.color} rounded-sm`}
              >
                <div>
                  <p className="text-lg font-bold">{skill.name}</p>

                  <p className="mono text-[#9aa5ac] text-xs font-extralight">
                    {skill.tag}
                  </p>
                </div>

                <div>
                  <ul className="list-disc mono text-sm tracking-wide p-6 flex flex-col gap-6">
                    {skill.tools.map((tool) => {
                      return <li key={tool}>{tool}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full overflow-x-auto scrollbar-none  mt-6">
          <div className="md:hidden flex gap-3 w-max">
            {skills.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className={`w-[81vw] p-6 border border-[#2b3541] bg-[#1e2731] border-t-3 border-t-${skill.color} rounded-sm`}
                >
                  <div>
                    <p className="text-lg font-bold">{skill.name}</p>

                    <p className="mono text-[#9aa5ac] text-xs font-extralight">
                      {skill.tag}
                    </p>
                  </div>

                  <div>
                    <ul className="list-disc mono text-sm tracking-wide p-6 flex flex-col gap-6">
                      {skill.tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
