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
      <div className="bg-[#10161d] border-b border-[#1e2731] px-35 py-4 ">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Kohly Akpet
            <span className="text-yellow-600">.</span>
          </Link>

          <div className="flex gap-8">
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
        </nav>
      </div>
    </>
  );
}
