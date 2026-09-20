import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Studio", path: "/studio" },
  { name: "About", path: "/about" },
  { name: "Journal", path: "/journal" },
  { name: "Reach Us", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link to="/" aria-label="Velorah home" className="font-display text-3xl tracking-tight text-foreground">
          Velorah<sup className="text-xs">®</sup>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Button asChild size="default" className="rounded-full px-6 py-2.5 text-sm hover:scale-[1.03]">
          <Link to="/contact">Begin Journey</Link>
        </Button>
      </div>
    </header>
  );
}
