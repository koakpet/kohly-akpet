const contacts = [
  {title: "2024", description: "Business Intelligence Analsyt since"},
  {title: "6", description: "ICT team members led"},
  {title: "3", description: "Professional certifications"},
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="md:grid grid-cols-5 gap-12 items-center my-30"
      >
        <div className="col-span-3 flex flex-col gap-9">
          <div className="flex flex-col gap-3">
            <div className="mono text-sm tracking-widest text-[#9aa5ac]">
              05 - Contact
            </div>
            <div className="text-3xl font-black tracking-wider">
              Let&apos;s work together
            </div>
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
            Open to remote data analyst and fullstack roles.
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
