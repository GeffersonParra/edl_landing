import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        const isScrolled = self.scroll() > 10;
        gsap.to(header, {
          backgroundColor: isScrolled ? "#205A65" : "transparent",
          duration: 0.2,
          ease: "elastic"
        });
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);
  const menuItems = [
    { label: "Nosotros", to: "/about_us" },
    { label: "Publicaciones", to: "/posts" },
    { label: "Proyectos", to: "/projects" },
    { label: "Contacto", to: "/contact" },
  ];
  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to={"/"} className="flex items-center">
            <img src="/images/logowhite1.png" className="w-[7rem]" ref={logoRef} />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="navItem">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-white hover:text-blue-200 transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}