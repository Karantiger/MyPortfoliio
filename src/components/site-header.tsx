import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/resume", label: "Resume" },
];

export function SiteHeader() {
  return (
    <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg tracking-tight">
        Jensen Omega
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            className="hover:text-primary transition"
          >
            {l.label}
          </Link>
        ))}
        <Link to="/" hash="contacts" className="hover:text-primary transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
