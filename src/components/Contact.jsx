import Link from "next/link";

const contacts = [
  {name: "LinkedIn", link: "https://www.linkedin.com/in/kohly-akpet/"},
  {name: "GitHub", link: "https://github.com/koakpet"},
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="mt-30 mb-15 flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <div className="mono text-sm tracking-widest text-[#9aa5ac]">
            05 - Contact
          </div>
          <div className="text-2xl font-black tracking-wider">
            Let&apos;s work together
          </div>
        </div>

        <div className="md:flex md:justify-between">
          <div className="mono text-sm text-[#9aa5ac]">
            Open to remote data analyst and fullstack roles.
          </div>

          <div className="flex gap-6 mono text-sm text-[#9aa5ac]  mt-18 md:mt-6">
            {contacts.map((contact) => {
              return (
                <Link key={contact.name} href={contact.link} target="_blank">
                  <span className="hover:text-white">{contact.name}</span>
                </Link>
              );
            })}
            <a href="mailto:kmoakpet@gmail.com">
              <span className="hover:text-white">Email</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
