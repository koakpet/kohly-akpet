const experience = [
  {
    company: "Fairy Express Logistics",
    role: "Data Analyst & Business Development Executive",
    time: "May 2024 - Present",
    achievements: [
      "Built the company's first centralized Power BI dashboard for monitoring logistics, financial and business performance which improved management visibility into delivery operations, revenue trends, and operational performance.",
    ],
  },
  {
    company: "Court of Appeal",
    role: "Information Management Officer",
    time: "Sept. 2021 - Mar. 2024",
    achievements: [
      "Managed analysis and reporting of records to improve accuracy, accountability, and operational visibility; which included introducing Excel-based reporting that reduced manual record preparation and improved reporting accuracy, improved visibility into cooperative financial and operational performance through structured dashboards and reports, and enhancing data quality and record management by implementing standardized data collection and validation practices.",
      "Designed and created the CoAMPCS-Portal to manage members financial record and transaaction, which reduced human error by 96% and drastically increased productivity and efficency",
    ],
  },
  {
    company: "Serinya International Services",
    role: "Operations Manager",
    time: "Jan. 2017 - Aug. 2021",
    achievements: [
      "Managed production, sales, and inventory data to improve operational efficiency and planning; which included monitoring production workflows and identifying process improvement opportunities, preparing weekly and monthly management reports to support decision-making, and working with management to optimize inventory levels and reduce material waste. ",
      "Tracked sales performance and customer orders to improve operational planning; documented business processes and recommended workflow improvements; supported budgeting and operational planning with data-driven insights; and collaborated with production and administrative teams to improve data accuracy and reporting.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <section id="experience" className="my-21">
        <div className="flex flex-col gap-2">
          <div className="mono text-sm tracking-widest text-[#9aa5ac]">
            04 - Experience
          </div>
          <div className="text-2xl font-black tracking-wider">
            Where I have worked
          </div>
        </div>

        {experience.map((experience) => {
          return (
            <div
              key={experience.company}
              className="mt-6 mx-6 flex gap-9 items-center"
            >
              <div className="bg-[#e7a33e] h-3 w-3 rounded-lg"></div>
              <div>
                <p className="mono text-[#9aa5ac] text-xs font-extralight">
                  {experience.time}
                  <br />
                  <span className="text-white text-base tracking-wide font-semibold">
                    {experience.role}
                  </span>

                  <br />
                  <span className="font-light">{experience.company}</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
