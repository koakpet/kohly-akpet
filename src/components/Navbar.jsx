import Link from "next/link";

const navLinks = [
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Experience", href: "#experience"},
  {name: "Contact", href: "#contact"},
];

export default function Navbar() {
  return (
    <>
      <header className="fixed insert-x-0 top-0 w-full">
        <div className=" bg-[#10161d] border-b border-[#1e2731] px-3 md:px-35 py-4 ">
          <nav className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-2xl">
              Kohly Akpet
              <span className="text-[#e7a33e]">.</span>
            </Link>

            <div className="md:flex gap-8 hidden">
              {navLinks.map((link) => {
                return (
                  <Link key={link.name} href={link.href}>
                    <span className="hover:text-white text-[#9aa5ac] text-sm font-normal tracking-wide">
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="flex gap-3 md:hidden"></div>
          </nav>
        </div>
      </header>
    </>
  );
}
