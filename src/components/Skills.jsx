import Link from "next/link";

const skills = [
  {
    name: "Business Intelligence Analyst",
    tag: "turning data into decisive business decisions",
    color: "#e7a33e",
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
    color: "#4fa9a0",
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
      <section id="projects">
        <div className="flex flex-col gap-2">
          <div className="mono text-sm tracking-widest text-[#9aa5ac]">
            02 - Skills
          </div>
          <div className="text-2xl font-black tracking-wider">
            Two toolkits, one workflow
          </div>
        </div>

        {skills.map((skill) => {
          return (
            <div key={skill.name} className="grid grid-cols-2 mt-6 gap-3">
              <div
                className={`col-span-1 border border-[#1e2731] border-t-2 border-t-${skill.color} `}
              >
                <p>
                  {skill.name}
                  <br />
                  <span className="mono text-sm">{skill.tag}</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
