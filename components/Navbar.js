import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky inset-0 z-10 backdrop-blur-md p-4">
      <div className="container flex items-center justify-between px-4">
        <Link href="/">
          {/* <Image src="/logo.png" alt="logo" width={80} height={80} /> */}
          <span className="text-2xl font-black flex items-center justify-center my-4">
            P<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden items-end gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-all text-primary h-8 hover:border-b-2 font-medium cursor-pointer"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium transition-colors text-xl text-primary hover:text-gray-900 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
