import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    // { id: "certifications", label: "Certifications" },
    // { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border border-border" : "bg-transparent"} rounded-full px-5 py-2.5 max-w-[95%]`}>
      {/* wrapper flex biar responsive */}
      <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => scrollToSection(item.id)} className="whitespace-nowrap text-muted-foreground hover:text-primary transition-colors font-space text-sm md:text-base font-medium">
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
