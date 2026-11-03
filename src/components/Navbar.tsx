"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const router = useRouter();
  const session = { user: null };

  const logout = async () => {};

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="RoktoSetu Logo"
            width={180}
            height={180}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            Upcoming Events
          </Link>
          <Link
            href="/about"
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                      U
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">User</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      user@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/events/create")}>
                  Create Event
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/events/manage")}>
                  Manage Events
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/events/joined")}>
                  Joined Events
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-primary font-semibold"
                  onClick={logout}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-bold">
                Login
              </Button>
            </Link>
          )}

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => router.push("/")}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/events")}>
                  Upcoming Events
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/about")}>
                  About
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/contact")}>
                  Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
