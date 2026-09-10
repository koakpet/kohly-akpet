const article = [
  {
    p_no: "1",
    text: "I work at the point where data and software meet. Day to day, that means modelling and visualizing operational data in Power BI, writing SQL to pull the numbers that actually answer a question, and — on the development side — building the tools that put those answers in front of the people who need them.",
  },
  {
    p_no: "2",
    text: "I currently work as a Data Analyst & Business Development Executive, building dashboards that track logistics, sales, and operational KPIs. Alongside that, I lead a small ICT team, and I hold a background in project management that shapes how I plan and ship work.",
  },
];

const data = [
  {title: "2024", description: "Business Intelligence Analsyt since"},
  {title: "6", description: "ICT team members led"},
  {title: "3", description: "Professional certifications"},
];

export default function About() {
  return (
    <>
      <section
        id="about"
        className="md:grid grid-cols-5 gap-12 items-center my-30"
      >
        <div className="col-span-3 flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <div className="mono text-sm tracking-widest text-[#9aa5ac]">
              01 - About
            </div>

            <div className="text-2xl font-black tracking-wider">What I do</div>
          </div>

          <div className="md:hidden bg-[#1e2731] rounded-sm">
            <div className="border border-[#2b3541] rounded-sm">
              {data.map((data) => {
                return (
                  <div
                    key={data.description}
                    className="flex items-center justify-between px-3 py-3 border-b border-[#2b3541]"
                  >
                    <div className="mono text-[#e7a33e] text-xl font-bold">
                      {data.title}
                    </div>
                    <div className="text-[#9aa5ac] text-sm">
                      {data.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-[#9aa5ac] flex flex-col gap-3">
            {article.map((article) => {
              return <p key={article.p_no}>{article.text}</p>;
            })}
          </div>

          <div className=""></div>
        </div>

        <div className="hidden md:block col-span-2 bg-[#1e2731] rounded-sm">
          <div className="border border-[#2b3541] rounded-sm">
            {data.map((data) => {
              return (
                <div
                  key={data.description}
                  className="flex items-center justify-between px-3 py-3 border-b border-[#2b3541]"
                >
                  <div className="mono text-[#e7a33e] text-xl font-bold">
                    {data.title}
                  </div>
                  <div className="text-[#9aa5ac] text-sm">
                    {data.description}
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
