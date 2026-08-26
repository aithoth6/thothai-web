import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LOGIN_URL } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { ThothAILogo } from "@/components/site/ThothAILogo";
import { ThothFoodLogo } from "@/components/site/ThothFoodLogo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const thothFoodLinks = [
  { to: "/thothfood/how-it-works", label: "How it works" },
  { to: "/thothfood/for-restaurants", label: "For Restaurants" },
  { to: "/thothfood/for-riders", label: "For Riders" },
  { to: "/thothfood/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

const parentLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isThothFood = location.pathname.startsWith("/thothfood");
  const links = isThothFood ? thothFoodLinks : parentLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        {isThothFood ? (
          <div className="flex flex-col justify-center">
            <Link
              to="/"
              className="text-[10px] font-semibold leading-none text-foreground/40 transition-colors hover:text-foreground/70"
            >
              Thoth Technologies ↗
            </Link>
            <Link to="/thothfood" className="mt-0.5">
              <ThothFoodLogo size="sm" />
            </Link>
          </div>
        ) : (
          <Link to="/">
            <ThothAILogo size="md" />
          </Link>
        )}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            if (!isThothFood && l.to === "/products") {
              return (
                <div key={l.to} className="flex items-center gap-0.5">
                  <Link
                    to="/products"
                    className="relative text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                    activeProps={{
                      className:
                        "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary",
                    }}
                  >
                    Our Products
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="ml-0.5 text-foreground/50 transition-colors hover:text-foreground"
                        aria-label="Products menu"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56 rounded-2xl border border-border bg-card p-2"
                      align="start"
                    >
                      <DropdownMenuItem asChild>
                        <Link
                          to="/thothfood"
                          className="flex cursor-pointer flex-col gap-0.5 rounded-xl px-3 py-2.5"
                        >
                          <span className="text-sm font-semibold">Thoth</span>
                          <span className="text-xs text-muted-foreground">
                            Order food on WhatsApp
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          to="/thothshop"
                          className="flex cursor-pointer flex-col gap-0.5 rounded-xl px-3 py-2.5"
                        >
                          <span className="text-sm font-semibold">ThothShop</span>
                          <span className="text-xs text-muted-foreground">
                            Sell anything on WhatsApp
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{
                  className:
                    "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isThothFood ? (
            <>
              <a
                href={LOGIN_URL}
                className="inline-flex h-10 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
              >
                Restaurant Login
              </a>
              <WhatsAppLink className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5">
                Order Now
              </WhatsAppLink>
            </>
          ) : (
            <Link
              to="/contact"
              search={{ role: undefined }}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) =>
              !isThothFood && l.to === "/products" ? (
                <div key={l.to}>
                  <Link
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
                  >
                    Our Products
                  </Link>
                  <div className="ml-4 flex flex-col gap-0.5 border-l border-border pl-3">
                    <Link
                      to="/thothfood"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-muted"
                    >
                      Thoth{" "}
                      <span className="ml-1 text-xs text-muted-foreground">
                        Order food on WhatsApp
                      </span>
                    </Link>
                    <Link
                      to="/thothshop"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-muted"
                    >
                      ThothShop{" "}
                      <span className="ml-1 text-xs text-muted-foreground">
                        Sell anything on WhatsApp
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
                >
                  {l.label}
                </Link>
              ),
            )}
            <div className="mt-2 flex flex-col gap-2">
              {isThothFood ? (
                <>
                  <a
                    href={LOGIN_URL}
                    onClick={() => setOpen(false)}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-border font-semibold text-foreground/80"
                  >
                    Restaurant Login
                  </a>
                  <WhatsAppLink
                    onClick={() => setOpen(false)}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
                  >
                    Order Now
                  </WhatsAppLink>
                </>
              ) : (
                <Link
                  to="/contact"
                  search={{ role: undefined }}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
                >
                  Get in touch
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
