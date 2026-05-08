"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AppNavbar() {
  const router = useRouter();
  const navItems = [
    {
      name: "for manager",
      link: "/manager",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler variant="circle" fromCenter />
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <AnimatedThemeToggler variant="circle" fromCenter />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 font-medium py-2"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full"
            >
              Login
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
